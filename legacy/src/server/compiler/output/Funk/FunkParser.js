// Generated from C:\git-seaquail.visualstudio.com\AntlrEditor\src\server\compiler\output\Funk\Funk.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var FunkListener = require('./FunkListener').FunkListener;
var FunkVisitor = require('./FunkVisitor').FunkVisitor;

var grammarFileName = "Funk.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0004\u0012\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0007\u0003",
    "\r\n\u0003\f\u0003\u000e\u0003\u0010\u000b\u0003\u0003\u0003\u0002\u0002",
    "\u0004\u0002\u0004\u0002\u0002\u0002\u0010\u0002\u0006\u0003\u0002\u0002",
    "\u0002\u0004\t\u0003\u0002\u0002\u0002\u0006\u0007\u0005\u0004\u0003",
    "\u0002\u0007\b\u0007\u0002\u0002\u0003\b\u0003\u0003\u0002\u0002\u0002",
    "\t\u000e\u0007\u0004\u0002\u0002\n\u000b\u0007\u0003\u0002\u0002\u000b",
    "\r\u0007\u0004\u0002\u0002\f\n\u0003\u0002\u0002\u0002\r\u0010\u0003",
    "\u0002\u0002\u0002\u000e\f\u0003\u0002\u0002\u0002\u000e\u000f\u0003",
    "\u0002\u0002\u0002\u000f\u0005\u0003\u0002\u0002\u0002\u0010\u000e\u0003",
    "\u0002\u0002\u0002\u0003\u000e"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "' '" ];

var symbolicNames = [ null, "SPACES", "WORDS" ];

var ruleNames =  [ "where", "allUpInThere" ];

function FunkParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

FunkParser.prototype = Object.create(antlr4.Parser.prototype);
FunkParser.prototype.constructor = FunkParser;

Object.defineProperty(FunkParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

FunkParser.EOF = antlr4.Token.EOF;
FunkParser.SPACES = 1;
FunkParser.WORDS = 2;

FunkParser.RULE_where = 0;
FunkParser.RULE_allUpInThere = 1;

function WhereContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FunkParser.RULE_where;
    return this;
}

WhereContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
WhereContext.prototype.constructor = WhereContext;

WhereContext.prototype.allUpInThere = function() {
    return this.getTypedRuleContext(AllUpInThereContext,0);
};

WhereContext.prototype.EOF = function() {
    return this.getToken(FunkParser.EOF, 0);
};

WhereContext.prototype.enterRule = function(listener) {
    if(listener instanceof FunkListener ) {
        listener.enterWhere(this);
	}
};

WhereContext.prototype.exitRule = function(listener) {
    if(listener instanceof FunkListener ) {
        listener.exitWhere(this);
	}
};

WhereContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FunkVisitor ) {
        return visitor.visitWhere(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FunkParser.WhereContext = WhereContext;

FunkParser.prototype.where = function() {

    var localctx = new WhereContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, FunkParser.RULE_where);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 4;
        this.allUpInThere();
        this.state = 5;
        this.match(FunkParser.EOF);
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

function AllUpInThereContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FunkParser.RULE_allUpInThere;
    return this;
}

AllUpInThereContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AllUpInThereContext.prototype.constructor = AllUpInThereContext;

AllUpInThereContext.prototype.WORDS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FunkParser.WORDS);
    } else {
        return this.getToken(FunkParser.WORDS, i);
    }
};


AllUpInThereContext.prototype.SPACES = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FunkParser.SPACES);
    } else {
        return this.getToken(FunkParser.SPACES, i);
    }
};


AllUpInThereContext.prototype.enterRule = function(listener) {
    if(listener instanceof FunkListener ) {
        listener.enterAllUpInThere(this);
	}
};

AllUpInThereContext.prototype.exitRule = function(listener) {
    if(listener instanceof FunkListener ) {
        listener.exitAllUpInThere(this);
	}
};

AllUpInThereContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FunkVisitor ) {
        return visitor.visitAllUpInThere(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FunkParser.AllUpInThereContext = AllUpInThereContext;

FunkParser.prototype.allUpInThere = function() {

    var localctx = new AllUpInThereContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, FunkParser.RULE_allUpInThere);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 7;
        this.match(FunkParser.WORDS);
        this.state = 12;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===FunkParser.SPACES) {
            this.state = 8;
            this.match(FunkParser.SPACES);
            this.state = 9;
            this.match(FunkParser.WORDS);
            this.state = 14;
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


exports.FunkParser = FunkParser;
