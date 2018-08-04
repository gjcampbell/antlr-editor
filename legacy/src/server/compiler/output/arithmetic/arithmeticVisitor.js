// Generated from C:\git-seaquail.visualstudio.com\AntlrEditor\src\server\compiler\output\arithmetic\arithmetic.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by arithmeticParser.

function arithmeticVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

arithmeticVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
arithmeticVisitor.prototype.constructor = arithmeticVisitor;

// Visit a parse tree produced by arithmeticParser#equation.
arithmeticVisitor.prototype.visitEquation = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by arithmeticParser#expression.
arithmeticVisitor.prototype.visitExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by arithmeticParser#term.
arithmeticVisitor.prototype.visitTerm = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by arithmeticParser#factor.
arithmeticVisitor.prototype.visitFactor = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by arithmeticParser#signedAtom.
arithmeticVisitor.prototype.visitSignedAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by arithmeticParser#atom.
arithmeticVisitor.prototype.visitAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by arithmeticParser#scientific.
arithmeticVisitor.prototype.visitScientific = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by arithmeticParser#variable.
arithmeticVisitor.prototype.visitVariable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by arithmeticParser#relop.
arithmeticVisitor.prototype.visitRelop = function(ctx) {
  return this.visitChildren(ctx);
};



exports.arithmeticVisitor = arithmeticVisitor;