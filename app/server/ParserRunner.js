"use strict";

let VisitorExtender = require('./VisitorExtender.js');
let path = require('path');
let fs = require('fs');

let dynamicRequire = __non_webpack_require__ || require;

class ParserRunner {
    constructor(outputPath) {
        this.OutputPath = outputPath;
    }

    static parse(outputPath, grammar, rule, input) {
        let runner = new ParserRunner(outputPath);

        ParserRunner.ensureGlobalAntlr();

        grammar = grammar.split('.g4')[0];
        runner.clearRequireCache(grammar);

        let [Lexer, Parser, Visitor] = runner.requireParser(grammar),
            extender = new VisitorExtender(Lexer, Parser, Visitor, grammar),
            CustomVisitor = extender.extend(),
            visitorInstance = new CustomVisitor();

        return visitorInstance.parse(input, rule);
    }

    static dependencyTypes() {
        return ['Lexer', 'Parser', 'Visitor']
    }

    static getDependencyTypeName(grammar, dependencyType) {
        let g = grammar.replace(/(Lexer|Parser)$/, '');
        return g === grammar ? `${grammar}${dependencyType}`
            : dependencyType === 'Visitor' ? `${g}ParserVisitor`
                : `${g}${dependencyType}`;
    }

    static ensureGlobalAntlr() {
        if (!global.__antlr) {
            global.__antlr = require('antlr4/index');
        }
    }

    static prepare(outputDir) {
        let outputFiles = fs.readdirSync(outputDir).filter(p => p.match(/(Lexer|Parser|Visitor|Listener)\.js/))
            .map(fileName => path.resolve(outputDir, './' + fileName));

        outputFiles.forEach(f => {
            let fileContents = fs.readFileSync(f, 'utf8');
            fileContents = fileContents.replace('require(\'antlr4/index\')', 'global.__antlr');
            fs.writeFileSync(f, fileContents);
        });
    }

    clearRequireCache(grammar) {
        ParserRunner.dependencyTypes().forEach(d => {
            delete dynamicRequire.cache[this.getDependencyPath(grammar, d).path];
        });
    }

    requireParser(grammar) {
        return ParserRunner.dependencyTypes().map(d => this.getDependencyPath(grammar, d))
            .map(d => dynamicRequire(d.path)[d.typeName]);
    }

    getDependencyPath(grammar, dependencyType) {
        let typeName = ParserRunner.getDependencyTypeName(grammar, dependencyType),
            outputLocation = path.resolve(this.OutputPath, `./${typeName}.js`);

        return { typeName: typeName, path: outputLocation };
    }
}

module.exports = ParserRunner;
