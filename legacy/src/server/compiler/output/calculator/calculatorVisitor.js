// Generated from C:\git-seaquail.visualstudio.com\AntlrEditor\src\server\compiler\output\calculator\calculator.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by calculatorParser.

function calculatorVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

calculatorVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
calculatorVisitor.prototype.constructor = calculatorVisitor;

// Visit a parse tree produced by calculatorParser#equation.
calculatorVisitor.prototype.visitEquation = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by calculatorParser#expression.
calculatorVisitor.prototype.visitExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by calculatorParser#multiplyingExpression.
calculatorVisitor.prototype.visitMultiplyingExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by calculatorParser#powExpression.
calculatorVisitor.prototype.visitPowExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by calculatorParser#signedAtom.
calculatorVisitor.prototype.visitSignedAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by calculatorParser#atom.
calculatorVisitor.prototype.visitAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by calculatorParser#scientific.
calculatorVisitor.prototype.visitScientific = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by calculatorParser#constant.
calculatorVisitor.prototype.visitConstant = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by calculatorParser#variable.
calculatorVisitor.prototype.visitVariable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by calculatorParser#func.
calculatorVisitor.prototype.visitFunc = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by calculatorParser#funcname.
calculatorVisitor.prototype.visitFuncname = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by calculatorParser#relop.
calculatorVisitor.prototype.visitRelop = function(ctx) {
  return this.visitChildren(ctx);
};



exports.calculatorVisitor = calculatorVisitor;