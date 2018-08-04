// Generated from C:\git-seaquail.visualstudio.com\AntlrEditor\src\server\compiler\output\CSV\CSV.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by CSVParser.

function CSVVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

CSVVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
CSVVisitor.prototype.constructor = CSVVisitor;

// Visit a parse tree produced by CSVParser#csvFile.
CSVVisitor.prototype.visitCsvFile = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CSVParser#hdr.
CSVVisitor.prototype.visitHdr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CSVParser#row.
CSVVisitor.prototype.visitRow = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CSVParser#field.
CSVVisitor.prototype.visitField = function(ctx) {
  return this.visitChildren(ctx);
};



exports.CSVVisitor = CSVVisitor;