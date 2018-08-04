// Generated from C:\git-seaquail.visualstudio.com\AntlrEditor\src\server\compiler\output\calculator\calculator.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var calculatorListener = require('./calculatorListener').calculatorListener;
var calculatorVisitor = require('./calculatorVisitor').calculatorVisitor;

var grammarFileName = "calculator.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u001d^\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0007\u0003\"\n\u0003\f\u0003\u000e\u0003%\u000b",
    "\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0007\u0004*\n\u0004\f\u0004",
    "\u000e\u0004-\u000b\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0007",
    "\u00052\n\u0005\f\u0005\u000e\u00055\u000b\u0005\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0005\u0006=\n\u0006",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0005\u0007F\n\u0007\u0003\b\u0003\b\u0003\t\u0003\t\u0003",
    "\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0007\u000bS\n\u000b\f\u000b\u000e\u000bV\u000b\u000b\u0003\u000b\u0003",
    "\u000b\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0002\u0002\u000e\u0002",
    "\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u0002\u0007\u0003",
    "\u0002\u000e\u000f\u0003\u0002\u0010\u0011\u0003\u0002\u0018\u001a\u0003",
    "\u0002\u0003\u000b\u0003\u0002\u0012\u0014\u0002[\u0002\u001a\u0003",
    "\u0002\u0002\u0002\u0004\u001e\u0003\u0002\u0002\u0002\u0006&\u0003",
    "\u0002\u0002\u0002\b.\u0003\u0002\u0002\u0002\n<\u0003\u0002\u0002\u0002",
    "\fE\u0003\u0002\u0002\u0002\u000eG\u0003\u0002\u0002\u0002\u0010I\u0003",
    "\u0002\u0002\u0002\u0012K\u0003\u0002\u0002\u0002\u0014M\u0003\u0002",
    "\u0002\u0002\u0016Y\u0003\u0002\u0002\u0002\u0018[\u0003\u0002\u0002",
    "\u0002\u001a\u001b\u0005\u0004\u0003\u0002\u001b\u001c\u0005\u0018\r",
    "\u0002\u001c\u001d\u0005\u0004\u0003\u0002\u001d\u0003\u0003\u0002\u0002",
    "\u0002\u001e#\u0005\u0006\u0004\u0002\u001f \t\u0002\u0002\u0002 \"",
    "\u0005\u0006\u0004\u0002!\u001f\u0003\u0002\u0002\u0002\"%\u0003\u0002",
    "\u0002\u0002#!\u0003\u0002\u0002\u0002#$\u0003\u0002\u0002\u0002$\u0005",
    "\u0003\u0002\u0002\u0002%#\u0003\u0002\u0002\u0002&+\u0005\b\u0005\u0002",
    "\'(\t\u0003\u0002\u0002(*\u0005\b\u0005\u0002)\'\u0003\u0002\u0002\u0002",
    "*-\u0003\u0002\u0002\u0002+)\u0003\u0002\u0002\u0002+,\u0003\u0002\u0002",
    "\u0002,\u0007\u0003\u0002\u0002\u0002-+\u0003\u0002\u0002\u0002.3\u0005",
    "\n\u0006\u0002/0\u0007\u0017\u0002\u000202\u0005\n\u0006\u00021/\u0003",
    "\u0002\u0002\u000225\u0003\u0002\u0002\u000231\u0003\u0002\u0002\u0002",
    "34\u0003\u0002\u0002\u00024\t\u0003\u0002\u0002\u000253\u0003\u0002",
    "\u0002\u000267\u0007\u000e\u0002\u00027=\u0005\n\u0006\u000289\u0007",
    "\u000f\u0002\u00029=\u0005\n\u0006\u0002:=\u0005\u0014\u000b\u0002;",
    "=\u0005\f\u0007\u0002<6\u0003\u0002\u0002\u0002<8\u0003\u0002\u0002",
    "\u0002<:\u0003\u0002\u0002\u0002<;\u0003\u0002\u0002\u0002=\u000b\u0003",
    "\u0002\u0002\u0002>F\u0005\u000e\b\u0002?F\u0005\u0012\n\u0002@F\u0005",
    "\u0010\t\u0002AB\u0007\f\u0002\u0002BC\u0005\u0004\u0003\u0002CD\u0007",
    "\r\u0002\u0002DF\u0003\u0002\u0002\u0002E>\u0003\u0002\u0002\u0002E",
    "?\u0003\u0002\u0002\u0002E@\u0003\u0002\u0002\u0002EA\u0003\u0002\u0002",
    "\u0002F\r\u0003\u0002\u0002\u0002GH\u0007\u001c\u0002\u0002H\u000f\u0003",
    "\u0002\u0002\u0002IJ\t\u0004\u0002\u0002J\u0011\u0003\u0002\u0002\u0002",
    "KL\u0007\u001b\u0002\u0002L\u0013\u0003\u0002\u0002\u0002MN\u0005\u0016",
    "\f\u0002NO\u0007\f\u0002\u0002OT\u0005\u0004\u0003\u0002PQ\u0007\u0015",
    "\u0002\u0002QS\u0005\u0004\u0003\u0002RP\u0003\u0002\u0002\u0002SV\u0003",
    "\u0002\u0002\u0002TR\u0003\u0002\u0002\u0002TU\u0003\u0002\u0002\u0002",
    "UW\u0003\u0002\u0002\u0002VT\u0003\u0002\u0002\u0002WX\u0007\r\u0002",
    "\u0002X\u0015\u0003\u0002\u0002\u0002YZ\t\u0005\u0002\u0002Z\u0017\u0003",
    "\u0002\u0002\u0002[\\\t\u0006\u0002\u0002\\\u0019\u0003\u0002\u0002",
    "\u0002\b#+3<ET"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'cos'", "'sin'", "'tan'", "'acos'", "'asin'", 
                     "'atan'", "'ln'", "'log'", "'sqrt'", "'('", "')'", 
                     "'+'", "'-'", "'*'", "'/'", "'>'", "'<'", "'='", "','", 
                     "'.'", "'^'", "'pi'", null, "'i'" ];

var symbolicNames = [ null, "COS", "SIN", "TAN", "ACOS", "ASIN", "ATAN", 
                      "LN", "LOG", "SQRT", "LPAREN", "RPAREN", "PLUS", "MINUS", 
                      "TIMES", "DIV", "GT", "LT", "EQ", "COMMA", "POINT", 
                      "POW", "PI", "EULER", "I", "VARIABLE", "SCIENTIFIC_NUMBER", 
                      "WS" ];

var ruleNames =  [ "equation", "expression", "multiplyingExpression", "powExpression", 
                   "signedAtom", "atom", "scientific", "constant", "variable", 
                   "func", "funcname", "relop" ];

function calculatorParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

calculatorParser.prototype = Object.create(antlr4.Parser.prototype);
calculatorParser.prototype.constructor = calculatorParser;

Object.defineProperty(calculatorParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

calculatorParser.EOF = antlr4.Token.EOF;
calculatorParser.COS = 1;
calculatorParser.SIN = 2;
calculatorParser.TAN = 3;
calculatorParser.ACOS = 4;
calculatorParser.ASIN = 5;
calculatorParser.ATAN = 6;
calculatorParser.LN = 7;
calculatorParser.LOG = 8;
calculatorParser.SQRT = 9;
calculatorParser.LPAREN = 10;
calculatorParser.RPAREN = 11;
calculatorParser.PLUS = 12;
calculatorParser.MINUS = 13;
calculatorParser.TIMES = 14;
calculatorParser.DIV = 15;
calculatorParser.GT = 16;
calculatorParser.LT = 17;
calculatorParser.EQ = 18;
calculatorParser.COMMA = 19;
calculatorParser.POINT = 20;
calculatorParser.POW = 21;
calculatorParser.PI = 22;
calculatorParser.EULER = 23;
calculatorParser.I = 24;
calculatorParser.VARIABLE = 25;
calculatorParser.SCIENTIFIC_NUMBER = 26;
calculatorParser.WS = 27;

calculatorParser.RULE_equation = 0;
calculatorParser.RULE_expression = 1;
calculatorParser.RULE_multiplyingExpression = 2;
calculatorParser.RULE_powExpression = 3;
calculatorParser.RULE_signedAtom = 4;
calculatorParser.RULE_atom = 5;
calculatorParser.RULE_scientific = 6;
calculatorParser.RULE_constant = 7;
calculatorParser.RULE_variable = 8;
calculatorParser.RULE_func = 9;
calculatorParser.RULE_funcname = 10;
calculatorParser.RULE_relop = 11;

function EquationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = calculatorParser.RULE_equation;
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
    if(listener instanceof calculatorListener ) {
        listener.enterEquation(this);
	}
};

EquationContext.prototype.exitRule = function(listener) {
    if(listener instanceof calculatorListener ) {
        listener.exitEquation(this);
	}
};

EquationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof calculatorVisitor ) {
        return visitor.visitEquation(this);
    } else {
        return visitor.visitChildren(this);
    }
};




calculatorParser.EquationContext = EquationContext;

calculatorParser.prototype.equation = function() {

    var localctx = new EquationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, calculatorParser.RULE_equation);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 24;
        this.expression();
        this.state = 25;
        this.relop();
        this.state = 26;
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
    this.ruleIndex = calculatorParser.RULE_expression;
    return this;
}

ExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionContext.prototype.constructor = ExpressionContext;

ExpressionContext.prototype.multiplyingExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(MultiplyingExpressionContext);
    } else {
        return this.getTypedRuleContext(MultiplyingExpressionContext,i);
    }
};

ExpressionContext.prototype.PLUS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(calculatorParser.PLUS);
    } else {
        return this.getToken(calculatorParser.PLUS, i);
    }
};


ExpressionContext.prototype.MINUS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(calculatorParser.MINUS);
    } else {
        return this.getToken(calculatorParser.MINUS, i);
    }
};


ExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof calculatorListener ) {
        listener.enterExpression(this);
	}
};

ExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof calculatorListener ) {
        listener.exitExpression(this);
	}
};

ExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof calculatorVisitor ) {
        return visitor.visitExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};




calculatorParser.ExpressionContext = ExpressionContext;

calculatorParser.prototype.expression = function() {

    var localctx = new ExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, calculatorParser.RULE_expression);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 28;
        this.multiplyingExpression();
        this.state = 33;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===calculatorParser.PLUS || _la===calculatorParser.MINUS) {
            this.state = 29;
            _la = this._input.LA(1);
            if(!(_la===calculatorParser.PLUS || _la===calculatorParser.MINUS)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 30;
            this.multiplyingExpression();
            this.state = 35;
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

function MultiplyingExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = calculatorParser.RULE_multiplyingExpression;
    return this;
}

MultiplyingExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MultiplyingExpressionContext.prototype.constructor = MultiplyingExpressionContext;

MultiplyingExpressionContext.prototype.powExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(PowExpressionContext);
    } else {
        return this.getTypedRuleContext(PowExpressionContext,i);
    }
};

MultiplyingExpressionContext.prototype.TIMES = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(calculatorParser.TIMES);
    } else {
        return this.getToken(calculatorParser.TIMES, i);
    }
};


MultiplyingExpressionContext.prototype.DIV = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(calculatorParser.DIV);
    } else {
        return this.getToken(calculatorParser.DIV, i);
    }
};


MultiplyingExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof calculatorListener ) {
        listener.enterMultiplyingExpression(this);
	}
};

MultiplyingExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof calculatorListener ) {
        listener.exitMultiplyingExpression(this);
	}
};

MultiplyingExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof calculatorVisitor ) {
        return visitor.visitMultiplyingExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};




calculatorParser.MultiplyingExpressionContext = MultiplyingExpressionContext;

calculatorParser.prototype.multiplyingExpression = function() {

    var localctx = new MultiplyingExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, calculatorParser.RULE_multiplyingExpression);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 36;
        this.powExpression();
        this.state = 41;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===calculatorParser.TIMES || _la===calculatorParser.DIV) {
            this.state = 37;
            _la = this._input.LA(1);
            if(!(_la===calculatorParser.TIMES || _la===calculatorParser.DIV)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 38;
            this.powExpression();
            this.state = 43;
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

function PowExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = calculatorParser.RULE_powExpression;
    return this;
}

PowExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PowExpressionContext.prototype.constructor = PowExpressionContext;

PowExpressionContext.prototype.signedAtom = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SignedAtomContext);
    } else {
        return this.getTypedRuleContext(SignedAtomContext,i);
    }
};

PowExpressionContext.prototype.POW = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(calculatorParser.POW);
    } else {
        return this.getToken(calculatorParser.POW, i);
    }
};


PowExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof calculatorListener ) {
        listener.enterPowExpression(this);
	}
};

PowExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof calculatorListener ) {
        listener.exitPowExpression(this);
	}
};

PowExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof calculatorVisitor ) {
        return visitor.visitPowExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};




calculatorParser.PowExpressionContext = PowExpressionContext;

calculatorParser.prototype.powExpression = function() {

    var localctx = new PowExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, calculatorParser.RULE_powExpression);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 44;
        this.signedAtom();
        this.state = 49;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===calculatorParser.POW) {
            this.state = 45;
            this.match(calculatorParser.POW);
            this.state = 46;
            this.signedAtom();
            this.state = 51;
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
    this.ruleIndex = calculatorParser.RULE_signedAtom;
    return this;
}

SignedAtomContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SignedAtomContext.prototype.constructor = SignedAtomContext;

SignedAtomContext.prototype.PLUS = function() {
    return this.getToken(calculatorParser.PLUS, 0);
};

SignedAtomContext.prototype.signedAtom = function() {
    return this.getTypedRuleContext(SignedAtomContext,0);
};

SignedAtomContext.prototype.MINUS = function() {
    return this.getToken(calculatorParser.MINUS, 0);
};

SignedAtomContext.prototype.func = function() {
    return this.getTypedRuleContext(FuncContext,0);
};

SignedAtomContext.prototype.atom = function() {
    return this.getTypedRuleContext(AtomContext,0);
};

SignedAtomContext.prototype.enterRule = function(listener) {
    if(listener instanceof calculatorListener ) {
        listener.enterSignedAtom(this);
	}
};

SignedAtomContext.prototype.exitRule = function(listener) {
    if(listener instanceof calculatorListener ) {
        listener.exitSignedAtom(this);
	}
};

SignedAtomContext.prototype.accept = function(visitor) {
    if ( visitor instanceof calculatorVisitor ) {
        return visitor.visitSignedAtom(this);
    } else {
        return visitor.visitChildren(this);
    }
};




calculatorParser.SignedAtomContext = SignedAtomContext;

calculatorParser.prototype.signedAtom = function() {

    var localctx = new SignedAtomContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, calculatorParser.RULE_signedAtom);
    try {
        this.state = 58;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case calculatorParser.PLUS:
            this.enterOuterAlt(localctx, 1);
            this.state = 52;
            this.match(calculatorParser.PLUS);
            this.state = 53;
            this.signedAtom();
            break;
        case calculatorParser.MINUS:
            this.enterOuterAlt(localctx, 2);
            this.state = 54;
            this.match(calculatorParser.MINUS);
            this.state = 55;
            this.signedAtom();
            break;
        case calculatorParser.COS:
        case calculatorParser.SIN:
        case calculatorParser.TAN:
        case calculatorParser.ACOS:
        case calculatorParser.ASIN:
        case calculatorParser.ATAN:
        case calculatorParser.LN:
        case calculatorParser.LOG:
        case calculatorParser.SQRT:
            this.enterOuterAlt(localctx, 3);
            this.state = 56;
            this.func();
            break;
        case calculatorParser.LPAREN:
        case calculatorParser.PI:
        case calculatorParser.EULER:
        case calculatorParser.I:
        case calculatorParser.VARIABLE:
        case calculatorParser.SCIENTIFIC_NUMBER:
            this.enterOuterAlt(localctx, 4);
            this.state = 57;
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
    this.ruleIndex = calculatorParser.RULE_atom;
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

AtomContext.prototype.constant = function() {
    return this.getTypedRuleContext(ConstantContext,0);
};

AtomContext.prototype.LPAREN = function() {
    return this.getToken(calculatorParser.LPAREN, 0);
};

AtomContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

AtomContext.prototype.RPAREN = function() {
    return this.getToken(calculatorParser.RPAREN, 0);
};

AtomContext.prototype.enterRule = function(listener) {
    if(listener instanceof calculatorListener ) {
        listener.enterAtom(this);
	}
};

AtomContext.prototype.exitRule = function(listener) {
    if(listener instanceof calculatorListener ) {
        listener.exitAtom(this);
	}
};

AtomContext.prototype.accept = function(visitor) {
    if ( visitor instanceof calculatorVisitor ) {
        return visitor.visitAtom(this);
    } else {
        return visitor.visitChildren(this);
    }
};




calculatorParser.AtomContext = AtomContext;

calculatorParser.prototype.atom = function() {

    var localctx = new AtomContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, calculatorParser.RULE_atom);
    try {
        this.state = 67;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case calculatorParser.SCIENTIFIC_NUMBER:
            this.enterOuterAlt(localctx, 1);
            this.state = 60;
            this.scientific();
            break;
        case calculatorParser.VARIABLE:
            this.enterOuterAlt(localctx, 2);
            this.state = 61;
            this.variable();
            break;
        case calculatorParser.PI:
        case calculatorParser.EULER:
        case calculatorParser.I:
            this.enterOuterAlt(localctx, 3);
            this.state = 62;
            this.constant();
            break;
        case calculatorParser.LPAREN:
            this.enterOuterAlt(localctx, 4);
            this.state = 63;
            this.match(calculatorParser.LPAREN);
            this.state = 64;
            this.expression();
            this.state = 65;
            this.match(calculatorParser.RPAREN);
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
    this.ruleIndex = calculatorParser.RULE_scientific;
    return this;
}

ScientificContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ScientificContext.prototype.constructor = ScientificContext;

ScientificContext.prototype.SCIENTIFIC_NUMBER = function() {
    return this.getToken(calculatorParser.SCIENTIFIC_NUMBER, 0);
};

ScientificContext.prototype.enterRule = function(listener) {
    if(listener instanceof calculatorListener ) {
        listener.enterScientific(this);
	}
};

ScientificContext.prototype.exitRule = function(listener) {
    if(listener instanceof calculatorListener ) {
        listener.exitScientific(this);
	}
};

ScientificContext.prototype.accept = function(visitor) {
    if ( visitor instanceof calculatorVisitor ) {
        return visitor.visitScientific(this);
    } else {
        return visitor.visitChildren(this);
    }
};




calculatorParser.ScientificContext = ScientificContext;

calculatorParser.prototype.scientific = function() {

    var localctx = new ScientificContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, calculatorParser.RULE_scientific);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 69;
        this.match(calculatorParser.SCIENTIFIC_NUMBER);
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

function ConstantContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = calculatorParser.RULE_constant;
    return this;
}

ConstantContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConstantContext.prototype.constructor = ConstantContext;

ConstantContext.prototype.PI = function() {
    return this.getToken(calculatorParser.PI, 0);
};

ConstantContext.prototype.EULER = function() {
    return this.getToken(calculatorParser.EULER, 0);
};

ConstantContext.prototype.I = function() {
    return this.getToken(calculatorParser.I, 0);
};

ConstantContext.prototype.enterRule = function(listener) {
    if(listener instanceof calculatorListener ) {
        listener.enterConstant(this);
	}
};

ConstantContext.prototype.exitRule = function(listener) {
    if(listener instanceof calculatorListener ) {
        listener.exitConstant(this);
	}
};

ConstantContext.prototype.accept = function(visitor) {
    if ( visitor instanceof calculatorVisitor ) {
        return visitor.visitConstant(this);
    } else {
        return visitor.visitChildren(this);
    }
};




calculatorParser.ConstantContext = ConstantContext;

calculatorParser.prototype.constant = function() {

    var localctx = new ConstantContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, calculatorParser.RULE_constant);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 71;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << calculatorParser.PI) | (1 << calculatorParser.EULER) | (1 << calculatorParser.I))) !== 0))) {
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

function VariableContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = calculatorParser.RULE_variable;
    return this;
}

VariableContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VariableContext.prototype.constructor = VariableContext;

VariableContext.prototype.VARIABLE = function() {
    return this.getToken(calculatorParser.VARIABLE, 0);
};

VariableContext.prototype.enterRule = function(listener) {
    if(listener instanceof calculatorListener ) {
        listener.enterVariable(this);
	}
};

VariableContext.prototype.exitRule = function(listener) {
    if(listener instanceof calculatorListener ) {
        listener.exitVariable(this);
	}
};

VariableContext.prototype.accept = function(visitor) {
    if ( visitor instanceof calculatorVisitor ) {
        return visitor.visitVariable(this);
    } else {
        return visitor.visitChildren(this);
    }
};




calculatorParser.VariableContext = VariableContext;

calculatorParser.prototype.variable = function() {

    var localctx = new VariableContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, calculatorParser.RULE_variable);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 73;
        this.match(calculatorParser.VARIABLE);
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

function FuncContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = calculatorParser.RULE_func;
    return this;
}

FuncContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FuncContext.prototype.constructor = FuncContext;

FuncContext.prototype.funcname = function() {
    return this.getTypedRuleContext(FuncnameContext,0);
};

FuncContext.prototype.LPAREN = function() {
    return this.getToken(calculatorParser.LPAREN, 0);
};

FuncContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

FuncContext.prototype.RPAREN = function() {
    return this.getToken(calculatorParser.RPAREN, 0);
};

FuncContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(calculatorParser.COMMA);
    } else {
        return this.getToken(calculatorParser.COMMA, i);
    }
};


FuncContext.prototype.enterRule = function(listener) {
    if(listener instanceof calculatorListener ) {
        listener.enterFunc(this);
	}
};

FuncContext.prototype.exitRule = function(listener) {
    if(listener instanceof calculatorListener ) {
        listener.exitFunc(this);
	}
};

FuncContext.prototype.accept = function(visitor) {
    if ( visitor instanceof calculatorVisitor ) {
        return visitor.visitFunc(this);
    } else {
        return visitor.visitChildren(this);
    }
};




calculatorParser.FuncContext = FuncContext;

calculatorParser.prototype.func = function() {

    var localctx = new FuncContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, calculatorParser.RULE_func);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 75;
        this.funcname();
        this.state = 76;
        this.match(calculatorParser.LPAREN);
        this.state = 77;
        this.expression();
        this.state = 82;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===calculatorParser.COMMA) {
            this.state = 78;
            this.match(calculatorParser.COMMA);
            this.state = 79;
            this.expression();
            this.state = 84;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 85;
        this.match(calculatorParser.RPAREN);
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

function FuncnameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = calculatorParser.RULE_funcname;
    return this;
}

FuncnameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FuncnameContext.prototype.constructor = FuncnameContext;

FuncnameContext.prototype.COS = function() {
    return this.getToken(calculatorParser.COS, 0);
};

FuncnameContext.prototype.TAN = function() {
    return this.getToken(calculatorParser.TAN, 0);
};

FuncnameContext.prototype.SIN = function() {
    return this.getToken(calculatorParser.SIN, 0);
};

FuncnameContext.prototype.ACOS = function() {
    return this.getToken(calculatorParser.ACOS, 0);
};

FuncnameContext.prototype.ATAN = function() {
    return this.getToken(calculatorParser.ATAN, 0);
};

FuncnameContext.prototype.ASIN = function() {
    return this.getToken(calculatorParser.ASIN, 0);
};

FuncnameContext.prototype.LOG = function() {
    return this.getToken(calculatorParser.LOG, 0);
};

FuncnameContext.prototype.LN = function() {
    return this.getToken(calculatorParser.LN, 0);
};

FuncnameContext.prototype.SQRT = function() {
    return this.getToken(calculatorParser.SQRT, 0);
};

FuncnameContext.prototype.enterRule = function(listener) {
    if(listener instanceof calculatorListener ) {
        listener.enterFuncname(this);
	}
};

FuncnameContext.prototype.exitRule = function(listener) {
    if(listener instanceof calculatorListener ) {
        listener.exitFuncname(this);
	}
};

FuncnameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof calculatorVisitor ) {
        return visitor.visitFuncname(this);
    } else {
        return visitor.visitChildren(this);
    }
};




calculatorParser.FuncnameContext = FuncnameContext;

calculatorParser.prototype.funcname = function() {

    var localctx = new FuncnameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, calculatorParser.RULE_funcname);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 87;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << calculatorParser.COS) | (1 << calculatorParser.SIN) | (1 << calculatorParser.TAN) | (1 << calculatorParser.ACOS) | (1 << calculatorParser.ASIN) | (1 << calculatorParser.ATAN) | (1 << calculatorParser.LN) | (1 << calculatorParser.LOG) | (1 << calculatorParser.SQRT))) !== 0))) {
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

function RelopContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = calculatorParser.RULE_relop;
    return this;
}

RelopContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RelopContext.prototype.constructor = RelopContext;

RelopContext.prototype.EQ = function() {
    return this.getToken(calculatorParser.EQ, 0);
};

RelopContext.prototype.GT = function() {
    return this.getToken(calculatorParser.GT, 0);
};

RelopContext.prototype.LT = function() {
    return this.getToken(calculatorParser.LT, 0);
};

RelopContext.prototype.enterRule = function(listener) {
    if(listener instanceof calculatorListener ) {
        listener.enterRelop(this);
	}
};

RelopContext.prototype.exitRule = function(listener) {
    if(listener instanceof calculatorListener ) {
        listener.exitRelop(this);
	}
};

RelopContext.prototype.accept = function(visitor) {
    if ( visitor instanceof calculatorVisitor ) {
        return visitor.visitRelop(this);
    } else {
        return visitor.visitChildren(this);
    }
};




calculatorParser.RelopContext = RelopContext;

calculatorParser.prototype.relop = function() {

    var localctx = new RelopContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, calculatorParser.RULE_relop);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 89;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << calculatorParser.GT) | (1 << calculatorParser.LT) | (1 << calculatorParser.EQ))) !== 0))) {
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


exports.calculatorParser = calculatorParser;
