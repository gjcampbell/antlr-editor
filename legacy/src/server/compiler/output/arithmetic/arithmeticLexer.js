// Generated from C:\git-seaquail.visualstudio.com\AntlrEditor\src\server\compiler\output\arithmetic\arithmetic.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u0010n\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0003\u0002\u0003\u0002\u0007\u0002,\n\u0002\f",
    "\u0002\u000e\u0002/\u000b\u0002\u0003\u0003\u0005\u00032\n\u0003\u0003",
    "\u0004\u0003\u0004\u0005\u00046\n\u0004\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0005\u0005;\n\u0005\u0003\u0005\u0003\u0005\u0005\u0005?\n\u0005",
    "\u0003\u0006\u0006\u0006B\n\u0006\r\u0006\u000e\u0006C\u0003\u0006\u0003",
    "\u0006\u0006\u0006H\n\u0006\r\u0006\u000e\u0006I\u0005\u0006L\n\u0006",
    "\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\t\u0003\t\u0003\n\u0003",
    "\n\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\r\u0003\r\u0003\u000e",
    "\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0011",
    "\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003\u0014",
    "\u0006\u0014i\n\u0014\r\u0014\u000e\u0014j\u0003\u0014\u0003\u0014\u0002",
    "\u0002\u0015\u0003\u0003\u0005\u0002\u0007\u0002\t\u0004\u000b\u0002",
    "\r\u0002\u000f\u0002\u0011\u0005\u0013\u0006\u0015\u0007\u0017\b\u0019",
    "\t\u001b\n\u001d\u000b\u001f\f!\r#\u000e%\u000f\'\u0010\u0003\u0002",
    "\u0006\u0005\u0002C\\aac|\u0004\u0002GGgg\u0004\u0002--//\u0005\u0002",
    "\u000b\f\u000f\u000f\"\"\u0002p\u0002\u0003\u0003\u0002\u0002\u0002",
    "\u0002\t\u0003\u0002\u0002\u0002\u0002\u0011\u0003\u0002\u0002\u0002",
    "\u0002\u0013\u0003\u0002\u0002\u0002\u0002\u0015\u0003\u0002\u0002\u0002",
    "\u0002\u0017\u0003\u0002\u0002\u0002\u0002\u0019\u0003\u0002\u0002\u0002",
    "\u0002\u001b\u0003\u0002\u0002\u0002\u0002\u001d\u0003\u0002\u0002\u0002",
    "\u0002\u001f\u0003\u0002\u0002\u0002\u0002!\u0003\u0002\u0002\u0002",
    "\u0002#\u0003\u0002\u0002\u0002\u0002%\u0003\u0002\u0002\u0002\u0002",
    "\'\u0003\u0002\u0002\u0002\u0003)\u0003\u0002\u0002\u0002\u00051\u0003",
    "\u0002\u0002\u0002\u00075\u0003\u0002\u0002\u0002\t7\u0003\u0002\u0002",
    "\u0002\u000bA\u0003\u0002\u0002\u0002\rM\u0003\u0002\u0002\u0002\u000f",
    "O\u0003\u0002\u0002\u0002\u0011Q\u0003\u0002\u0002\u0002\u0013S\u0003",
    "\u0002\u0002\u0002\u0015U\u0003\u0002\u0002\u0002\u0017W\u0003\u0002",
    "\u0002\u0002\u0019Y\u0003\u0002\u0002\u0002\u001b[\u0003\u0002\u0002",
    "\u0002\u001d]\u0003\u0002\u0002\u0002\u001f_\u0003\u0002\u0002\u0002",
    "!a\u0003\u0002\u0002\u0002#c\u0003\u0002\u0002\u0002%e\u0003\u0002\u0002",
    "\u0002\'h\u0003\u0002\u0002\u0002)-\u0005\u0005\u0003\u0002*,\u0005",
    "\u0007\u0004\u0002+*\u0003\u0002\u0002\u0002,/\u0003\u0002\u0002\u0002",
    "-+\u0003\u0002\u0002\u0002-.\u0003\u0002\u0002\u0002.\u0004\u0003\u0002",
    "\u0002\u0002/-\u0003\u0002\u0002\u000202\t\u0002\u0002\u000210\u0003",
    "\u0002\u0002\u00022\u0006\u0003\u0002\u0002\u000236\u0005\u0005\u0003",
    "\u000246\u00042;\u000253\u0003\u0002\u0002\u000254\u0003\u0002\u0002",
    "\u00026\b\u0003\u0002\u0002\u00027>\u0005\u000b\u0006\u00028:\u0005",
    "\r\u0007\u00029;\u0005\u000f\b\u0002:9\u0003\u0002\u0002\u0002:;\u0003",
    "\u0002\u0002\u0002;<\u0003\u0002\u0002\u0002<=\u0005\u000b\u0006\u0002",
    "=?\u0003\u0002\u0002\u0002>8\u0003\u0002\u0002\u0002>?\u0003\u0002\u0002",
    "\u0002?\n\u0003\u0002\u0002\u0002@B\u00042;\u0002A@\u0003\u0002\u0002",
    "\u0002BC\u0003\u0002\u0002\u0002CA\u0003\u0002\u0002\u0002CD\u0003\u0002",
    "\u0002\u0002DK\u0003\u0002\u0002\u0002EG\u00070\u0002\u0002FH\u0004",
    "2;\u0002GF\u0003\u0002\u0002\u0002HI\u0003\u0002\u0002\u0002IG\u0003",
    "\u0002\u0002\u0002IJ\u0003\u0002\u0002\u0002JL\u0003\u0002\u0002\u0002",
    "KE\u0003\u0002\u0002\u0002KL\u0003\u0002\u0002\u0002L\f\u0003\u0002",
    "\u0002\u0002MN\t\u0003\u0002\u0002N\u000e\u0003\u0002\u0002\u0002OP",
    "\t\u0004\u0002\u0002P\u0010\u0003\u0002\u0002\u0002QR\u0007*\u0002\u0002",
    "R\u0012\u0003\u0002\u0002\u0002ST\u0007+\u0002\u0002T\u0014\u0003\u0002",
    "\u0002\u0002UV\u0007-\u0002\u0002V\u0016\u0003\u0002\u0002\u0002WX\u0007",
    "/\u0002\u0002X\u0018\u0003\u0002\u0002\u0002YZ\u0007,\u0002\u0002Z\u001a",
    "\u0003\u0002\u0002\u0002[\\\u00071\u0002\u0002\\\u001c\u0003\u0002\u0002",
    "\u0002]^\u0007@\u0002\u0002^\u001e\u0003\u0002\u0002\u0002_`\u0007>",
    "\u0002\u0002` \u0003\u0002\u0002\u0002ab\u0007?\u0002\u0002b\"\u0003",
    "\u0002\u0002\u0002cd\u00070\u0002\u0002d$\u0003\u0002\u0002\u0002ef",
    "\u0007`\u0002\u0002f&\u0003\u0002\u0002\u0002gi\t\u0005\u0002\u0002",
    "hg\u0003\u0002\u0002\u0002ij\u0003\u0002\u0002\u0002jh\u0003\u0002\u0002",
    "\u0002jk\u0003\u0002\u0002\u0002kl\u0003\u0002\u0002\u0002lm\b\u0014",
    "\u0002\u0002m(\u0003\u0002\u0002\u0002\f\u0002-15:>CIKj\u0003\b\u0002",
    "\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function arithmeticLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

arithmeticLexer.prototype = Object.create(antlr4.Lexer.prototype);
arithmeticLexer.prototype.constructor = arithmeticLexer;

arithmeticLexer.EOF = antlr4.Token.EOF;
arithmeticLexer.VARIABLE = 1;
arithmeticLexer.SCIENTIFIC_NUMBER = 2;
arithmeticLexer.LPAREN = 3;
arithmeticLexer.RPAREN = 4;
arithmeticLexer.PLUS = 5;
arithmeticLexer.MINUS = 6;
arithmeticLexer.TIMES = 7;
arithmeticLexer.DIV = 8;
arithmeticLexer.GT = 9;
arithmeticLexer.LT = 10;
arithmeticLexer.EQ = 11;
arithmeticLexer.POINT = 12;
arithmeticLexer.POW = 13;
arithmeticLexer.WS = 14;

arithmeticLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

arithmeticLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

arithmeticLexer.prototype.literalNames = [ null, null, null, "'('", "')'", 
                                           "'+'", "'-'", "'*'", "'/'", "'>'", 
                                           "'<'", "'='", "'.'", "'^'" ];

arithmeticLexer.prototype.symbolicNames = [ null, "VARIABLE", "SCIENTIFIC_NUMBER", 
                                            "LPAREN", "RPAREN", "PLUS", 
                                            "MINUS", "TIMES", "DIV", "GT", 
                                            "LT", "EQ", "POINT", "POW", 
                                            "WS" ];

arithmeticLexer.prototype.ruleNames = [ "VARIABLE", "VALID_ID_START", "VALID_ID_CHAR", 
                                        "SCIENTIFIC_NUMBER", "NUMBER", "E", 
                                        "SIGN", "LPAREN", "RPAREN", "PLUS", 
                                        "MINUS", "TIMES", "DIV", "GT", "LT", 
                                        "EQ", "POINT", "POW", "WS" ];

arithmeticLexer.prototype.grammarFileName = "arithmetic.g4";



exports.arithmeticLexer = arithmeticLexer;

