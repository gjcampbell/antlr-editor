// Generated from C:\Users\gcampbell\Documents\Arch\Conference\KCDC 2017\src\server\compiler\output\Hello\Hello.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var HelloListener = require('./HelloListener').HelloListener;
var HelloVisitor = require('./HelloVisitor').HelloVisitor;

var grammarFileName = "Hello.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0005\u0018\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0007\u0002\n\n\u0002\f\u0002\u000e\u0002\r",
    "\u000b\u0002\u0003\u0003\u0006\u0003\u0010\n\u0003\r\u0003\u000e\u0003",
    "\u0011\u0003\u0003\u0003\u0003\u0005\u0003\u0016\n\u0003\u0003\u0003",
    "\u0002\u0002\u0004\u0002\u0004\u0002\u0002\u0002\u0018\u0002\u0006\u0003",
    "\u0002\u0002\u0002\u0004\u0015\u0003\u0002\u0002\u0002\u0006\u000b\u0005",
    "\u0004\u0003\u0002\u0007\b\u0007\u0003\u0002\u0002\b\n\u0005\u0004\u0003",
    "\u0002\t\u0007\u0003\u0002\u0002\u0002\n\r\u0003\u0002\u0002\u0002\u000b",
    "\t\u0003\u0002\u0002\u0002\u000b\f\u0003\u0002\u0002\u0002\f\u0003\u0003",
    "\u0002\u0002\u0002\r\u000b\u0003\u0002\u0002\u0002\u000e\u0010\u0007",
    "\u0005\u0002\u0002\u000f\u000e\u0003\u0002\u0002\u0002\u0010\u0011\u0003",
    "\u0002\u0002\u0002\u0011\u000f\u0003\u0002\u0002\u0002\u0011\u0012\u0003",
    "\u0002\u0002\u0002\u0012\u0016\u0003\u0002\u0002\u0002\u0013\u0014\u0007",
    "\u0004\u0002\u0002\u0014\u0016\u0005\u0004\u0003\u0002\u0015\u000f\u0003",
    "\u0002\u0002\u0002\u0015\u0013\u0003\u0002\u0002\u0002\u0016\u0005\u0003",
    "\u0002\u0002\u0002\u0005\u000b\u0011\u0015"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'-'", "'/'" ];

var symbolicNames = [ null, "DASH", "SLASH", "LETTER" ];

var ruleNames =  [ "what", "problem" ];

function HelloParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

HelloParser.prototype = Object.create(antlr4.Parser.prototype);
HelloParser.prototype.constructor = HelloParser;

Object.defineProperty(HelloParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

HelloParser.EOF = antlr4.Token.EOF;
HelloParser.DASH = 1;
HelloParser.SLASH = 2;
HelloParser.LETTER = 3;

HelloParser.RULE_what = 0;
HelloParser.RULE_problem = 1;

function WhatContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HelloParser.RULE_what;
    return this;
}

WhatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
WhatContext.prototype.constructor = WhatContext;

WhatContext.prototype.problem = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ProblemContext);
    } else {
        return this.getTypedRuleContext(ProblemContext,i);
    }
};

WhatContext.prototype.DASH = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(HelloParser.DASH);
    } else {
        return this.getToken(HelloParser.DASH, i);
    }
};


WhatContext.prototype.enterRule = function(listener) {
    if(listener instanceof HelloListener ) {
        listener.enterWhat(this);
	}
};

WhatContext.prototype.exitRule = function(listener) {
    if(listener instanceof HelloListener ) {
        listener.exitWhat(this);
	}
};

WhatContext.prototype.accept = function(visitor) {
    if ( visitor instanceof HelloVisitor ) {
        return visitor.visitWhat(this);
    } else {
        return visitor.visitChildren(this);
    }
};




HelloParser.WhatContext = WhatContext;

HelloParser.prototype.what = function() {

    var localctx = new WhatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, HelloParser.RULE_what);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 4;
        this.problem();
        this.state = 9;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===HelloParser.DASH) {
            this.state = 5;
            this.match(HelloParser.DASH);
            this.state = 6;
            this.problem();
            this.state = 11;
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

function ProblemContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HelloParser.RULE_problem;
    return this;
}

ProblemContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProblemContext.prototype.constructor = ProblemContext;

ProblemContext.prototype.LETTER = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(HelloParser.LETTER);
    } else {
        return this.getToken(HelloParser.LETTER, i);
    }
};


ProblemContext.prototype.SLASH = function() {
    return this.getToken(HelloParser.SLASH, 0);
};

ProblemContext.prototype.problem = function() {
    return this.getTypedRuleContext(ProblemContext,0);
};

ProblemContext.prototype.enterRule = function(listener) {
    if(listener instanceof HelloListener ) {
        listener.enterProblem(this);
	}
};

ProblemContext.prototype.exitRule = function(listener) {
    if(listener instanceof HelloListener ) {
        listener.exitProblem(this);
	}
};

ProblemContext.prototype.accept = function(visitor) {
    if ( visitor instanceof HelloVisitor ) {
        return visitor.visitProblem(this);
    } else {
        return visitor.visitChildren(this);
    }
};




HelloParser.ProblemContext = ProblemContext;

HelloParser.prototype.problem = function() {

    var localctx = new ProblemContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, HelloParser.RULE_problem);
    var _la = 0; // Token type
    try {
        this.state = 19;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case HelloParser.LETTER:
            this.enterOuterAlt(localctx, 1);
            this.state = 13; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 12;
                this.match(HelloParser.LETTER);
                this.state = 15; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while(_la===HelloParser.LETTER);
            break;
        case HelloParser.SLASH:
            this.enterOuterAlt(localctx, 2);
            this.state = 17;
            this.match(HelloParser.SLASH);
            this.state = 18;
            this.problem();
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


exports.HelloParser = HelloParser;
