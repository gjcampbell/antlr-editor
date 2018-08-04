'use strict';
var fs = require('fs');
var proc = require('child_process');
var path = require('path')

class CompilerCommandLine {
    constructor() {

    }
    static runAntlr4(grammarName, g4Path, outputPath, language, callback) {        
        proc.exec(`java org.antlr.v4.Tool "${g4Path}" -o "${outputPath}" -visitor -Dlanguage=${language}`, (error, stdout, stderr) => {
            if (stderr) {
                console.log(`stderr: ${stderr}`);
            }
            callback({
                grammar: grammarName,
                success: !error,
                details: error,
                output: stderr
            });
        });
    }

    static buildJsBundle(grammarName, callback) {
        proc.exec(`webpack --config ./server/webpack.grammar.config.js --env ${grammarName}`, (error, stdout, stderr) => {
            if (error) {
                console.log(`stderr: ${error}`);
            }
            callback({
                success: !error,
                details: error,
                output: error ? stdout : null
            });
        });
    }
}

class WebPackCompiler {
    constructor(options) {
        this.GrammarName = options.grammarName;
        this.OutputPath = path.resolve(global.fromRoot(global.env.outputPath), `./${this.GrammarName}`);
        this.GrammarFilePath = path.resolve(this.OutputPath, `./${this.GrammarName}.g4`);
    }
    compile(callback) {
        this.buildWebPackage(callback);
    }

    buildWebPackage(callback) {
        this.writeEntryJs(() => {
            CompilerCommandLine.buildJsBundle(this.GrammarName, callback);
        });
    }

    writeEntryJs(callback) {
        var stream = fs.createWriteStream(path.resolve(`${this.OutputPath}`, './entry.js'));
        stream.once('open', () => {
            var filePath = `${global.env.outputPath}${this.GrammarName}/${this.GrammarName}`;

            stream.write(`
import Lexer from './${this.GrammarName}Lexer.js';
import Parser from './${this.GrammarName}Parser.js';
import Visitor from './${this.GrammarName}Visitor.js';
import main from '../../../client/grammar-main.js';

main.start('${this.GrammarName}', Lexer.${this.GrammarName}Lexer, Parser.${this.GrammarName}Parser, Visitor.${this.GrammarName}Visitor);
`);
            stream.end();

            callback();
        })
    }
}

class GrammarCompiler {
    constructor(options) {
        this.GrammarName = GrammarCompiler.parseGrammarName(options.grammar);
        this.OutputPath = path.resolve(global.fromRoot(global.env.outputPath), `./${this.GrammarName}`);
        this.GrammarFilePath = path.resolve(this.OutputPath, `./${this.GrammarName}.g4`);
        this.Grammar = options.grammar;
    }
    compile(callback) {
        this.saveG4(() => {
            CompilerCommandLine.runAntlr4(this.GrammarName, this.GrammarFilePath, this.OutputPath, 'JavaScript', (result) => {
                callback(result);
            });
        });
    }

    saveG4(callback) {
        if (!fs.existsSync(this.OutputPath)) {
            fs.mkdirSync(this.OutputPath);
        }

        var stream = fs.createWriteStream(this.GrammarFilePath);

        stream.once('open', () => {
            stream.write(this.Grammar);
            stream.end();

            callback();
        });
    }

    static parseGrammarName(grammar) {
        var result = '',
            lines = grammar.split(/\r|\n/g);

        for (var i = 0; i < lines.length; i++) {
            if (lines[i].match(/^grammar/)) {
                result = lines[i].replace(/^grammar\s+/, '').replace(';', '');
                break;
            }
        }

        if (result.match(/^[a-zA-Z0-9_]+$/)) {
            return result;
        } else {
            throw `invalid grammar name "${result}". grammar name must be found in grammar and match /^[a-zA-Z0-9_]+$/`;
        }
    }
}

module.exports = {
    GrammarCompiler: GrammarCompiler,
    WebPackCompiler: WebPackCompiler
};