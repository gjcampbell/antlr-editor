// Generated from C:\Users\gcampbell\Documents\Arch\Conference\KCDC 2017\src\server\compiler\output\Hello\Hello.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by HelloParser.

function HelloVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

HelloVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
HelloVisitor.prototype.constructor = HelloVisitor;

// Visit a parse tree produced by HelloParser#what.
HelloVisitor.prototype.visitWhat = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by HelloParser#problem.
HelloVisitor.prototype.visitProblem = function(ctx) {
  return this.visitChildren(ctx);
};



exports.HelloVisitor = HelloVisitor;