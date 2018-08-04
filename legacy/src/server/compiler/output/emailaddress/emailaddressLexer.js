// Generated from C:\git-seaquail.visualstudio.com\AntlrEditor\src\server\compiler\output\emailaddress\emailaddress.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u001cl\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017",
    "\t\u0017\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a",
    "\u0004\u001b\t\u001b\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003",
    "\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006",
    "\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\t\u0003\t\u0003\n\u0003",
    "\n\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\r\u0003\r\u0003\u000e",
    "\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0011",
    "\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003\u0014",
    "\u0003\u0014\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0003\u0016",
    "\u0003\u0017\u0003\u0017\u0003\u0018\u0003\u0018\u0003\u0019\u0003\u0019",
    "\u0003\u001a\u0003\u001a\u0003\u001b\u0003\u001b\u0002\u0002\u001c\u0003",
    "\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f\t\u0011",
    "\n\u0013\u000b\u0015\f\u0017\r\u0019\u000e\u001b\u000f\u001d\u0010\u001f",
    "\u0011!\u0012#\u0013%\u0014\'\u0015)\u0016+\u0017-\u0018/\u00191\u001a",
    "3\u001b5\u001c\u0003\u0002\n\u0003\u0002\u0002\u0129\u0003\u0002g\u0092",
    "\u0003\u0002JY\u0003\u0002\u00023\t\u0002)+..00<>@@BB]_\u0004\u0002",
    "\f\f\u000f\u000f\u0004\u0002\f\f]_\u0005\u0002\f\f*+^^\u0002k\u0002",
    "\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002",
    "\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002",
    "\u000b\u0003\u0002\u0002\u0002\u0002\r\u0003\u0002\u0002\u0002\u0002",
    "\u000f\u0003\u0002\u0002\u0002\u0002\u0011\u0003\u0002\u0002\u0002\u0002",
    "\u0013\u0003\u0002\u0002\u0002\u0002\u0015\u0003\u0002\u0002\u0002\u0002",
    "\u0017\u0003\u0002\u0002\u0002\u0002\u0019\u0003\u0002\u0002\u0002\u0002",
    "\u001b\u0003\u0002\u0002\u0002\u0002\u001d\u0003\u0002\u0002\u0002\u0002",
    "\u001f\u0003\u0002\u0002\u0002\u0002!\u0003\u0002\u0002\u0002\u0002",
    "#\u0003\u0002\u0002\u0002\u0002%\u0003\u0002\u0002\u0002\u0002\'\u0003",
    "\u0002\u0002\u0002\u0002)\u0003\u0002\u0002\u0002\u0002+\u0003\u0002",
    "\u0002\u0002\u0002-\u0003\u0002\u0002\u0002\u0002/\u0003\u0002\u0002",
    "\u0002\u00021\u0003\u0002\u0002\u0002\u00023\u0003\u0002\u0002\u0002",
    "\u00025\u0003\u0002\u0002\u0002\u00037\u0003\u0002\u0002\u0002\u0005",
    "9\u0003\u0002\u0002\u0002\u0007;\u0003\u0002\u0002\u0002\t=\u0003\u0002",
    "\u0002\u0002\u000b?\u0003\u0002\u0002\u0002\rA\u0003\u0002\u0002\u0002",
    "\u000fC\u0003\u0002\u0002\u0002\u0011E\u0003\u0002\u0002\u0002\u0013",
    "G\u0003\u0002\u0002\u0002\u0015I\u0003\u0002\u0002\u0002\u0017K\u0003",
    "\u0002\u0002\u0002\u0019M\u0003\u0002\u0002\u0002\u001bO\u0003\u0002",
    "\u0002\u0002\u001dQ\u0003\u0002\u0002\u0002\u001fS\u0003\u0002\u0002",
    "\u0002!U\u0003\u0002\u0002\u0002#W\u0003\u0002\u0002\u0002%Y\u0003\u0002",
    "\u0002\u0002\'[\u0003\u0002\u0002\u0002)]\u0003\u0002\u0002\u0002+_",
    "\u0003\u0002\u0002\u0002-b\u0003\u0002\u0002\u0002/d\u0003\u0002\u0002",
    "\u00021f\u0003\u0002\u0002\u00023h\u0003\u0002\u0002\u00025j\u0003\u0002",
    "\u0002\u000278\u0007<\u0002\u00028\u0004\u0003\u0002\u0002\u00029:\u0007",
    "=\u0002\u0002:\u0006\u0003\u0002\u0002\u0002;<\u0007>\u0002\u0002<\b",
    "\u0003\u0002\u0002\u0002=>\u0007@\u0002\u0002>\n\u0003\u0002\u0002\u0002",
    "?@\u0007B\u0002\u0002@\f\u0003\u0002\u0002\u0002AB\u00070\u0002\u0002",
    "B\u000e\u0003\u0002\u0002\u0002CD\u0007^\u0002\u0002D\u0010\u0003\u0002",
    "\u0002\u0002EF\u0007]\u0002\u0002F\u0012\u0003\u0002\u0002\u0002GH\u0007",
    "_\u0002\u0002H\u0014\u0003\u0002\u0002\u0002IJ\u0007)\u0002\u0002J\u0016",
    "\u0003\u0002\u0002\u0002KL\u0007*\u0002\u0002L\u0018\u0003\u0002\u0002",
    "\u0002MN\u0007+\u0002\u0002N\u001a\u0003\u0002\u0002\u0002OP\t\u0002",
    "\u0002\u0002P\u001c\u0003\u0002\u0002\u0002QR\t\u0003\u0002\u0002R\u001e",
    "\u0003\u0002\u0002\u0002ST\t\u0004\u0002\u0002T \u0003\u0002\u0002\u0002",
    "UV\t\u0005\u0002\u0002V\"\u0003\u0002\u0002\u0002WX\u0007\f\u0002\u0002",
    "X$\u0003\u0002\u0002\u0002YZ\u0007\u000f\u0002\u0002Z&\u0003\u0002\u0002",
    "\u0002[\\\u0007\"\u0002\u0002\\(\u0003\u0002\u0002\u0002]^\u0007\u000b",
    "\u0002\u0002^*\u0003\u0002\u0002\u0002_`\u0007\u000f\u0002\u0002`a\u0007",
    "\f\u0002\u0002a,\u0003\u0002\u0002\u0002bc\t\u0006\u0002\u0002c.\u0003",
    "\u0002\u0002\u0002de\u0007$\u0002\u0002e0\u0003\u0002\u0002\u0002fg",
    "\n\u0007\u0002\u0002g2\u0003\u0002\u0002\u0002hi\n\b\u0002\u0002i4\u0003",
    "\u0002\u0002\u0002jk\n\t\u0002\u0002k6\u0003\u0002\u0002\u0002\u0003",
    "\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function emailaddressLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

emailaddressLexer.prototype = Object.create(antlr4.Lexer.prototype);
emailaddressLexer.prototype.constructor = emailaddressLexer;

emailaddressLexer.EOF = antlr4.Token.EOF;
emailaddressLexer.T__0 = 1;
emailaddressLexer.T__1 = 2;
emailaddressLexer.T__2 = 3;
emailaddressLexer.T__3 = 4;
emailaddressLexer.T__4 = 5;
emailaddressLexer.T__5 = 6;
emailaddressLexer.T__6 = 7;
emailaddressLexer.T__7 = 8;
emailaddressLexer.T__8 = 9;
emailaddressLexer.T__9 = 10;
emailaddressLexer.T__10 = 11;
emailaddressLexer.T__11 = 12;
emailaddressLexer.CHAR = 13;
emailaddressLexer.ALPHA = 14;
emailaddressLexer.DIGIT = 15;
emailaddressLexer.CTL = 16;
emailaddressLexer.CR = 17;
emailaddressLexer.LF = 18;
emailaddressLexer.SPACE = 19;
emailaddressLexer.HTAB = 20;
emailaddressLexer.CRLF = 21;
emailaddressLexer.SPECIALS = 22;
emailaddressLexer.QUOTE = 23;
emailaddressLexer.QTEXT = 24;
emailaddressLexer.DTEXT = 25;
emailaddressLexer.CTEXT = 26;

emailaddressLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

emailaddressLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

emailaddressLexer.prototype.literalNames = [ null, "':'", "';'", "'<'", 
                                             "'>'", "'@'", "'.'", "'\\'", 
                                             "'['", "']'", "'''", "'('", 
                                             "')'", null, null, null, null, 
                                             "'\n'", "'\r'", "' '", "'\t'", 
                                             "'\r\n'", null, "'\"'" ];

emailaddressLexer.prototype.symbolicNames = [ null, null, null, null, null, 
                                              null, null, null, null, null, 
                                              null, null, null, "CHAR", 
                                              "ALPHA", "DIGIT", "CTL", "CR", 
                                              "LF", "SPACE", "HTAB", "CRLF", 
                                              "SPECIALS", "QUOTE", "QTEXT", 
                                              "DTEXT", "CTEXT" ];

emailaddressLexer.prototype.ruleNames = [ "T__0", "T__1", "T__2", "T__3", 
                                          "T__4", "T__5", "T__6", "T__7", 
                                          "T__8", "T__9", "T__10", "T__11", 
                                          "CHAR", "ALPHA", "DIGIT", "CTL", 
                                          "CR", "LF", "SPACE", "HTAB", "CRLF", 
                                          "SPECIALS", "QUOTE", "QTEXT", 
                                          "DTEXT", "CTEXT" ];

emailaddressLexer.prototype.grammarFileName = "emailaddress.g4";



exports.emailaddressLexer = emailaddressLexer;

