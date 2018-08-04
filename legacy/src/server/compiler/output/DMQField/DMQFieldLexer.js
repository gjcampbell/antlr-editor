// Generated from C:\git-seaquail.visualstudio.com\AntlrEditor\src\server\compiler\output\DMQField\DMQField.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u000eD\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003",
    "\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0007\u0005$\n\u0005\f\u0005",
    "\u000e\u0005\'\u000b\u0005\u0003\u0006\u0003\u0006\u0006\u0006+\n\u0006",
    "\r\u0006\u000e\u0006,\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\b\u0003\b\u0003\t\u0003\t\u0003\n\u0003\n\u0003\u000b",
    "\u0003\u000b\u0003\f\u0003\f\u0003\r\u0006\r?\n\r\r\r\u000e\r@\u0003",
    "\r\u0003\r\u0002\u0002\u000e\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006",
    "\u000b\u0007\r\b\u000f\t\u0011\n\u0013\u000b\u0015\f\u0017\r\u0019\u000e",
    "\u0003\u0002\t\u0005\u0002C\\aac|\u0006\u00022;C\\aac|\u0003\u0002_",
    "_\u0004\u0002CCcc\u0004\u0002UUuu\u0006\u0002((,-//11\u0005\u0002\u000b",
    "\f\u000f\u000f\"\"\u0002F\u0002\u0003\u0003\u0002\u0002\u0002\u0002",
    "\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002",
    "\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0002",
    "\r\u0003\u0002\u0002\u0002\u0002\u000f\u0003\u0002\u0002\u0002\u0002",
    "\u0011\u0003\u0002\u0002\u0002\u0002\u0013\u0003\u0002\u0002\u0002\u0002",
    "\u0015\u0003\u0002\u0002\u0002\u0002\u0017\u0003\u0002\u0002\u0002\u0002",
    "\u0019\u0003\u0002\u0002\u0002\u0003\u001b\u0003\u0002\u0002\u0002\u0005",
    "\u001d\u0003\u0002\u0002\u0002\u0007\u001f\u0003\u0002\u0002\u0002\t",
    "!\u0003\u0002\u0002\u0002\u000b(\u0003\u0002\u0002\u0002\r0\u0003\u0002",
    "\u0002\u0002\u000f3\u0003\u0002\u0002\u0002\u00115\u0003\u0002\u0002",
    "\u0002\u00137\u0003\u0002\u0002\u0002\u00159\u0003\u0002\u0002\u0002",
    "\u0017;\u0003\u0002\u0002\u0002\u0019>\u0003\u0002\u0002\u0002\u001b",
    "\u001c\u0007B\u0002\u0002\u001c\u0004\u0003\u0002\u0002\u0002\u001d",
    "\u001e\u0007.\u0002\u0002\u001e\u0006\u0003\u0002\u0002\u0002\u001f",
    " \u00070\u0002\u0002 \b\u0003\u0002\u0002\u0002!%\t\u0002\u0002\u0002",
    "\"$\t\u0003\u0002\u0002#\"\u0003\u0002\u0002\u0002$\'\u0003\u0002\u0002",
    "\u0002%#\u0003\u0002\u0002\u0002%&\u0003\u0002\u0002\u0002&\n\u0003",
    "\u0002\u0002\u0002\'%\u0003\u0002\u0002\u0002(*\u0007]\u0002\u0002)",
    "+\n\u0004\u0002\u0002*)\u0003\u0002\u0002\u0002+,\u0003\u0002\u0002",
    "\u0002,*\u0003\u0002\u0002\u0002,-\u0003\u0002\u0002\u0002-.\u0003\u0002",
    "\u0002\u0002./\u0007_\u0002\u0002/\f\u0003\u0002\u0002\u000201\t\u0005",
    "\u0002\u000212\t\u0006\u0002\u00022\u000e\u0003\u0002\u0002\u000234",
    "\u0007]\u0002\u00024\u0010\u0003\u0002\u0002\u000256\u0007_\u0002\u0002",
    "6\u0012\u0003\u0002\u0002\u000278\u0007*\u0002\u00028\u0014\u0003\u0002",
    "\u0002\u00029:\u0007+\u0002\u0002:\u0016\u0003\u0002\u0002\u0002;<\t",
    "\u0007\u0002\u0002<\u0018\u0003\u0002\u0002\u0002=?\t\b\u0002\u0002",
    ">=\u0003\u0002\u0002\u0002?@\u0003\u0002\u0002\u0002@>\u0003\u0002\u0002",
    "\u0002@A\u0003\u0002\u0002\u0002AB\u0003\u0002\u0002\u0002BC\b\r\u0002",
    "\u0002C\u001a\u0003\u0002\u0002\u0002\u0006\u0002%,@\u0003\b\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function DMQFieldLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

DMQFieldLexer.prototype = Object.create(antlr4.Lexer.prototype);
DMQFieldLexer.prototype.constructor = DMQFieldLexer;

DMQFieldLexer.EOF = antlr4.Token.EOF;
DMQFieldLexer.ATPERSAND = 1;
DMQFieldLexer.COMMA = 2;
DMQFieldLexer.DOT = 3;
DMQFieldLexer.SAFENAME = 4;
DMQFieldLexer.ANYNAME = 5;
DMQFieldLexer.AS = 6;
DMQFieldLexer.LSQBRACKET = 7;
DMQFieldLexer.RSQBRACKET = 8;
DMQFieldLexer.LPAREN = 9;
DMQFieldLexer.RPAREN = 10;
DMQFieldLexer.OPERATOR = 11;
DMQFieldLexer.WS = 12;

DMQFieldLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

DMQFieldLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

DMQFieldLexer.prototype.literalNames = [ null, "'@'", "','", "'.'", null, 
                                         null, null, "'['", "']'", "'('", 
                                         "')'" ];

DMQFieldLexer.prototype.symbolicNames = [ null, "ATPERSAND", "COMMA", "DOT", 
                                          "SAFENAME", "ANYNAME", "AS", "LSQBRACKET", 
                                          "RSQBRACKET", "LPAREN", "RPAREN", 
                                          "OPERATOR", "WS" ];

DMQFieldLexer.prototype.ruleNames = [ "ATPERSAND", "COMMA", "DOT", "SAFENAME", 
                                      "ANYNAME", "AS", "LSQBRACKET", "RSQBRACKET", 
                                      "LPAREN", "RPAREN", "OPERATOR", "WS" ];

DMQFieldLexer.prototype.grammarFileName = "DMQField.g4";



exports.DMQFieldLexer = DMQFieldLexer;

