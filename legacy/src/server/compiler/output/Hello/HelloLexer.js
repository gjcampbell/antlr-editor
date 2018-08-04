// Generated from C:\Users\gcampbell\Documents\Arch\Conference\KCDC 2017\src\server\compiler\output\Hello\Hello.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u0005\u000f\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003",
    "\u0004\u0003\u0004\u0002\u0002\u0005\u0003\u0003\u0005\u0004\u0007\u0005",
    "\u0003\u0002\u0003\u0004\u0002C\\c|\u0002\u000e\u0002\u0003\u0003\u0002",
    "\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003\u0002",
    "\u0002\u0002\u0003\t\u0003\u0002\u0002\u0002\u0005\u000b\u0003\u0002",
    "\u0002\u0002\u0007\r\u0003\u0002\u0002\u0002\t\n\u0007/\u0002\u0002",
    "\n\u0004\u0003\u0002\u0002\u0002\u000b\f\u00071\u0002\u0002\f\u0006",
    "\u0003\u0002\u0002\u0002\r\u000e\t\u0002\u0002\u0002\u000e\b\u0003\u0002",
    "\u0002\u0002\u0003\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function HelloLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

HelloLexer.prototype = Object.create(antlr4.Lexer.prototype);
HelloLexer.prototype.constructor = HelloLexer;

HelloLexer.EOF = antlr4.Token.EOF;
HelloLexer.DASH = 1;
HelloLexer.SLASH = 2;
HelloLexer.LETTER = 3;

HelloLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

HelloLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

HelloLexer.prototype.literalNames = [ null, "'-'", "'/'" ];

HelloLexer.prototype.symbolicNames = [ null, "DASH", "SLASH", "LETTER" ];

HelloLexer.prototype.ruleNames = [ "DASH", "SLASH", "LETTER" ];

HelloLexer.prototype.grammarFileName = "Hello.g4";



exports.HelloLexer = HelloLexer;

