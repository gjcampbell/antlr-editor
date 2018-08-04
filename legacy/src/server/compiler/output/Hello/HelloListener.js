// Generated from C:\Users\gcampbell\Documents\Arch\Conference\KCDC 2017\src\server\compiler\output\Hello\Hello.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by HelloParser.
function HelloListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

HelloListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
HelloListener.prototype.constructor = HelloListener;

// Enter a parse tree produced by HelloParser#what.
HelloListener.prototype.enterWhat = function(ctx) {
};

// Exit a parse tree produced by HelloParser#what.
HelloListener.prototype.exitWhat = function(ctx) {
};


// Enter a parse tree produced by HelloParser#problem.
HelloListener.prototype.enterProblem = function(ctx) {
};

// Exit a parse tree produced by HelloParser#problem.
HelloListener.prototype.exitProblem = function(ctx) {
};



exports.HelloListener = HelloListener;