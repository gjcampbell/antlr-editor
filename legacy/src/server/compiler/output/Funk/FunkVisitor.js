// Generated from C:\git-seaquail.visualstudio.com\AntlrEditor\src\server\compiler\output\Funk\Funk.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by FunkParser.

function FunkVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

FunkVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
FunkVisitor.prototype.constructor = FunkVisitor;

// Visit a parse tree produced by FunkParser#where.
FunkVisitor.prototype.visitWhere = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FunkParser#allUpInThere.
FunkVisitor.prototype.visitAllUpInThere = function(ctx) {
  return this.visitChildren(ctx);
};



exports.FunkVisitor = FunkVisitor;