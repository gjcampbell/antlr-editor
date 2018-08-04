// Generated from C:\git-seaquail.visualstudio.com\AntlrEditor\src\server\compiler\output\Funk\Funk.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u0004\u000e\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0003",
    "\u0002\u0003\u0002\u0003\u0003\u0006\u0003\u000b\n\u0003\r\u0003\u000e",
    "\u0003\f\u0002\u0002\u0004\u0003\u0003\u0005\u0004\u0003\u0002\u0003",
    "\u0004\u0002C\\c|\u0002\u000e\u0002\u0003\u0003\u0002\u0002\u0002\u0002",
    "\u0005\u0003\u0002\u0002\u0002\u0003\u0007\u0003\u0002\u0002\u0002\u0005",
    "\n\u0003\u0002\u0002\u0002\u0007\b\u0007\"\u0002\u0002\b\u0004\u0003",
    "\u0002\u0002\u0002\t\u000b\t\u0002\u0002\u0002\n\t\u0003\u0002\u0002",
    "\u0002\u000b\f\u0003\u0002\u0002\u0002\f\n\u0003\u0002\u0002\u0002\f",
    "\r\u0003\u0002\u0002\u0002\r\u0006\u0003\u0002\u0002\u0002\u0004\u0002",
    "\f\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function FunkLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

FunkLexer.prototype = Object.create(antlr4.Lexer.prototype);
FunkLexer.prototype.constructor = FunkLexer;

FunkLexer.EOF = antlr4.Token.EOF;
FunkLexer.SPACES = 1;
FunkLexer.WORDS = 2;

FunkLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

FunkLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

FunkLexer.prototype.literalNames = [ null, "' '" ];

FunkLexer.prototype.symbolicNames = [ null, "SPACES", "WORDS" ];

FunkLexer.prototype.ruleNames = [ "SPACES", "WORDS" ];

FunkLexer.prototype.grammarFileName = "Funk.g4";



exports.FunkLexer = FunkLexer;

