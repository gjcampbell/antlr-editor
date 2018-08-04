// Generated from C:\git-seaquail.visualstudio.com\AntlrEditor\src\server\compiler\output\emailaddress\emailaddress.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by emailaddressParser.
function emailaddressListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

emailaddressListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
emailaddressListener.prototype.constructor = emailaddressListener;

// Enter a parse tree produced by emailaddressParser#emailaddress.
emailaddressListener.prototype.enterEmailaddress = function(ctx) {
};

// Exit a parse tree produced by emailaddressParser#emailaddress.
emailaddressListener.prototype.exitEmailaddress = function(ctx) {
};


// Enter a parse tree produced by emailaddressParser#group.
emailaddressListener.prototype.enterGroup = function(ctx) {
};

// Exit a parse tree produced by emailaddressParser#group.
emailaddressListener.prototype.exitGroup = function(ctx) {
};


// Enter a parse tree produced by emailaddressParser#mailbox.
emailaddressListener.prototype.enterMailbox = function(ctx) {
};

// Exit a parse tree produced by emailaddressParser#mailbox.
emailaddressListener.prototype.exitMailbox = function(ctx) {
};


// Enter a parse tree produced by emailaddressParser#routeaddr.
emailaddressListener.prototype.enterRouteaddr = function(ctx) {
};

// Exit a parse tree produced by emailaddressParser#routeaddr.
emailaddressListener.prototype.exitRouteaddr = function(ctx) {
};


// Enter a parse tree produced by emailaddressParser#route.
emailaddressListener.prototype.enterRoute = function(ctx) {
};

// Exit a parse tree produced by emailaddressParser#route.
emailaddressListener.prototype.exitRoute = function(ctx) {
};


// Enter a parse tree produced by emailaddressParser#addrspec.
emailaddressListener.prototype.enterAddrspec = function(ctx) {
};

// Exit a parse tree produced by emailaddressParser#addrspec.
emailaddressListener.prototype.exitAddrspec = function(ctx) {
};


// Enter a parse tree produced by emailaddressParser#localpart.
emailaddressListener.prototype.enterLocalpart = function(ctx) {
};

// Exit a parse tree produced by emailaddressParser#localpart.
emailaddressListener.prototype.exitLocalpart = function(ctx) {
};


// Enter a parse tree produced by emailaddressParser#domain.
emailaddressListener.prototype.enterDomain = function(ctx) {
};

// Exit a parse tree produced by emailaddressParser#domain.
emailaddressListener.prototype.exitDomain = function(ctx) {
};


// Enter a parse tree produced by emailaddressParser#subdomain.
emailaddressListener.prototype.enterSubdomain = function(ctx) {
};

// Exit a parse tree produced by emailaddressParser#subdomain.
emailaddressListener.prototype.exitSubdomain = function(ctx) {
};


// Enter a parse tree produced by emailaddressParser#domainref.
emailaddressListener.prototype.enterDomainref = function(ctx) {
};

// Exit a parse tree produced by emailaddressParser#domainref.
emailaddressListener.prototype.exitDomainref = function(ctx) {
};


// Enter a parse tree produced by emailaddressParser#phrase.
emailaddressListener.prototype.enterPhrase = function(ctx) {
};

// Exit a parse tree produced by emailaddressParser#phrase.
emailaddressListener.prototype.exitPhrase = function(ctx) {
};


// Enter a parse tree produced by emailaddressParser#word.
emailaddressListener.prototype.enterWord = function(ctx) {
};

// Exit a parse tree produced by emailaddressParser#word.
emailaddressListener.prototype.exitWord = function(ctx) {
};


// Enter a parse tree produced by emailaddressParser#lwspchar.
emailaddressListener.prototype.enterLwspchar = function(ctx) {
};

// Exit a parse tree produced by emailaddressParser#lwspchar.
emailaddressListener.prototype.exitLwspchar = function(ctx) {
};


// Enter a parse tree produced by emailaddressParser#lwsp.
emailaddressListener.prototype.enterLwsp = function(ctx) {
};

// Exit a parse tree produced by emailaddressParser#lwsp.
emailaddressListener.prototype.exitLwsp = function(ctx) {
};


// Enter a parse tree produced by emailaddressParser#delimeters.
emailaddressListener.prototype.enterDelimeters = function(ctx) {
};

// Exit a parse tree produced by emailaddressParser#delimeters.
emailaddressListener.prototype.exitDelimeters = function(ctx) {
};


// Enter a parse tree produced by emailaddressParser#atom.
emailaddressListener.prototype.enterAtom = function(ctx) {
};

// Exit a parse tree produced by emailaddressParser#atom.
emailaddressListener.prototype.exitAtom = function(ctx) {
};


// Enter a parse tree produced by emailaddressParser#quotedpair.
emailaddressListener.prototype.enterQuotedpair = function(ctx) {
};

// Exit a parse tree produced by emailaddressParser#quotedpair.
emailaddressListener.prototype.exitQuotedpair = function(ctx) {
};


// Enter a parse tree produced by emailaddressParser#domainliteral.
emailaddressListener.prototype.enterDomainliteral = function(ctx) {
};

// Exit a parse tree produced by emailaddressParser#domainliteral.
emailaddressListener.prototype.exitDomainliteral = function(ctx) {
};


// Enter a parse tree produced by emailaddressParser#quotedstring.
emailaddressListener.prototype.enterQuotedstring = function(ctx) {
};

// Exit a parse tree produced by emailaddressParser#quotedstring.
emailaddressListener.prototype.exitQuotedstring = function(ctx) {
};


// Enter a parse tree produced by emailaddressParser#comment.
emailaddressListener.prototype.enterComment = function(ctx) {
};

// Exit a parse tree produced by emailaddressParser#comment.
emailaddressListener.prototype.exitComment = function(ctx) {
};



exports.emailaddressListener = emailaddressListener;