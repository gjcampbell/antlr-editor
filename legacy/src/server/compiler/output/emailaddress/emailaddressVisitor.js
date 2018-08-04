// Generated from C:\git-seaquail.visualstudio.com\AntlrEditor\src\server\compiler\output\emailaddress\emailaddress.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by emailaddressParser.

function emailaddressVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

emailaddressVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
emailaddressVisitor.prototype.constructor = emailaddressVisitor;

// Visit a parse tree produced by emailaddressParser#emailaddress.
emailaddressVisitor.prototype.visitEmailaddress = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by emailaddressParser#group.
emailaddressVisitor.prototype.visitGroup = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by emailaddressParser#mailbox.
emailaddressVisitor.prototype.visitMailbox = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by emailaddressParser#routeaddr.
emailaddressVisitor.prototype.visitRouteaddr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by emailaddressParser#route.
emailaddressVisitor.prototype.visitRoute = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by emailaddressParser#addrspec.
emailaddressVisitor.prototype.visitAddrspec = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by emailaddressParser#localpart.
emailaddressVisitor.prototype.visitLocalpart = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by emailaddressParser#domain.
emailaddressVisitor.prototype.visitDomain = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by emailaddressParser#subdomain.
emailaddressVisitor.prototype.visitSubdomain = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by emailaddressParser#domainref.
emailaddressVisitor.prototype.visitDomainref = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by emailaddressParser#phrase.
emailaddressVisitor.prototype.visitPhrase = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by emailaddressParser#word.
emailaddressVisitor.prototype.visitWord = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by emailaddressParser#lwspchar.
emailaddressVisitor.prototype.visitLwspchar = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by emailaddressParser#lwsp.
emailaddressVisitor.prototype.visitLwsp = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by emailaddressParser#delimeters.
emailaddressVisitor.prototype.visitDelimeters = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by emailaddressParser#atom.
emailaddressVisitor.prototype.visitAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by emailaddressParser#quotedpair.
emailaddressVisitor.prototype.visitQuotedpair = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by emailaddressParser#domainliteral.
emailaddressVisitor.prototype.visitDomainliteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by emailaddressParser#quotedstring.
emailaddressVisitor.prototype.visitQuotedstring = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by emailaddressParser#comment.
emailaddressVisitor.prototype.visitComment = function(ctx) {
  return this.visitChildren(ctx);
};



exports.emailaddressVisitor = emailaddressVisitor;