// Generated from C:\git-seaquail.visualstudio.com\AntlrEditor\src\server\compiler\output\emailaddress\emailaddress.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var emailaddressListener = require('./emailaddressListener').emailaddressListener;
var emailaddressVisitor = require('./emailaddressVisitor').emailaddressVisitor;

var grammarFileName = "emailaddress.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u001c\u00a6\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010",
    "\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014",
    "\t\u0014\u0004\u0015\t\u0015\u0003\u0002\u0003\u0002\u0005\u0002-\n",
    "\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0007\u00032\n\u0003\f\u0003",
    "\u000e\u00035\u000b\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0005\u0004=\n\u0004\u0003\u0005\u0003",
    "\u0005\u0007\u0005A\n\u0005\f\u0005\u000e\u0005D\u000b\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003",
    "\b\u0007\bT\n\b\f\b\u000e\bW\u000b\b\u0003\t\u0003\t\u0003\t\u0007\t",
    "\\\n\t\f\t\u000e\t_\u000b\t\u0003\n\u0003\n\u0005\nc\n\n\u0003\u000b",
    "\u0003\u000b\u0003\f\u0006\fh\n\f\r\f\u000e\fi\u0003\r\u0003\r\u0005",
    "\rn\n\r\u0003\u000e\u0003\u000e\u0003\u000f\u0005\u000fs\n\u000f\u0003",
    "\u000f\u0006\u000fv\n\u000f\r\u000f\u000e\u000fw\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0005\u0010}\n\u0010\u0003\u0011\u0006\u0011\u0080\n\u0011",
    "\r\u0011\u000e\u0011\u0081\u0003\u0012\u0003\u0012\u0003\u0012\u0003",
    "\u0013\u0003\u0013\u0003\u0013\u0007\u0013\u008a\n\u0013\f\u0013\u000e",
    "\u0013\u008d\u000b\u0013\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014",
    "\u0003\u0014\u0007\u0014\u0094\n\u0014\f\u0014\u000e\u0014\u0097\u000b",
    "\u0014\u0003\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0003\u0015\u0003",
    "\u0015\u0007\u0015\u009f\n\u0015\f\u0015\u000e\u0015\u00a2\u000b\u0015",
    "\u0003\u0015\u0003\u0015\u0003\u0015\u0002\u0002\u0016\u0002\u0004\u0006",
    "\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$&(\u0002",
    "\u0003\u0003\u0002\u0015\u0016\u0002\u00a6\u0002,\u0003\u0002\u0002",
    "\u0002\u0004.\u0003\u0002\u0002\u0002\u0006<\u0003\u0002\u0002\u0002",
    "\b>\u0003\u0002\u0002\u0002\nH\u0003\u0002\u0002\u0002\fL\u0003\u0002",
    "\u0002\u0002\u000eP\u0003\u0002\u0002\u0002\u0010X\u0003\u0002\u0002",
    "\u0002\u0012b\u0003\u0002\u0002\u0002\u0014d\u0003\u0002\u0002\u0002",
    "\u0016g\u0003\u0002\u0002\u0002\u0018m\u0003\u0002\u0002\u0002\u001a",
    "o\u0003\u0002\u0002\u0002\u001cu\u0003\u0002\u0002\u0002\u001e|\u0003",
    "\u0002\u0002\u0002 \u007f\u0003\u0002\u0002\u0002\"\u0083\u0003\u0002",
    "\u0002\u0002$\u0086\u0003\u0002\u0002\u0002&\u0090\u0003\u0002\u0002",
    "\u0002(\u009a\u0003\u0002\u0002\u0002*-\u0005\u0006\u0004\u0002+-\u0005",
    "\u0004\u0003\u0002,*\u0003\u0002\u0002\u0002,+\u0003\u0002\u0002\u0002",
    "-\u0003\u0003\u0002\u0002\u0002./\u0005\u0016\f\u0002/3\u0007\u0003",
    "\u0002\u000202\u0005\u0006\u0004\u000210\u0003\u0002\u0002\u000225\u0003",
    "\u0002\u0002\u000231\u0003\u0002\u0002\u000234\u0003\u0002\u0002\u0002",
    "46\u0003\u0002\u0002\u000253\u0003\u0002\u0002\u000267\u0007\u0004\u0002",
    "\u00027\u0005\u0003\u0002\u0002\u00028=\u0005\f\u0007\u00029:\u0005",
    "\u0016\f\u0002:;\u0005\b\u0005\u0002;=\u0003\u0002\u0002\u0002<8\u0003",
    "\u0002\u0002\u0002<9\u0003\u0002\u0002\u0002=\u0007\u0003\u0002\u0002",
    "\u0002>B\u0007\u0005\u0002\u0002?A\u0005\n\u0006\u0002@?\u0003\u0002",
    "\u0002\u0002AD\u0003\u0002\u0002\u0002B@\u0003\u0002\u0002\u0002BC\u0003",
    "\u0002\u0002\u0002CE\u0003\u0002\u0002\u0002DB\u0003\u0002\u0002\u0002",
    "EF\u0005\f\u0007\u0002FG\u0007\u0006\u0002\u0002G\t\u0003\u0002\u0002",
    "\u0002HI\u0007\u0007\u0002\u0002IJ\u0005\u0010\t\u0002JK\u0007\u0003",
    "\u0002\u0002K\u000b\u0003\u0002\u0002\u0002LM\u0005\u000e\b\u0002MN",
    "\u0007\u0007\u0002\u0002NO\u0005\u0010\t\u0002O\r\u0003\u0002\u0002",
    "\u0002PU\u0005\u0018\r\u0002QR\u0007\b\u0002\u0002RT\u0005\u0018\r\u0002",
    "SQ\u0003\u0002\u0002\u0002TW\u0003\u0002\u0002\u0002US\u0003\u0002\u0002",
    "\u0002UV\u0003\u0002\u0002\u0002V\u000f\u0003\u0002\u0002\u0002WU\u0003",
    "\u0002\u0002\u0002X]\u0005\u0012\n\u0002YZ\u0007\b\u0002\u0002Z\\\u0005",
    "\u0012\n\u0002[Y\u0003\u0002\u0002\u0002\\_\u0003\u0002\u0002\u0002",
    "][\u0003\u0002\u0002\u0002]^\u0003\u0002\u0002\u0002^\u0011\u0003\u0002",
    "\u0002\u0002_]\u0003\u0002\u0002\u0002`c\u0005\u0014\u000b\u0002ac\u0005",
    "$\u0013\u0002b`\u0003\u0002\u0002\u0002ba\u0003\u0002\u0002\u0002c\u0013",
    "\u0003\u0002\u0002\u0002de\u0005 \u0011\u0002e\u0015\u0003\u0002\u0002",
    "\u0002fh\u0005\u0018\r\u0002gf\u0003\u0002\u0002\u0002hi\u0003\u0002",
    "\u0002\u0002ig\u0003\u0002\u0002\u0002ij\u0003\u0002\u0002\u0002j\u0017",
    "\u0003\u0002\u0002\u0002kn\u0005 \u0011\u0002ln\u0005&\u0014\u0002m",
    "k\u0003\u0002\u0002\u0002ml\u0003\u0002\u0002\u0002n\u0019\u0003\u0002",
    "\u0002\u0002op\t\u0002\u0002\u0002p\u001b\u0003\u0002\u0002\u0002qs",
    "\u0007\u0017\u0002\u0002rq\u0003\u0002\u0002\u0002rs\u0003\u0002\u0002",
    "\u0002st\u0003\u0002\u0002\u0002tv\u0005\u001a\u000e\u0002ur\u0003\u0002",
    "\u0002\u0002vw\u0003\u0002\u0002\u0002wu\u0003\u0002\u0002\u0002wx\u0003",
    "\u0002\u0002\u0002x\u001d\u0003\u0002\u0002\u0002y}\u0007\u0018\u0002",
    "\u0002z}\u0005\u001c\u000f\u0002{}\u0005(\u0015\u0002|y\u0003\u0002",
    "\u0002\u0002|z\u0003\u0002\u0002\u0002|{\u0003\u0002\u0002\u0002}\u001f",
    "\u0003\u0002\u0002\u0002~\u0080\u0007\u000f\u0002\u0002\u007f~\u0003",
    "\u0002\u0002\u0002\u0080\u0081\u0003\u0002\u0002\u0002\u0081\u007f\u0003",
    "\u0002\u0002\u0002\u0081\u0082\u0003\u0002\u0002\u0002\u0082!\u0003",
    "\u0002\u0002\u0002\u0083\u0084\u0007\t\u0002\u0002\u0084\u0085\u0007",
    "\u000f\u0002\u0002\u0085#\u0003\u0002\u0002\u0002\u0086\u008b\u0007",
    "\n\u0002\u0002\u0087\u008a\u0007\u001b\u0002\u0002\u0088\u008a\u0005",
    "\"\u0012\u0002\u0089\u0087\u0003\u0002\u0002\u0002\u0089\u0088\u0003",
    "\u0002\u0002\u0002\u008a\u008d\u0003\u0002\u0002\u0002\u008b\u0089\u0003",
    "\u0002\u0002\u0002\u008b\u008c\u0003\u0002\u0002\u0002\u008c\u008e\u0003",
    "\u0002\u0002\u0002\u008d\u008b\u0003\u0002\u0002\u0002\u008e\u008f\u0007",
    "\u000b\u0002\u0002\u008f%\u0003\u0002\u0002\u0002\u0090\u0095\u0007",
    "\f\u0002\u0002\u0091\u0094\u0007\u001a\u0002\u0002\u0092\u0094\u0005",
    "\"\u0012\u0002\u0093\u0091\u0003\u0002\u0002\u0002\u0093\u0092\u0003",
    "\u0002\u0002\u0002\u0094\u0097\u0003\u0002\u0002\u0002\u0095\u0093\u0003",
    "\u0002\u0002\u0002\u0095\u0096\u0003\u0002\u0002\u0002\u0096\u0098\u0003",
    "\u0002\u0002\u0002\u0097\u0095\u0003\u0002\u0002\u0002\u0098\u0099\u0007",
    "\f\u0002\u0002\u0099\'\u0003\u0002\u0002\u0002\u009a\u00a0\u0007\r\u0002",
    "\u0002\u009b\u009f\u0007\u001c\u0002\u0002\u009c\u009f\u0005\"\u0012",
    "\u0002\u009d\u009f\u0005(\u0015\u0002\u009e\u009b\u0003\u0002\u0002",
    "\u0002\u009e\u009c\u0003\u0002\u0002\u0002\u009e\u009d\u0003\u0002\u0002",
    "\u0002\u009f\u00a2\u0003\u0002\u0002\u0002\u00a0\u009e\u0003\u0002\u0002",
    "\u0002\u00a0\u00a1\u0003\u0002\u0002\u0002\u00a1\u00a3\u0003\u0002\u0002",
    "\u0002\u00a2\u00a0\u0003\u0002\u0002\u0002\u00a3\u00a4\u0007\u000e\u0002",
    "\u0002\u00a4)\u0003\u0002\u0002\u0002\u0015,3<BU]bimrw|\u0081\u0089",
    "\u008b\u0093\u0095\u009e\u00a0"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "':'", "';'", "'<'", "'>'", "'@'", "'.'", "'\\'", 
                     "'['", "']'", "'''", "'('", "')'", null, null, null, 
                     null, "'\n'", "'\r'", "' '", "'\t'", "'\r\n'", null, 
                     "'\"'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, "CHAR", "ALPHA", "DIGIT", 
                      "CTL", "CR", "LF", "SPACE", "HTAB", "CRLF", "SPECIALS", 
                      "QUOTE", "QTEXT", "DTEXT", "CTEXT" ];

var ruleNames =  [ "emailaddress", "group", "mailbox", "routeaddr", "route", 
                   "addrspec", "localpart", "domain", "subdomain", "domainref", 
                   "phrase", "word", "lwspchar", "lwsp", "delimeters", "atom", 
                   "quotedpair", "domainliteral", "quotedstring", "comment" ];

function emailaddressParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

emailaddressParser.prototype = Object.create(antlr4.Parser.prototype);
emailaddressParser.prototype.constructor = emailaddressParser;

Object.defineProperty(emailaddressParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

emailaddressParser.EOF = antlr4.Token.EOF;
emailaddressParser.T__0 = 1;
emailaddressParser.T__1 = 2;
emailaddressParser.T__2 = 3;
emailaddressParser.T__3 = 4;
emailaddressParser.T__4 = 5;
emailaddressParser.T__5 = 6;
emailaddressParser.T__6 = 7;
emailaddressParser.T__7 = 8;
emailaddressParser.T__8 = 9;
emailaddressParser.T__9 = 10;
emailaddressParser.T__10 = 11;
emailaddressParser.T__11 = 12;
emailaddressParser.CHAR = 13;
emailaddressParser.ALPHA = 14;
emailaddressParser.DIGIT = 15;
emailaddressParser.CTL = 16;
emailaddressParser.CR = 17;
emailaddressParser.LF = 18;
emailaddressParser.SPACE = 19;
emailaddressParser.HTAB = 20;
emailaddressParser.CRLF = 21;
emailaddressParser.SPECIALS = 22;
emailaddressParser.QUOTE = 23;
emailaddressParser.QTEXT = 24;
emailaddressParser.DTEXT = 25;
emailaddressParser.CTEXT = 26;

emailaddressParser.RULE_emailaddress = 0;
emailaddressParser.RULE_group = 1;
emailaddressParser.RULE_mailbox = 2;
emailaddressParser.RULE_routeaddr = 3;
emailaddressParser.RULE_route = 4;
emailaddressParser.RULE_addrspec = 5;
emailaddressParser.RULE_localpart = 6;
emailaddressParser.RULE_domain = 7;
emailaddressParser.RULE_subdomain = 8;
emailaddressParser.RULE_domainref = 9;
emailaddressParser.RULE_phrase = 10;
emailaddressParser.RULE_word = 11;
emailaddressParser.RULE_lwspchar = 12;
emailaddressParser.RULE_lwsp = 13;
emailaddressParser.RULE_delimeters = 14;
emailaddressParser.RULE_atom = 15;
emailaddressParser.RULE_quotedpair = 16;
emailaddressParser.RULE_domainliteral = 17;
emailaddressParser.RULE_quotedstring = 18;
emailaddressParser.RULE_comment = 19;

function EmailaddressContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = emailaddressParser.RULE_emailaddress;
    return this;
}

EmailaddressContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EmailaddressContext.prototype.constructor = EmailaddressContext;

EmailaddressContext.prototype.mailbox = function() {
    return this.getTypedRuleContext(MailboxContext,0);
};

EmailaddressContext.prototype.group = function() {
    return this.getTypedRuleContext(GroupContext,0);
};

EmailaddressContext.prototype.enterRule = function(listener) {
    if(listener instanceof emailaddressListener ) {
        listener.enterEmailaddress(this);
	}
};

EmailaddressContext.prototype.exitRule = function(listener) {
    if(listener instanceof emailaddressListener ) {
        listener.exitEmailaddress(this);
	}
};

EmailaddressContext.prototype.accept = function(visitor) {
    if ( visitor instanceof emailaddressVisitor ) {
        return visitor.visitEmailaddress(this);
    } else {
        return visitor.visitChildren(this);
    }
};




emailaddressParser.EmailaddressContext = EmailaddressContext;

emailaddressParser.prototype.emailaddress = function() {

    var localctx = new EmailaddressContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, emailaddressParser.RULE_emailaddress);
    try {
        this.state = 42;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 40;
            this.mailbox();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 41;
            this.group();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function GroupContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = emailaddressParser.RULE_group;
    return this;
}

GroupContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
GroupContext.prototype.constructor = GroupContext;

GroupContext.prototype.phrase = function() {
    return this.getTypedRuleContext(PhraseContext,0);
};

GroupContext.prototype.mailbox = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(MailboxContext);
    } else {
        return this.getTypedRuleContext(MailboxContext,i);
    }
};

GroupContext.prototype.enterRule = function(listener) {
    if(listener instanceof emailaddressListener ) {
        listener.enterGroup(this);
	}
};

GroupContext.prototype.exitRule = function(listener) {
    if(listener instanceof emailaddressListener ) {
        listener.exitGroup(this);
	}
};

GroupContext.prototype.accept = function(visitor) {
    if ( visitor instanceof emailaddressVisitor ) {
        return visitor.visitGroup(this);
    } else {
        return visitor.visitChildren(this);
    }
};




emailaddressParser.GroupContext = GroupContext;

emailaddressParser.prototype.group = function() {

    var localctx = new GroupContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, emailaddressParser.RULE_group);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 44;
        this.phrase();
        this.state = 45;
        this.match(emailaddressParser.T__0);
        this.state = 49;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===emailaddressParser.T__9 || _la===emailaddressParser.CHAR) {
            this.state = 46;
            this.mailbox();
            this.state = 51;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 52;
        this.match(emailaddressParser.T__1);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function MailboxContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = emailaddressParser.RULE_mailbox;
    return this;
}

MailboxContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MailboxContext.prototype.constructor = MailboxContext;

MailboxContext.prototype.addrspec = function() {
    return this.getTypedRuleContext(AddrspecContext,0);
};

MailboxContext.prototype.phrase = function() {
    return this.getTypedRuleContext(PhraseContext,0);
};

MailboxContext.prototype.routeaddr = function() {
    return this.getTypedRuleContext(RouteaddrContext,0);
};

MailboxContext.prototype.enterRule = function(listener) {
    if(listener instanceof emailaddressListener ) {
        listener.enterMailbox(this);
	}
};

MailboxContext.prototype.exitRule = function(listener) {
    if(listener instanceof emailaddressListener ) {
        listener.exitMailbox(this);
	}
};

MailboxContext.prototype.accept = function(visitor) {
    if ( visitor instanceof emailaddressVisitor ) {
        return visitor.visitMailbox(this);
    } else {
        return visitor.visitChildren(this);
    }
};




emailaddressParser.MailboxContext = MailboxContext;

emailaddressParser.prototype.mailbox = function() {

    var localctx = new MailboxContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, emailaddressParser.RULE_mailbox);
    try {
        this.state = 58;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 54;
            this.addrspec();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 55;
            this.phrase();
            this.state = 56;
            this.routeaddr();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function RouteaddrContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = emailaddressParser.RULE_routeaddr;
    return this;
}

RouteaddrContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RouteaddrContext.prototype.constructor = RouteaddrContext;

RouteaddrContext.prototype.addrspec = function() {
    return this.getTypedRuleContext(AddrspecContext,0);
};

RouteaddrContext.prototype.route = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(RouteContext);
    } else {
        return this.getTypedRuleContext(RouteContext,i);
    }
};

RouteaddrContext.prototype.enterRule = function(listener) {
    if(listener instanceof emailaddressListener ) {
        listener.enterRouteaddr(this);
	}
};

RouteaddrContext.prototype.exitRule = function(listener) {
    if(listener instanceof emailaddressListener ) {
        listener.exitRouteaddr(this);
	}
};

RouteaddrContext.prototype.accept = function(visitor) {
    if ( visitor instanceof emailaddressVisitor ) {
        return visitor.visitRouteaddr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




emailaddressParser.RouteaddrContext = RouteaddrContext;

emailaddressParser.prototype.routeaddr = function() {

    var localctx = new RouteaddrContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, emailaddressParser.RULE_routeaddr);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 60;
        this.match(emailaddressParser.T__2);
        this.state = 64;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===emailaddressParser.T__4) {
            this.state = 61;
            this.route();
            this.state = 66;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 67;
        this.addrspec();
        this.state = 68;
        this.match(emailaddressParser.T__3);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function RouteContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = emailaddressParser.RULE_route;
    return this;
}

RouteContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RouteContext.prototype.constructor = RouteContext;

RouteContext.prototype.domain = function() {
    return this.getTypedRuleContext(DomainContext,0);
};

RouteContext.prototype.enterRule = function(listener) {
    if(listener instanceof emailaddressListener ) {
        listener.enterRoute(this);
	}
};

RouteContext.prototype.exitRule = function(listener) {
    if(listener instanceof emailaddressListener ) {
        listener.exitRoute(this);
	}
};

RouteContext.prototype.accept = function(visitor) {
    if ( visitor instanceof emailaddressVisitor ) {
        return visitor.visitRoute(this);
    } else {
        return visitor.visitChildren(this);
    }
};




emailaddressParser.RouteContext = RouteContext;

emailaddressParser.prototype.route = function() {

    var localctx = new RouteContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, emailaddressParser.RULE_route);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 70;
        this.match(emailaddressParser.T__4);
        this.state = 71;
        this.domain();
        this.state = 72;
        this.match(emailaddressParser.T__0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AddrspecContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = emailaddressParser.RULE_addrspec;
    return this;
}

AddrspecContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AddrspecContext.prototype.constructor = AddrspecContext;

AddrspecContext.prototype.localpart = function() {
    return this.getTypedRuleContext(LocalpartContext,0);
};

AddrspecContext.prototype.domain = function() {
    return this.getTypedRuleContext(DomainContext,0);
};

AddrspecContext.prototype.enterRule = function(listener) {
    if(listener instanceof emailaddressListener ) {
        listener.enterAddrspec(this);
	}
};

AddrspecContext.prototype.exitRule = function(listener) {
    if(listener instanceof emailaddressListener ) {
        listener.exitAddrspec(this);
	}
};

AddrspecContext.prototype.accept = function(visitor) {
    if ( visitor instanceof emailaddressVisitor ) {
        return visitor.visitAddrspec(this);
    } else {
        return visitor.visitChildren(this);
    }
};




emailaddressParser.AddrspecContext = AddrspecContext;

emailaddressParser.prototype.addrspec = function() {

    var localctx = new AddrspecContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, emailaddressParser.RULE_addrspec);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 74;
        this.localpart();
        this.state = 75;
        this.match(emailaddressParser.T__4);
        this.state = 76;
        this.domain();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function LocalpartContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = emailaddressParser.RULE_localpart;
    return this;
}

LocalpartContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LocalpartContext.prototype.constructor = LocalpartContext;

LocalpartContext.prototype.word = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(WordContext);
    } else {
        return this.getTypedRuleContext(WordContext,i);
    }
};

LocalpartContext.prototype.enterRule = function(listener) {
    if(listener instanceof emailaddressListener ) {
        listener.enterLocalpart(this);
	}
};

LocalpartContext.prototype.exitRule = function(listener) {
    if(listener instanceof emailaddressListener ) {
        listener.exitLocalpart(this);
	}
};

LocalpartContext.prototype.accept = function(visitor) {
    if ( visitor instanceof emailaddressVisitor ) {
        return visitor.visitLocalpart(this);
    } else {
        return visitor.visitChildren(this);
    }
};




emailaddressParser.LocalpartContext = LocalpartContext;

emailaddressParser.prototype.localpart = function() {

    var localctx = new LocalpartContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, emailaddressParser.RULE_localpart);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 78;
        this.word();
        this.state = 83;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===emailaddressParser.T__5) {
            this.state = 79;
            this.match(emailaddressParser.T__5);
            this.state = 80;
            this.word();
            this.state = 85;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DomainContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = emailaddressParser.RULE_domain;
    return this;
}

DomainContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DomainContext.prototype.constructor = DomainContext;

DomainContext.prototype.subdomain = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SubdomainContext);
    } else {
        return this.getTypedRuleContext(SubdomainContext,i);
    }
};

DomainContext.prototype.enterRule = function(listener) {
    if(listener instanceof emailaddressListener ) {
        listener.enterDomain(this);
	}
};

DomainContext.prototype.exitRule = function(listener) {
    if(listener instanceof emailaddressListener ) {
        listener.exitDomain(this);
	}
};

DomainContext.prototype.accept = function(visitor) {
    if ( visitor instanceof emailaddressVisitor ) {
        return visitor.visitDomain(this);
    } else {
        return visitor.visitChildren(this);
    }
};




emailaddressParser.DomainContext = DomainContext;

emailaddressParser.prototype.domain = function() {

    var localctx = new DomainContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, emailaddressParser.RULE_domain);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 86;
        this.subdomain();
        this.state = 91;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===emailaddressParser.T__5) {
            this.state = 87;
            this.match(emailaddressParser.T__5);
            this.state = 88;
            this.subdomain();
            this.state = 93;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SubdomainContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = emailaddressParser.RULE_subdomain;
    return this;
}

SubdomainContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SubdomainContext.prototype.constructor = SubdomainContext;

SubdomainContext.prototype.domainref = function() {
    return this.getTypedRuleContext(DomainrefContext,0);
};

SubdomainContext.prototype.domainliteral = function() {
    return this.getTypedRuleContext(DomainliteralContext,0);
};

SubdomainContext.prototype.enterRule = function(listener) {
    if(listener instanceof emailaddressListener ) {
        listener.enterSubdomain(this);
	}
};

SubdomainContext.prototype.exitRule = function(listener) {
    if(listener instanceof emailaddressListener ) {
        listener.exitSubdomain(this);
	}
};

SubdomainContext.prototype.accept = function(visitor) {
    if ( visitor instanceof emailaddressVisitor ) {
        return visitor.visitSubdomain(this);
    } else {
        return visitor.visitChildren(this);
    }
};




emailaddressParser.SubdomainContext = SubdomainContext;

emailaddressParser.prototype.subdomain = function() {

    var localctx = new SubdomainContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, emailaddressParser.RULE_subdomain);
    try {
        this.state = 96;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case emailaddressParser.CHAR:
            this.enterOuterAlt(localctx, 1);
            this.state = 94;
            this.domainref();
            break;
        case emailaddressParser.T__7:
            this.enterOuterAlt(localctx, 2);
            this.state = 95;
            this.domainliteral();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DomainrefContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = emailaddressParser.RULE_domainref;
    return this;
}

DomainrefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DomainrefContext.prototype.constructor = DomainrefContext;

DomainrefContext.prototype.atom = function() {
    return this.getTypedRuleContext(AtomContext,0);
};

DomainrefContext.prototype.enterRule = function(listener) {
    if(listener instanceof emailaddressListener ) {
        listener.enterDomainref(this);
	}
};

DomainrefContext.prototype.exitRule = function(listener) {
    if(listener instanceof emailaddressListener ) {
        listener.exitDomainref(this);
	}
};

DomainrefContext.prototype.accept = function(visitor) {
    if ( visitor instanceof emailaddressVisitor ) {
        return visitor.visitDomainref(this);
    } else {
        return visitor.visitChildren(this);
    }
};




emailaddressParser.DomainrefContext = DomainrefContext;

emailaddressParser.prototype.domainref = function() {

    var localctx = new DomainrefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, emailaddressParser.RULE_domainref);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 98;
        this.atom();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PhraseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = emailaddressParser.RULE_phrase;
    return this;
}

PhraseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PhraseContext.prototype.constructor = PhraseContext;

PhraseContext.prototype.word = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(WordContext);
    } else {
        return this.getTypedRuleContext(WordContext,i);
    }
};

PhraseContext.prototype.enterRule = function(listener) {
    if(listener instanceof emailaddressListener ) {
        listener.enterPhrase(this);
	}
};

PhraseContext.prototype.exitRule = function(listener) {
    if(listener instanceof emailaddressListener ) {
        listener.exitPhrase(this);
	}
};

PhraseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof emailaddressVisitor ) {
        return visitor.visitPhrase(this);
    } else {
        return visitor.visitChildren(this);
    }
};




emailaddressParser.PhraseContext = PhraseContext;

emailaddressParser.prototype.phrase = function() {

    var localctx = new PhraseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, emailaddressParser.RULE_phrase);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 101; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 100;
            this.word();
            this.state = 103; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===emailaddressParser.T__9 || _la===emailaddressParser.CHAR);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function WordContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = emailaddressParser.RULE_word;
    return this;
}

WordContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
WordContext.prototype.constructor = WordContext;

WordContext.prototype.atom = function() {
    return this.getTypedRuleContext(AtomContext,0);
};

WordContext.prototype.quotedstring = function() {
    return this.getTypedRuleContext(QuotedstringContext,0);
};

WordContext.prototype.enterRule = function(listener) {
    if(listener instanceof emailaddressListener ) {
        listener.enterWord(this);
	}
};

WordContext.prototype.exitRule = function(listener) {
    if(listener instanceof emailaddressListener ) {
        listener.exitWord(this);
	}
};

WordContext.prototype.accept = function(visitor) {
    if ( visitor instanceof emailaddressVisitor ) {
        return visitor.visitWord(this);
    } else {
        return visitor.visitChildren(this);
    }
};




emailaddressParser.WordContext = WordContext;

emailaddressParser.prototype.word = function() {

    var localctx = new WordContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, emailaddressParser.RULE_word);
    try {
        this.state = 107;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case emailaddressParser.CHAR:
            this.enterOuterAlt(localctx, 1);
            this.state = 105;
            this.atom();
            break;
        case emailaddressParser.T__9:
            this.enterOuterAlt(localctx, 2);
            this.state = 106;
            this.quotedstring();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function LwspcharContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = emailaddressParser.RULE_lwspchar;
    return this;
}

LwspcharContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LwspcharContext.prototype.constructor = LwspcharContext;

LwspcharContext.prototype.SPACE = function() {
    return this.getToken(emailaddressParser.SPACE, 0);
};

LwspcharContext.prototype.HTAB = function() {
    return this.getToken(emailaddressParser.HTAB, 0);
};

LwspcharContext.prototype.enterRule = function(listener) {
    if(listener instanceof emailaddressListener ) {
        listener.enterLwspchar(this);
	}
};

LwspcharContext.prototype.exitRule = function(listener) {
    if(listener instanceof emailaddressListener ) {
        listener.exitLwspchar(this);
	}
};

LwspcharContext.prototype.accept = function(visitor) {
    if ( visitor instanceof emailaddressVisitor ) {
        return visitor.visitLwspchar(this);
    } else {
        return visitor.visitChildren(this);
    }
};




emailaddressParser.LwspcharContext = LwspcharContext;

emailaddressParser.prototype.lwspchar = function() {

    var localctx = new LwspcharContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, emailaddressParser.RULE_lwspchar);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 109;
        _la = this._input.LA(1);
        if(!(_la===emailaddressParser.SPACE || _la===emailaddressParser.HTAB)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function LwspContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = emailaddressParser.RULE_lwsp;
    return this;
}

LwspContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LwspContext.prototype.constructor = LwspContext;

LwspContext.prototype.lwspchar = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(LwspcharContext);
    } else {
        return this.getTypedRuleContext(LwspcharContext,i);
    }
};

LwspContext.prototype.CRLF = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(emailaddressParser.CRLF);
    } else {
        return this.getToken(emailaddressParser.CRLF, i);
    }
};


LwspContext.prototype.enterRule = function(listener) {
    if(listener instanceof emailaddressListener ) {
        listener.enterLwsp(this);
	}
};

LwspContext.prototype.exitRule = function(listener) {
    if(listener instanceof emailaddressListener ) {
        listener.exitLwsp(this);
	}
};

LwspContext.prototype.accept = function(visitor) {
    if ( visitor instanceof emailaddressVisitor ) {
        return visitor.visitLwsp(this);
    } else {
        return visitor.visitChildren(this);
    }
};




emailaddressParser.LwspContext = LwspContext;

emailaddressParser.prototype.lwsp = function() {

    var localctx = new LwspContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, emailaddressParser.RULE_lwsp);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 115; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 112;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===emailaddressParser.CRLF) {
                this.state = 111;
                this.match(emailaddressParser.CRLF);
            }

            this.state = 114;
            this.lwspchar();
            this.state = 117; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << emailaddressParser.SPACE) | (1 << emailaddressParser.HTAB) | (1 << emailaddressParser.CRLF))) !== 0));
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DelimetersContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = emailaddressParser.RULE_delimeters;
    return this;
}

DelimetersContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DelimetersContext.prototype.constructor = DelimetersContext;

DelimetersContext.prototype.SPECIALS = function() {
    return this.getToken(emailaddressParser.SPECIALS, 0);
};

DelimetersContext.prototype.lwsp = function() {
    return this.getTypedRuleContext(LwspContext,0);
};

DelimetersContext.prototype.comment = function() {
    return this.getTypedRuleContext(CommentContext,0);
};

DelimetersContext.prototype.enterRule = function(listener) {
    if(listener instanceof emailaddressListener ) {
        listener.enterDelimeters(this);
	}
};

DelimetersContext.prototype.exitRule = function(listener) {
    if(listener instanceof emailaddressListener ) {
        listener.exitDelimeters(this);
	}
};

DelimetersContext.prototype.accept = function(visitor) {
    if ( visitor instanceof emailaddressVisitor ) {
        return visitor.visitDelimeters(this);
    } else {
        return visitor.visitChildren(this);
    }
};




emailaddressParser.DelimetersContext = DelimetersContext;

emailaddressParser.prototype.delimeters = function() {

    var localctx = new DelimetersContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, emailaddressParser.RULE_delimeters);
    try {
        this.state = 122;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case emailaddressParser.SPECIALS:
            this.enterOuterAlt(localctx, 1);
            this.state = 119;
            this.match(emailaddressParser.SPECIALS);
            break;
        case emailaddressParser.SPACE:
        case emailaddressParser.HTAB:
        case emailaddressParser.CRLF:
            this.enterOuterAlt(localctx, 2);
            this.state = 120;
            this.lwsp();
            break;
        case emailaddressParser.T__10:
            this.enterOuterAlt(localctx, 3);
            this.state = 121;
            this.comment();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AtomContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = emailaddressParser.RULE_atom;
    return this;
}

AtomContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AtomContext.prototype.constructor = AtomContext;

AtomContext.prototype.CHAR = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(emailaddressParser.CHAR);
    } else {
        return this.getToken(emailaddressParser.CHAR, i);
    }
};


AtomContext.prototype.enterRule = function(listener) {
    if(listener instanceof emailaddressListener ) {
        listener.enterAtom(this);
	}
};

AtomContext.prototype.exitRule = function(listener) {
    if(listener instanceof emailaddressListener ) {
        listener.exitAtom(this);
	}
};

AtomContext.prototype.accept = function(visitor) {
    if ( visitor instanceof emailaddressVisitor ) {
        return visitor.visitAtom(this);
    } else {
        return visitor.visitChildren(this);
    }
};




emailaddressParser.AtomContext = AtomContext;

emailaddressParser.prototype.atom = function() {

    var localctx = new AtomContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, emailaddressParser.RULE_atom);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 125; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 124;
        		this.match(emailaddressParser.CHAR);
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 127; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,12, this._ctx);
        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function QuotedpairContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = emailaddressParser.RULE_quotedpair;
    return this;
}

QuotedpairContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
QuotedpairContext.prototype.constructor = QuotedpairContext;

QuotedpairContext.prototype.CHAR = function() {
    return this.getToken(emailaddressParser.CHAR, 0);
};

QuotedpairContext.prototype.enterRule = function(listener) {
    if(listener instanceof emailaddressListener ) {
        listener.enterQuotedpair(this);
	}
};

QuotedpairContext.prototype.exitRule = function(listener) {
    if(listener instanceof emailaddressListener ) {
        listener.exitQuotedpair(this);
	}
};

QuotedpairContext.prototype.accept = function(visitor) {
    if ( visitor instanceof emailaddressVisitor ) {
        return visitor.visitQuotedpair(this);
    } else {
        return visitor.visitChildren(this);
    }
};




emailaddressParser.QuotedpairContext = QuotedpairContext;

emailaddressParser.prototype.quotedpair = function() {

    var localctx = new QuotedpairContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, emailaddressParser.RULE_quotedpair);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 129;
        this.match(emailaddressParser.T__6);
        this.state = 130;
        this.match(emailaddressParser.CHAR);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DomainliteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = emailaddressParser.RULE_domainliteral;
    return this;
}

DomainliteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DomainliteralContext.prototype.constructor = DomainliteralContext;

DomainliteralContext.prototype.DTEXT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(emailaddressParser.DTEXT);
    } else {
        return this.getToken(emailaddressParser.DTEXT, i);
    }
};


DomainliteralContext.prototype.quotedpair = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(QuotedpairContext);
    } else {
        return this.getTypedRuleContext(QuotedpairContext,i);
    }
};

DomainliteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof emailaddressListener ) {
        listener.enterDomainliteral(this);
	}
};

DomainliteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof emailaddressListener ) {
        listener.exitDomainliteral(this);
	}
};

DomainliteralContext.prototype.accept = function(visitor) {
    if ( visitor instanceof emailaddressVisitor ) {
        return visitor.visitDomainliteral(this);
    } else {
        return visitor.visitChildren(this);
    }
};




emailaddressParser.DomainliteralContext = DomainliteralContext;

emailaddressParser.prototype.domainliteral = function() {

    var localctx = new DomainliteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, emailaddressParser.RULE_domainliteral);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 132;
        this.match(emailaddressParser.T__7);
        this.state = 137;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===emailaddressParser.T__6 || _la===emailaddressParser.DTEXT) {
            this.state = 135;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case emailaddressParser.DTEXT:
                this.state = 133;
                this.match(emailaddressParser.DTEXT);
                break;
            case emailaddressParser.T__6:
                this.state = 134;
                this.quotedpair();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 139;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 140;
        this.match(emailaddressParser.T__8);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function QuotedstringContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = emailaddressParser.RULE_quotedstring;
    return this;
}

QuotedstringContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
QuotedstringContext.prototype.constructor = QuotedstringContext;

QuotedstringContext.prototype.QTEXT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(emailaddressParser.QTEXT);
    } else {
        return this.getToken(emailaddressParser.QTEXT, i);
    }
};


QuotedstringContext.prototype.quotedpair = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(QuotedpairContext);
    } else {
        return this.getTypedRuleContext(QuotedpairContext,i);
    }
};

QuotedstringContext.prototype.enterRule = function(listener) {
    if(listener instanceof emailaddressListener ) {
        listener.enterQuotedstring(this);
	}
};

QuotedstringContext.prototype.exitRule = function(listener) {
    if(listener instanceof emailaddressListener ) {
        listener.exitQuotedstring(this);
	}
};

QuotedstringContext.prototype.accept = function(visitor) {
    if ( visitor instanceof emailaddressVisitor ) {
        return visitor.visitQuotedstring(this);
    } else {
        return visitor.visitChildren(this);
    }
};




emailaddressParser.QuotedstringContext = QuotedstringContext;

emailaddressParser.prototype.quotedstring = function() {

    var localctx = new QuotedstringContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, emailaddressParser.RULE_quotedstring);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 142;
        this.match(emailaddressParser.T__9);
        this.state = 147;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===emailaddressParser.T__6 || _la===emailaddressParser.QTEXT) {
            this.state = 145;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case emailaddressParser.QTEXT:
                this.state = 143;
                this.match(emailaddressParser.QTEXT);
                break;
            case emailaddressParser.T__6:
                this.state = 144;
                this.quotedpair();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 149;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 150;
        this.match(emailaddressParser.T__9);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function CommentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = emailaddressParser.RULE_comment;
    return this;
}

CommentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CommentContext.prototype.constructor = CommentContext;

CommentContext.prototype.CTEXT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(emailaddressParser.CTEXT);
    } else {
        return this.getToken(emailaddressParser.CTEXT, i);
    }
};


CommentContext.prototype.quotedpair = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(QuotedpairContext);
    } else {
        return this.getTypedRuleContext(QuotedpairContext,i);
    }
};

CommentContext.prototype.comment = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(CommentContext);
    } else {
        return this.getTypedRuleContext(CommentContext,i);
    }
};

CommentContext.prototype.enterRule = function(listener) {
    if(listener instanceof emailaddressListener ) {
        listener.enterComment(this);
	}
};

CommentContext.prototype.exitRule = function(listener) {
    if(listener instanceof emailaddressListener ) {
        listener.exitComment(this);
	}
};

CommentContext.prototype.accept = function(visitor) {
    if ( visitor instanceof emailaddressVisitor ) {
        return visitor.visitComment(this);
    } else {
        return visitor.visitChildren(this);
    }
};




emailaddressParser.CommentContext = CommentContext;

emailaddressParser.prototype.comment = function() {

    var localctx = new CommentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, emailaddressParser.RULE_comment);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 152;
        this.match(emailaddressParser.T__10);
        this.state = 158;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << emailaddressParser.T__6) | (1 << emailaddressParser.T__10) | (1 << emailaddressParser.CTEXT))) !== 0)) {
            this.state = 156;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case emailaddressParser.CTEXT:
                this.state = 153;
                this.match(emailaddressParser.CTEXT);
                break;
            case emailaddressParser.T__6:
                this.state = 154;
                this.quotedpair();
                break;
            case emailaddressParser.T__10:
                this.state = 155;
                this.comment();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 160;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 161;
        this.match(emailaddressParser.T__11);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.emailaddressParser = emailaddressParser;
