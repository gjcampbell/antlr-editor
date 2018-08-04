'use strict';

let antlr = require('antlr4/index');

class BasicErrorListener extends antlr.error.ErrorListener {
    constructor() {
        super();

        this.Errors = [];
    }
    syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
        this.Errors.push("line " + line + ":" + column + " " + msg);
    };
}

class VisitorExtender {
    constructor(Lexer, Parser, Visitor, name) {
        this.Lexer = Lexer;
        this.Parser = Parser;
        this.Visitor = Visitor;
    }

    extend() {
        let result = this.createType(),
            Lexer = this.Lexer,
            Parser = this.Parser,
            visitMethods = {};
        
        for (var k in result.prototype) {
            visitMethods[k.toLowerCase()] = result.prototype[k];
        }

        result.prototype.parse = function (input, startRule) {
            let chars = new antlr.InputStream(input),
                lexer = new Lexer(chars),
                tokens = new antlr.CommonTokenStream(lexer),
                parser = new Parser(tokens),
                tree = null,
                errorCollector = new BasicErrorListener();

            parser.buildParseTrees = true;
            parser.addErrorListener(errorCollector);            

            try {
                tree = parser[startRule]();

                let result = visitMethods[`visit${startRule.toLowerCase()}`].call(this, tree);
                
                return { details: errorCollector.Errors, success: !errorCollector.Errors.length, data: result };
            } catch (err) {
                return { details: errorCollector.Errors, success: false, data: {} };
            }
        };

        return result;
    }

    createType() {
        let result = function () { },
            Lexer = this.Lexer,
            symbolNames = new Lexer().symbolicNames;
        result.prototype = new this.Visitor();

        result.prototype.visitTerminal = function (ctx) {
            let symbolType = ctx.symbol && ctx.symbol.type,
                symbolName = symbolNames[symbolType],
                text = ctx.getText();

            return { name: symbolName ? `${symbolName}: ${text}` : text, children: [], id: symbolName };
        }
        
        for (let k in result.prototype) {
            if (k.startsWith('visit') && k !== 'visitChildren' && k !== 'visitTerminal' && k !== 'visitErrorNode' && k !== 'visit') {
                let node = k.replace(/visit/, ''),
                    rule = node.substring(0, 1).toLowerCase() + node.substring(1);
                result.prototype[k] = function(ctx) { 
                    return {
                        name: rule,
                        id: rule,
                        children: this.visitChildren(ctx).filter(item => item)
                    };
                }
            }
        }

        return result;
    }
}

module.exports = VisitorExtender;