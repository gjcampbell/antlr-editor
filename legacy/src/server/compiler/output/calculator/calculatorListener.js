// Generated from C:\git-seaquail.visualstudio.com\AntlrEditor\src\server\compiler\output\calculator\calculator.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by calculatorParser.
function calculatorListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

calculatorListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
calculatorListener.prototype.constructor = calculatorListener;

// Enter a parse tree produced by calculatorParser#equation.
calculatorListener.prototype.enterEquation = function(ctx) {
};

// Exit a parse tree produced by calculatorParser#equation.
calculatorListener.prototype.exitEquation = function(ctx) {
};


// Enter a parse tree produced by calculatorParser#expression.
calculatorListener.prototype.enterExpression = function(ctx) {
};

// Exit a parse tree produced by calculatorParser#expression.
calculatorListener.prototype.exitExpression = function(ctx) {
};


// Enter a parse tree produced by calculatorParser#multiplyingExpression.
calculatorListener.prototype.enterMultiplyingExpression = function(ctx) {
};

// Exit a parse tree produced by calculatorParser#multiplyingExpression.
calculatorListener.prototype.exitMultiplyingExpression = function(ctx) {
};


// Enter a parse tree produced by calculatorParser#powExpression.
calculatorListener.prototype.enterPowExpression = function(ctx) {
};

// Exit a parse tree produced by calculatorParser#powExpression.
calculatorListener.prototype.exitPowExpression = function(ctx) {
};


// Enter a parse tree produced by calculatorParser#signedAtom.
calculatorListener.prototype.enterSignedAtom = function(ctx) {
};

// Exit a parse tree produced by calculatorParser#signedAtom.
calculatorListener.prototype.exitSignedAtom = function(ctx) {
};


// Enter a parse tree produced by calculatorParser#atom.
calculatorListener.prototype.enterAtom = function(ctx) {
};

// Exit a parse tree produced by calculatorParser#atom.
calculatorListener.prototype.exitAtom = function(ctx) {
};


// Enter a parse tree produced by calculatorParser#scientific.
calculatorListener.prototype.enterScientific = function(ctx) {
};

// Exit a parse tree produced by calculatorParser#scientific.
calculatorListener.prototype.exitScientific = function(ctx) {
};


// Enter a parse tree produced by calculatorParser#constant.
calculatorListener.prototype.enterConstant = function(ctx) {
};

// Exit a parse tree produced by calculatorParser#constant.
calculatorListener.prototype.exitConstant = function(ctx) {
};


// Enter a parse tree produced by calculatorParser#variable.
calculatorListener.prototype.enterVariable = function(ctx) {
};

// Exit a parse tree produced by calculatorParser#variable.
calculatorListener.prototype.exitVariable = function(ctx) {
};


// Enter a parse tree produced by calculatorParser#func.
calculatorListener.prototype.enterFunc = function(ctx) {
};

// Exit a parse tree produced by calculatorParser#func.
calculatorListener.prototype.exitFunc = function(ctx) {
};


// Enter a parse tree produced by calculatorParser#funcname.
calculatorListener.prototype.enterFuncname = function(ctx) {
};

// Exit a parse tree produced by calculatorParser#funcname.
calculatorListener.prototype.exitFuncname = function(ctx) {
};


// Enter a parse tree produced by calculatorParser#relop.
calculatorListener.prototype.enterRelop = function(ctx) {
};

// Exit a parse tree produced by calculatorParser#relop.
calculatorListener.prototype.exitRelop = function(ctx) {
};



exports.calculatorListener = calculatorListener;