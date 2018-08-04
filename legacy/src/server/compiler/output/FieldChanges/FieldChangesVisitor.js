// Generated from C:\git-seaquail.visualstudio.com\AntlrEditor\src\server\compiler\output\FieldChanges\FieldChanges.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by FieldChangesParser.

function FieldChangesVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

FieldChangesVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
FieldChangesVisitor.prototype.constructor = FieldChangesVisitor;

// Visit a parse tree produced by FieldChangesParser#session.
FieldChangesVisitor.prototype.visitSession = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FieldChangesParser#sessionName.
FieldChangesVisitor.prototype.visitSessionName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FieldChangesParser#documents.
FieldChangesVisitor.prototype.visitDocuments = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FieldChangesParser#document.
FieldChangesVisitor.prototype.visitDocument = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FieldChangesParser#documentName.
FieldChangesVisitor.prototype.visitDocumentName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FieldChangesParser#fieldValues.
FieldChangesVisitor.prototype.visitFieldValues = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FieldChangesParser#fieldValue.
FieldChangesVisitor.prototype.visitFieldValue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FieldChangesParser#action.
FieldChangesVisitor.prototype.visitAction = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FieldChangesParser#fieldName.
FieldChangesVisitor.prototype.visitFieldName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FieldChangesParser#value.
FieldChangesVisitor.prototype.visitValue = function(ctx) {
  return this.visitChildren(ctx);
};



exports.FieldChangesVisitor = FieldChangesVisitor;