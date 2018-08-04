// Generated from C:\git-seaquail.visualstudio.com\AntlrEditor\src\server\compiler\output\DMQField\DMQField.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by DMQFieldParser.

function DMQFieldVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

DMQFieldVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
DMQFieldVisitor.prototype.constructor = DMQFieldVisitor;

// Visit a parse tree produced by DMQFieldParser#aliasedExpr.
DMQFieldVisitor.prototype.visitAliasedExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DMQFieldParser#alias.
DMQFieldVisitor.prototype.visitAlias = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DMQFieldParser#expr.
DMQFieldVisitor.prototype.visitExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DMQFieldParser#fieldOperation.
DMQFieldVisitor.prototype.visitFieldOperation = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DMQFieldParser#fieldModifier.
DMQFieldVisitor.prototype.visitFieldModifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DMQFieldParser#fieldOperator.
DMQFieldVisitor.prototype.visitFieldOperator = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DMQFieldParser#fieldExpressionGroup.
DMQFieldVisitor.prototype.visitFieldExpressionGroup = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DMQFieldParser#fieldExpression.
DMQFieldVisitor.prototype.visitFieldExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DMQFieldParser#fieldChain.
DMQFieldVisitor.prototype.visitFieldChain = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DMQFieldParser#fieldChainLink.
DMQFieldVisitor.prototype.visitFieldChainLink = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DMQFieldParser#fieldName.
DMQFieldVisitor.prototype.visitFieldName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DMQFieldParser#variable.
DMQFieldVisitor.prototype.visitVariable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DMQFieldParser#safeFieldName.
DMQFieldVisitor.prototype.visitSafeFieldName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DMQFieldParser#escapedFieldName.
DMQFieldVisitor.prototype.visitEscapedFieldName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DMQFieldParser#functionCall.
DMQFieldVisitor.prototype.visitFunctionCall = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DMQFieldParser#functionName.
DMQFieldVisitor.prototype.visitFunctionName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DMQFieldParser#singleParameter.
DMQFieldVisitor.prototype.visitSingleParameter = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DMQFieldParser#parameterList.
DMQFieldVisitor.prototype.visitParameterList = function(ctx) {
  return this.visitChildren(ctx);
};



exports.DMQFieldVisitor = DMQFieldVisitor;