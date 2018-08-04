'use strict';

let VisitorExtender = require('./VisitorExtender.js');

class ParserRunner {
    constructor() {

    }

    static parse(grammar, rule, input) {
        let [Lexer, Parser, Visitor] = ParserRunner.requireParser(grammar),
            extender = new VisitorExtender(Lexer, Parser, Visitor, grammar),
            CustomVisitor = extender.extend(),
            visitorInstance = new CustomVisitor();

        return visitorInstance.parse(input, rule);
    }

    static dependencyTypes() {
        return ['Lexer', 'Parser', 'Visitor']
    };

    static clearRequireCache(grammar) {
        ParserRunner.dependencyTypes().forEach(d => delete require.cache[ParserRunner.getDependencyPath(grammar, d).path]);
    }

    static requireParser(grammar) {
        return ParserRunner.dependencyTypes().map(d => ParserRunner.getDependencyPath(grammar, d))
            .map(d => require(d.path)[d.typeName]);
    }

    static getDependencyPath(grammar, dependencyType) {
        let typeName = ParserRunner.getDependencyTypeName(grammar, dependencyType),
            path = global.fromRoot(global.env.outputPath, `./${grammar}/${typeName}.js`);

        return { typeName: typeName, path: path };
    }

    static getDependencyTypeName(grammar, dependencyType) {
        return `${grammar}${dependencyType}`;
    }
}

module.exports = ParserRunner;
