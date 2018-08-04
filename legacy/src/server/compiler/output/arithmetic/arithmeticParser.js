// Generated from C:\git-seaquail.visualstudio.com\AntlrEditor\src\server\compiler\output\arithmetic\arithmetic.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var arithmeticListener = require('./arithmeticListener').arithmeticListener;
var arithmeticVisitor = require('./arithmeticVisitor').arithmeticVisitor;

var grammarFileName = "arithmetic.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0010F\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0007\u0003\u001c\n\u0003",
    "\f\u0003\u000e\u0003\u001f\u000b\u0003\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0007\u0004$\n\u0004\f\u0004\u000e\u0004\'\u000b\u0004\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0007\u0005,\n\u0005\f\u0005\u000e\u0005",
    "/\u000b\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0005\u00066\n\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0005\u0007>\n\u0007\u0003\b\u0003\b",
    "\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0002\u0002\u000b\u0002\u0004",
    "\u0006\b\n\f\u000e\u0010\u0012\u0002\u0005\u0003\u0002\u0007\b\u0003",
    "\u0002\t\n\u0003\u0002\u000b\r\u0002C\u0002\u0014\u0003\u0002\u0002",
    "\u0002\u0004\u0018\u0003\u0002\u0002\u0002\u0006 \u0003\u0002\u0002",
    "\u0002\b(\u0003\u0002\u0002\u0002\n5\u0003\u0002\u0002\u0002\f=\u0003",
    "\u0002\u0002\u0002\u000e?\u0003\u0002\u0002\u0002\u0010A\u0003\u0002",
    "\u0002\u0002\u0012C\u0003\u0002\u0002\u0002\u0014\u0015\u0005\u0004",
    "\u0003\u0002\u0015\u0016\u0005\u0012\n\u0002\u0016\u0017\u0005\u0004",
    "\u0003\u0002\u0017\u0003\u0003\u0002\u0002\u0002\u0018\u001d\u0005\u0006",
    "\u0004\u0002\u0019\u001a\t\u0002\u0002\u0002\u001a\u001c\u0005\u0006",
    "\u0004\u0002\u001b\u0019\u0003\u0002\u0002\u0002\u001c\u001f\u0003\u0002",
    "\u0002\u0002\u001d\u001b\u0003\u0002\u0002\u0002\u001d\u001e\u0003\u0002",
    "\u0002\u0002\u001e\u0005\u0003\u0002\u0002\u0002\u001f\u001d\u0003\u0002",
    "\u0002\u0002 %\u0005\b\u0005\u0002!\"\t\u0003\u0002\u0002\"$\u0005\b",
    "\u0005\u0002#!\u0003\u0002\u0002\u0002$\'\u0003\u0002\u0002\u0002%#",
    "\u0003\u0002\u0002\u0002%&\u0003\u0002\u0002\u0002&\u0007\u0003\u0002",
    "\u0002\u0002\'%\u0003\u0002\u0002\u0002(-\u0005\n\u0006\u0002)*\u0007",
    "\u000f\u0002\u0002*,\u0005\n\u0006\u0002+)\u0003\u0002\u0002\u0002,",
    "/\u0003\u0002\u0002\u0002-+\u0003\u0002\u0002\u0002-.\u0003\u0002\u0002",
    "\u0002.\t\u0003\u0002\u0002\u0002/-\u0003\u0002\u0002\u000201\u0007",
    "\u0007\u0002\u000216\u0005\n\u0006\u000223\u0007\b\u0002\u000236\u0005",
    "\n\u0006\u000246\u0005\f\u0007\u000250\u0003\u0002\u0002\u000252\u0003",
    "\u0002\u0002\u000254\u0003\u0002\u0002\u00026\u000b\u0003\u0002\u0002",
    "\u00027>\u0005\u000e\b\u00028>\u0005\u0010\t\u00029:\u0007\u0005\u0002",
    "\u0002:;\u0005\u0004\u0003\u0002;<\u0007\u0006\u0002\u0002<>\u0003\u0002",
    "\u0002\u0002=7\u0003\u0002\u0002\u0002=8\u0003\u0002\u0002\u0002=9\u0003",
    "\u0002\u0002\u0002>\r\u0003\u0002\u0002\u0002?@\u0007\u0004\u0002\u0002",
    "@\u000f\u0003\u0002\u0002\u0002AB\u0007\u0003\u0002\u0002B\u0011\u0003",
    "\u0002\u0002\u0002CD\t\u0004\u0002\u0002D\u0013\u0003\u0002\u0002\u0002",
    "\u0007\u001d%-5="].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, null, "'('", "')'", "'+'", "'-'", "'*'", 
                     "'/'", "'>'", "'<'", "'='", "'.'", "'^'" ];

var symbolicNames = [ null, "VARIABLE", "SCIENTIFIC_NUMBER", "LPAREN", "RPAREN", 
                      "PLUS", "MINUS", "TIMES", "DIV", "GT", "LT", "EQ", 
                      "POINT", "POW", "WS" ];

var ruleNames =  [ "equation", "expression", "term", "factor", "signedAtom", 
                   "atom", "scientific", "variable", "relop" ];

function arithmeticParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

arithmeticParser.prototype = Object.create(antlr4.Parser.prototype);
arithmeticParser.prototype.constructor = arithmeticParser;

Object.defineProperty(arithmeticParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

arithmeticParser.EOF = antlr4.Token.EOF;
arithmeticParser.VARIABLE = 1;
arithmeticParser.SCIENTIFIC_NUMBER = 2;
arithmeticParser.LPAREN = 3;
arithmeticParser.RPAREN = 4;
arithmeticParser.PLUS = 5;
arithmeticParser.MINUS = 6;
arithmeticParser.TIMES = 7;
arithmeticParser.DIV = 8;
arithmeticParser.GT = 9;
arithmeticParser.LT = 10;
arithmeticParser.EQ = 11;
arithmeticParser.POINT = 12;
arithmeticParser.POW = 13;
arithmeticParser.WS = 14;

arithmeticParser.RULE_equation = 0;
arithmeticParser.RULE_expression = 1;
arithmeticParser.RULE_term = 2;
arithmeticParser.RULE_factor = 3;
arithmeticParser.RULE_signedAtom = 4;
arithmeticParser.RULE_atom = 5;
arithmeticParser.RULE_scientific = 6;
arithmeticParser.RULE_variable = 7;
arithmeticParser.RULE_relop = 8;

function EquationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = arithmeticParser.RULE_equation;
    return this;
}

EquationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EquationContext.prototype.constructor = EquationContext;

EquationContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

EquationContext.prototype.relop = function() {
    return this.getTypedRuleContext(RelopContext,0);
};

EquationContext.prototype.enterRule = function(listener) {
    if(listener instanceof arithmeticListener ) {
        listener.enterEquation(this);
	}
};

EquationContext.prototype.exitRule = function(listener) {
    if(listener instanceof arithmeticListener ) {
        listener.exitEquation(this);
	}
};

EquationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof arithmeticVisitor ) {
        return visitor.visitEquation(this);
    } else {
        return visitor.visitChildren(this);
    }
};




arithmeticParser.EquationContext = EquationContext;

arithmeticParser.prototype.equation = function() {

    var localctx = new EquationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, arithmeticParser.RULE_equation);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 18;
        this.expression();
        this.state = 19;
        this.relop();
        this.state = 20;
        this.expression();
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

function ExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = arithmeticParser.RULE_expression;
    return this;
}

ExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionContext.prototype.constructor = ExpressionContext;

ExpressionContext.prototype.term = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(TermContext);
    } else {
        return this.getTypedRuleContext(TermContext,i);
    }
};

ExpressionContext.prototype.PLUS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(arithmeticParser.PLUS);
    } else {
        return this.getToken(arithmeticParser.PLUS, i);
    }
};


ExpressionContext.prototype.MINUS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(arithmeticParser.MINUS);
    } else {
        return this.getToken(arithmeticParser.MINUS, i);
    }
};


ExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof arithmeticListener ) {
        listener.enterExpression(this);
	}
};

ExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof arithmeticListener ) {
        listener.exitExpression(this);
	}
};

ExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof arithmeticVisitor ) {
        return visitor.visitExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};




arithmeticParser.ExpressionContext = ExpressionContext;

arithmeticParser.prototype.expression = function() {

    var localctx = new ExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, arithmeticParser.RULE_expression);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 22;
        this.term();
        this.state = 27;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===arithmeticParser.PLUS || _la===arithmeticParser.MINUS) {
            this.state = 23;
            _la = this._input.LA(1);
            if(!(_la===arithmeticParser.PLUS || _la===arithmeticParser.MINUS)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 24;
            this.term();
            this.state = 29;
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

function TermContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = arithmeticParser.RULE_term;
    return this;
}

TermContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TermContext.prototype.constructor = TermContext;

TermContext.prototype.factor = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FactorContext);
    } else {
        return this.getTypedRuleContext(FactorContext,i);
    }
};

TermContext.prototype.TIMES = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(arithmeticParser.TIMES);
    } else {
        return this.getToken(arithmeticParser.TIMES, i);
    }
};


TermContext.prototype.DIV = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(arithmeticParser.DIV);
    } else {
        return this.getToken(arithmeticParser.DIV, i);
    }
};


TermContext.prototype.enterRule = function(listener) {
    if(listener instanceof arithmeticListener ) {
        listener.enterTerm(this);
	}
};

TermContext.prototype.exitRule = function(listener) {
    if(listener instanceof arithmeticListener ) {
        listener.exitTerm(this);
	}
};

TermContext.prototype.accept = function(visitor) {
    if ( visitor instanceof arithmeticVisitor ) {
        return visitor.visitTerm(this);
    } else {
        return visitor.visitChildren(this);
    }
};




arithmeticParser.TermContext = TermContext;

arithmeticParser.prototype.term = function() {

    var localctx = new TermContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, arithmeticParser.RULE_term);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 30;
        this.factor();
        this.state = 35;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===arithmeticParser.TIMES || _la===arithmeticParser.DIV) {
            this.state = 31;
            _la = this._input.LA(1);
            if(!(_la===arithmeticParser.TIMES || _la===arithmeticParser.DIV)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 32;
            this.factor();
            this.state = 37;
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

function FactorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = arithmeticParser.RULE_factor;
    return this;
}

FactorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FactorContext.prototype.constructor = FactorContext;

FactorContext.prototype.signedAtom = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SignedAtomContext);
    } else {
        return this.getTypedRuleContext(SignedAtomContext,i);
    }
};

FactorContext.prototype.POW = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(arithmeticParser.POW);
    } else {
        return this.getToken(arithmeticParser.POW, i);
    }
};


FactorContext.prototype.enterRule = function(listener) {
    if(listener instanceof arithmeticListener ) {
        listener.enterFactor(this);
	}
};

FactorContext.prototype.exitRule = function(listener) {
    if(listener instanceof arithmeticListener ) {
        listener.exitFactor(this);
	}
};

FactorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof arithmeticVisitor ) {
        return visitor.visitFactor(this);
    } else {
        return visitor.visitChildren(this);
    }
};




arithmeticParser.FactorContext = FactorContext;

arithmeticParser.prototype.factor = function() {

    var localctx = new FactorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, arithmeticParser.RULE_factor);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 38;
        this.signedAtom();
        this.state = 43;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===arithmeticParser.POW) {
            this.state = 39;
            this.match(arithmeticParser.POW);
            this.state = 40;
            this.signedAtom();
            this.state = 45;
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

function SignedAtomContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = arithmeticParser.RULE_signedAtom;
    return this;
}

SignedAtomContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SignedAtomContext.prototype.constructor = SignedAtomContext;

SignedAtomContext.prototype.PLUS = function() {
    return this.getToken(arithmeticParser.PLUS, 0);
};

SignedAtomContext.prototype.signedAtom = function() {
    return this.getTypedRuleContext(SignedAtomContext,0);
};

SignedAtomContext.prototype.MINUS = function() {
    return this.getToken(arithmeticParser.MINUS, 0);
};

SignedAtomContext.prototype.atom = function() {
    return this.getTypedRuleContext(AtomContext,0);
};

SignedAtomContext.prototype.enterRule = function(listener) {
    if(listener instanceof arithmeticListener ) {
        listener.enterSignedAtom(this);
	}
};

SignedAtomContext.prototype.exitRule = function(listener) {
    if(listener instanceof arithmeticListener ) {
        listener.exitSignedAtom(this);
	}
};

SignedAtomContext.prototype.accept = function(visitor) {
    if ( visitor instanceof arithmeticVisitor ) {
        return visitor.visitSignedAtom(this);
    } else {
        return visitor.visitChildren(this);
    }
};




arithmeticParser.SignedAtomContext = SignedAtomContext;

arithmeticParser.prototype.signedAtom = function() {

    var localctx = new SignedAtomContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, arithmeticParser.RULE_signedAtom);
    try {
        this.state = 51;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case arithmeticParser.PLUS:
            this.enterOuterAlt(localctx, 1);
            this.state = 46;
            this.match(arithmeticParser.PLUS);
            this.state = 47;
            this.signedAtom();
            break;
        case arithmeticParser.MINUS:
            this.enterOuterAlt(localctx, 2);
            this.state = 48;
            this.match(arithmeticParser.MINUS);
            this.state = 49;
            this.signedAtom();
            break;
        case arithmeticParser.VARIABLE:
        case arithmeticParser.SCIENTIFIC_NUMBER:
        case arithmeticParser.LPAREN:
            this.enterOuterAlt(localctx, 3);
            this.state = 50;
            this.atom();
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
    this.ruleIndex = arithmeticParser.RULE_atom;
    return this;
}

AtomContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AtomContext.prototype.constructor = AtomContext;

AtomContext.prototype.scientific = function() {
    return this.getTypedRuleContext(ScientificContext,0);
};

AtomContext.prototype.variable = function() {
    return this.getTypedRuleContext(VariableContext,0);
};

AtomContext.prototype.LPAREN = function() {
    return this.getToken(arithmeticParser.LPAREN, 0);
};

AtomContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

AtomContext.prototype.RPAREN = function() {
    return this.getToken(arithmeticParser.RPAREN, 0);
};

AtomContext.prototype.enterRule = function(listener) {
    if(listener instanceof arithmeticListener ) {
        listener.enterAtom(this);
	}
};

AtomContext.prototype.exitRule = function(listener) {
    if(listener instanceof arithmeticListener ) {
        listener.exitAtom(this);
	}
};

AtomContext.prototype.accept = function(visitor) {
    if ( visitor instanceof arithmeticVisitor ) {
        return visitor.visitAtom(this);
    } else {
        return visitor.visitChildren(this);
    }
};




arithmeticParser.AtomContext = AtomContext;

arithmeticParser.prototype.atom = function() {

    var localctx = new AtomContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, arithmeticParser.RULE_atom);
    try {
        this.state = 59;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case arithmeticParser.SCIENTIFIC_NUMBER:
            this.enterOuterAlt(localctx, 1);
            this.state = 53;
            this.scientific();
            break;
        case arithmeticParser.VARIABLE:
            this.enterOuterAlt(localctx, 2);
            this.state = 54;
            this.variable();
            break;
        case arithmeticParser.LPAREN:
            this.enterOuterAlt(localctx, 3);
            this.state = 55;
            this.match(arithmeticParser.LPAREN);
            this.state = 56;
            this.expression();
            this.state = 57;
            this.match(arithmeticParser.RPAREN);
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

function ScientificContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = arithmeticParser.RULE_scientific;
    return this;
}

ScientificContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ScientificContext.prototype.constructor = ScientificContext;

ScientificContext.prototype.SCIENTIFIC_NUMBER = function() {
    return this.getToken(arithmeticParser.SCIENTIFIC_NUMBER, 0);
};

ScientificContext.prototype.enterRule = function(listener) {
    if(listener instanceof arithmeticListener ) {
        listener.enterScientific(this);
	}
};

ScientificContext.prototype.exitRule = function(listener) {
    if(listener instanceof arithmeticListener ) {
        listener.exitScientific(this);
	}
};

ScientificContext.prototype.accept = function(visitor) {
    if ( visitor instanceof arithmeticVisitor ) {
        return visitor.visitScientific(this);
    } else {
        return visitor.visitChildren(this);
    }
};




arithmeticParser.ScientificContext = ScientificContext;

arithmeticParser.prototype.scientific = function() {

    var localctx = new ScientificContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, arithmeticParser.RULE_scientific);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 61;
        this.match(arithmeticParser.SCIENTIFIC_NUMBER);
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

function VariableContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = arithmeticParser.RULE_variable;
    return this;
}

VariableContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VariableContext.prototype.constructor = VariableContext;

VariableContext.prototype.VARIABLE = function() {
    return this.getToken(arithmeticParser.VARIABLE, 0);
};

VariableContext.prototype.enterRule = function(listener) {
    if(listener instanceof arithmeticListener ) {
        listener.enterVariable(this);
	}
};

VariableContext.prototype.exitRule = function(listener) {
    if(listener instanceof arithmeticListener ) {
        listener.exitVariable(this);
	}
};

VariableContext.prototype.accept = function(visitor) {
    if ( visitor instanceof arithmeticVisitor ) {
        return visitor.visitVariable(this);
    } else {
        return visitor.visitChildren(this);
    }
};




arithmeticParser.VariableContext = VariableContext;

arithmeticParser.prototype.variable = function() {

    var localctx = new VariableContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, arithmeticParser.RULE_variable);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 63;
        this.match(arithmeticParser.VARIABLE);
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

function RelopContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = arithmeticParser.RULE_relop;
    return this;
}

RelopContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RelopContext.prototype.constructor = RelopContext;

RelopContext.prototype.EQ = function() {
    return this.getToken(arithmeticParser.EQ, 0);
};

RelopContext.prototype.GT = function() {
    return this.getToken(arithmeticParser.GT, 0);
};

RelopContext.prototype.LT = function() {
    return this.getToken(arithmeticParser.LT, 0);
};

RelopContext.prototype.enterRule = function(listener) {
    if(listener instanceof arithmeticListener ) {
        listener.enterRelop(this);
	}
};

RelopContext.prototype.exitRule = function(listener) {
    if(listener instanceof arithmeticListener ) {
        listener.exitRelop(this);
	}
};

RelopContext.prototype.accept = function(visitor) {
    if ( visitor instanceof arithmeticVisitor ) {
        return visitor.visitRelop(this);
    } else {
        return visitor.visitChildren(this);
    }
};




arithmeticParser.RelopContext = RelopContext;

arithmeticParser.prototype.relop = function() {

    var localctx = new RelopContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, arithmeticParser.RULE_relop);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 65;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << arithmeticParser.GT) | (1 << arithmeticParser.LT) | (1 << arithmeticParser.EQ))) !== 0))) {
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


exports.arithmeticParser = arithmeticParser;
