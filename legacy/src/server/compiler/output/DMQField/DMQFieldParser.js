// Generated from C:\git-seaquail.visualstudio.com\AntlrEditor\src\server\compiler\output\DMQField\DMQField.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var DMQFieldListener = require('./DMQFieldListener').DMQFieldListener;
var DMQFieldVisitor = require('./DMQFieldVisitor').DMQFieldVisitor;

var grammarFileName = "DMQField.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u000e}\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0003\u0002\u0006",
    "\u0002(\n\u0002\r\u0002\u000e\u0002)\u0003\u0002\u0005\u0002-\n\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004",
    "\u0003\u0004\u0005\u00046\n\u0004\u0003\u0004\u0003\u0004\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0007\u0005>\n\u0005\f\u0005\u000e",
    "\u0005A\u000b\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0005\u0006",
    "F\n\u0006\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\t\u0003\t\u0005\tP\n\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0005",
    "\nW\n\n\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0005\f]\n\f\u0003\r",
    "\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0005",
    "\u0010l\n\u0010\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003",
    "\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0007\u0013v\n\u0013\f\u0013",
    "\u000e\u0013y\u000b\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0002",
    "\u0002\u0014\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018",
    "\u001a\u001c\u001e \"$\u0002\u0002\u0002u\u0002\'\u0003\u0002\u0002",
    "\u0002\u00040\u0003\u0002\u0002\u0002\u00063\u0003\u0002\u0002\u0002",
    "\b9\u0003\u0002\u0002\u0002\nE\u0003\u0002\u0002\u0002\fG\u0003\u0002",
    "\u0002\u0002\u000eI\u0003\u0002\u0002\u0002\u0010O\u0003\u0002\u0002",
    "\u0002\u0012V\u0003\u0002\u0002\u0002\u0014X\u0003\u0002\u0002\u0002",
    "\u0016\\\u0003\u0002\u0002\u0002\u0018^\u0003\u0002\u0002\u0002\u001a",
    "a\u0003\u0002\u0002\u0002\u001cc\u0003\u0002\u0002\u0002\u001ek\u0003",
    "\u0002\u0002\u0002 m\u0003\u0002\u0002\u0002\"o\u0003\u0002\u0002\u0002",
    "$q\u0003\u0002\u0002\u0002&(\u000b\u0002\u0002\u0002\'&\u0003\u0002",
    "\u0002\u0002()\u0003\u0002\u0002\u0002)\'\u0003\u0002\u0002\u0002)*",
    "\u0003\u0002\u0002\u0002*,\u0003\u0002\u0002\u0002+-\u0005\u0004\u0003",
    "\u0002,+\u0003\u0002\u0002\u0002,-\u0003\u0002\u0002\u0002-.\u0003\u0002",
    "\u0002\u0002./\u0007\u0002\u0002\u0003/\u0003\u0003\u0002\u0002\u0002",
    "01\u0007\b\u0002\u000212\u0005\u0016\f\u00022\u0005\u0003\u0002\u0002",
    "\u000235\u0005\b\u0005\u000246\u0005\u0004\u0003\u000254\u0003\u0002",
    "\u0002\u000256\u0003\u0002\u0002\u000267\u0003\u0002\u0002\u000278\u0007",
    "\u0002\u0002\u00038\u0007\u0003\u0002\u0002\u00029?\u0005\n\u0006\u0002",
    ":;\u0005\f\u0007\u0002;<\u0005\n\u0006\u0002<>\u0003\u0002\u0002\u0002",
    "=:\u0003\u0002\u0002\u0002>A\u0003\u0002\u0002\u0002?=\u0003\u0002\u0002",
    "\u0002?@\u0003\u0002\u0002\u0002@\t\u0003\u0002\u0002\u0002A?\u0003",
    "\u0002\u0002\u0002BF\u0005\u000e\b\u0002CF\u0005\u0010\t\u0002DF\u0005",
    "\u0018\r\u0002EB\u0003\u0002\u0002\u0002EC\u0003\u0002\u0002\u0002E",
    "D\u0003\u0002\u0002\u0002F\u000b\u0003\u0002\u0002\u0002GH\u0007\r\u0002",
    "\u0002H\r\u0003\u0002\u0002\u0002IJ\u0007\u000b\u0002\u0002JK\u0005",
    "\b\u0005\u0002KL\u0007\f\u0002\u0002L\u000f\u0003\u0002\u0002\u0002",
    "MP\u0005\u0012\n\u0002NP\u0005\u001e\u0010\u0002OM\u0003\u0002\u0002",
    "\u0002ON\u0003\u0002\u0002\u0002P\u0011\u0003\u0002\u0002\u0002QR\u0005",
    "\u0014\u000b\u0002RS\u0007\u0005\u0002\u0002ST\u0005\u0012\n\u0002T",
    "W\u0003\u0002\u0002\u0002UW\u0005\u0016\f\u0002VQ\u0003\u0002\u0002",
    "\u0002VU\u0003\u0002\u0002\u0002W\u0013\u0003\u0002\u0002\u0002XY\u0005",
    "\u0016\f\u0002Y\u0015\u0003\u0002\u0002\u0002Z]\u0005\u001c\u000f\u0002",
    "[]\u0005\u001a\u000e\u0002\\Z\u0003\u0002\u0002\u0002\\[\u0003\u0002",
    "\u0002\u0002]\u0017\u0003\u0002\u0002\u0002^_\u0007\u0003\u0002\u0002",
    "_`\u0007\u0006\u0002\u0002`\u0019\u0003\u0002\u0002\u0002ab\u0007\u0006",
    "\u0002\u0002b\u001b\u0003\u0002\u0002\u0002cd\u0007\u0007\u0002\u0002",
    "d\u001d\u0003\u0002\u0002\u0002ef\u0005 \u0011\u0002fg\u0005\"\u0012",
    "\u0002gl\u0003\u0002\u0002\u0002hi\u0005 \u0011\u0002ij\u0005$\u0013",
    "\u0002jl\u0003\u0002\u0002\u0002ke\u0003\u0002\u0002\u0002kh\u0003\u0002",
    "\u0002\u0002l\u001f\u0003\u0002\u0002\u0002mn\u0007\u0006\u0002\u0002",
    "n!\u0003\u0002\u0002\u0002op\u0005\u0010\t\u0002p#\u0003\u0002\u0002",
    "\u0002qr\u0007\u000b\u0002\u0002rw\u0005\b\u0005\u0002st\u0007\u0004",
    "\u0002\u0002tv\u0005\b\u0005\u0002us\u0003\u0002\u0002\u0002vy\u0003",
    "\u0002\u0002\u0002wu\u0003\u0002\u0002\u0002wx\u0003\u0002\u0002\u0002",
    "xz\u0003\u0002\u0002\u0002yw\u0003\u0002\u0002\u0002z{\u0007\f\u0002",
    "\u0002{%\u0003\u0002\u0002\u0002\f),5?EOV\\kw"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'@'", "','", "'.'", null, null, null, "'['", 
                     "']'", "'('", "')'" ];

var symbolicNames = [ null, "ATPERSAND", "COMMA", "DOT", "SAFENAME", "ANYNAME", 
                      "AS", "LSQBRACKET", "RSQBRACKET", "LPAREN", "RPAREN", 
                      "OPERATOR", "WS" ];

var ruleNames =  [ "aliasedExpr", "alias", "expr", "fieldOperation", "fieldModifier", 
                   "fieldOperator", "fieldExpressionGroup", "fieldExpression", 
                   "fieldChain", "fieldChainLink", "fieldName", "variable", 
                   "safeFieldName", "escapedFieldName", "functionCall", 
                   "functionName", "singleParameter", "parameterList" ];

function DMQFieldParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

DMQFieldParser.prototype = Object.create(antlr4.Parser.prototype);
DMQFieldParser.prototype.constructor = DMQFieldParser;

Object.defineProperty(DMQFieldParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

DMQFieldParser.EOF = antlr4.Token.EOF;
DMQFieldParser.ATPERSAND = 1;
DMQFieldParser.COMMA = 2;
DMQFieldParser.DOT = 3;
DMQFieldParser.SAFENAME = 4;
DMQFieldParser.ANYNAME = 5;
DMQFieldParser.AS = 6;
DMQFieldParser.LSQBRACKET = 7;
DMQFieldParser.RSQBRACKET = 8;
DMQFieldParser.LPAREN = 9;
DMQFieldParser.RPAREN = 10;
DMQFieldParser.OPERATOR = 11;
DMQFieldParser.WS = 12;

DMQFieldParser.RULE_aliasedExpr = 0;
DMQFieldParser.RULE_alias = 1;
DMQFieldParser.RULE_expr = 2;
DMQFieldParser.RULE_fieldOperation = 3;
DMQFieldParser.RULE_fieldModifier = 4;
DMQFieldParser.RULE_fieldOperator = 5;
DMQFieldParser.RULE_fieldExpressionGroup = 6;
DMQFieldParser.RULE_fieldExpression = 7;
DMQFieldParser.RULE_fieldChain = 8;
DMQFieldParser.RULE_fieldChainLink = 9;
DMQFieldParser.RULE_fieldName = 10;
DMQFieldParser.RULE_variable = 11;
DMQFieldParser.RULE_safeFieldName = 12;
DMQFieldParser.RULE_escapedFieldName = 13;
DMQFieldParser.RULE_functionCall = 14;
DMQFieldParser.RULE_functionName = 15;
DMQFieldParser.RULE_singleParameter = 16;
DMQFieldParser.RULE_parameterList = 17;

function AliasedExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DMQFieldParser.RULE_aliasedExpr;
    return this;
}

AliasedExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AliasedExprContext.prototype.constructor = AliasedExprContext;

AliasedExprContext.prototype.EOF = function() {
    return this.getToken(DMQFieldParser.EOF, 0);
};

AliasedExprContext.prototype.alias = function() {
    return this.getTypedRuleContext(AliasContext,0);
};

AliasedExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof DMQFieldListener ) {
        listener.enterAliasedExpr(this);
	}
};

AliasedExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof DMQFieldListener ) {
        listener.exitAliasedExpr(this);
	}
};

AliasedExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DMQFieldVisitor ) {
        return visitor.visitAliasedExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DMQFieldParser.AliasedExprContext = AliasedExprContext;

DMQFieldParser.prototype.aliasedExpr = function() {

    var localctx = new AliasedExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, DMQFieldParser.RULE_aliasedExpr);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 37; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 36;
        		this.matchWildcard();
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 39; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,0, this._ctx);
        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
        this.state = 42;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===DMQFieldParser.AS) {
            this.state = 41;
            this.alias();
        }

        this.state = 44;
        this.match(DMQFieldParser.EOF);
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

function AliasContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DMQFieldParser.RULE_alias;
    return this;
}

AliasContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AliasContext.prototype.constructor = AliasContext;

AliasContext.prototype.AS = function() {
    return this.getToken(DMQFieldParser.AS, 0);
};

AliasContext.prototype.fieldName = function() {
    return this.getTypedRuleContext(FieldNameContext,0);
};

AliasContext.prototype.enterRule = function(listener) {
    if(listener instanceof DMQFieldListener ) {
        listener.enterAlias(this);
	}
};

AliasContext.prototype.exitRule = function(listener) {
    if(listener instanceof DMQFieldListener ) {
        listener.exitAlias(this);
	}
};

AliasContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DMQFieldVisitor ) {
        return visitor.visitAlias(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DMQFieldParser.AliasContext = AliasContext;

DMQFieldParser.prototype.alias = function() {

    var localctx = new AliasContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, DMQFieldParser.RULE_alias);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 46;
        this.match(DMQFieldParser.AS);
        this.state = 47;
        this.fieldName();
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

function ExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DMQFieldParser.RULE_expr;
    return this;
}

ExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprContext.prototype.constructor = ExprContext;

ExprContext.prototype.fieldOperation = function() {
    return this.getTypedRuleContext(FieldOperationContext,0);
};

ExprContext.prototype.EOF = function() {
    return this.getToken(DMQFieldParser.EOF, 0);
};

ExprContext.prototype.alias = function() {
    return this.getTypedRuleContext(AliasContext,0);
};

ExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof DMQFieldListener ) {
        listener.enterExpr(this);
	}
};

ExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof DMQFieldListener ) {
        listener.exitExpr(this);
	}
};

ExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DMQFieldVisitor ) {
        return visitor.visitExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DMQFieldParser.ExprContext = ExprContext;

DMQFieldParser.prototype.expr = function() {

    var localctx = new ExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, DMQFieldParser.RULE_expr);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 49;
        this.fieldOperation();
        this.state = 51;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===DMQFieldParser.AS) {
            this.state = 50;
            this.alias();
        }

        this.state = 53;
        this.match(DMQFieldParser.EOF);
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

function FieldOperationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DMQFieldParser.RULE_fieldOperation;
    return this;
}

FieldOperationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FieldOperationContext.prototype.constructor = FieldOperationContext;

FieldOperationContext.prototype.fieldModifier = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FieldModifierContext);
    } else {
        return this.getTypedRuleContext(FieldModifierContext,i);
    }
};

FieldOperationContext.prototype.fieldOperator = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FieldOperatorContext);
    } else {
        return this.getTypedRuleContext(FieldOperatorContext,i);
    }
};

FieldOperationContext.prototype.enterRule = function(listener) {
    if(listener instanceof DMQFieldListener ) {
        listener.enterFieldOperation(this);
	}
};

FieldOperationContext.prototype.exitRule = function(listener) {
    if(listener instanceof DMQFieldListener ) {
        listener.exitFieldOperation(this);
	}
};

FieldOperationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DMQFieldVisitor ) {
        return visitor.visitFieldOperation(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DMQFieldParser.FieldOperationContext = FieldOperationContext;

DMQFieldParser.prototype.fieldOperation = function() {

    var localctx = new FieldOperationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, DMQFieldParser.RULE_fieldOperation);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 55;
        this.fieldModifier();
        this.state = 61;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===DMQFieldParser.OPERATOR) {
            this.state = 56;
            this.fieldOperator();
            this.state = 57;
            this.fieldModifier();
            this.state = 63;
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

function FieldModifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DMQFieldParser.RULE_fieldModifier;
    return this;
}

FieldModifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FieldModifierContext.prototype.constructor = FieldModifierContext;

FieldModifierContext.prototype.fieldExpressionGroup = function() {
    return this.getTypedRuleContext(FieldExpressionGroupContext,0);
};

FieldModifierContext.prototype.fieldExpression = function() {
    return this.getTypedRuleContext(FieldExpressionContext,0);
};

FieldModifierContext.prototype.variable = function() {
    return this.getTypedRuleContext(VariableContext,0);
};

FieldModifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof DMQFieldListener ) {
        listener.enterFieldModifier(this);
	}
};

FieldModifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof DMQFieldListener ) {
        listener.exitFieldModifier(this);
	}
};

FieldModifierContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DMQFieldVisitor ) {
        return visitor.visitFieldModifier(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DMQFieldParser.FieldModifierContext = FieldModifierContext;

DMQFieldParser.prototype.fieldModifier = function() {

    var localctx = new FieldModifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, DMQFieldParser.RULE_fieldModifier);
    try {
        this.state = 67;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case DMQFieldParser.LPAREN:
            this.enterOuterAlt(localctx, 1);
            this.state = 64;
            this.fieldExpressionGroup();
            break;
        case DMQFieldParser.SAFENAME:
        case DMQFieldParser.ANYNAME:
            this.enterOuterAlt(localctx, 2);
            this.state = 65;
            this.fieldExpression();
            break;
        case DMQFieldParser.ATPERSAND:
            this.enterOuterAlt(localctx, 3);
            this.state = 66;
            this.variable();
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

function FieldOperatorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DMQFieldParser.RULE_fieldOperator;
    return this;
}

FieldOperatorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FieldOperatorContext.prototype.constructor = FieldOperatorContext;

FieldOperatorContext.prototype.OPERATOR = function() {
    return this.getToken(DMQFieldParser.OPERATOR, 0);
};

FieldOperatorContext.prototype.enterRule = function(listener) {
    if(listener instanceof DMQFieldListener ) {
        listener.enterFieldOperator(this);
	}
};

FieldOperatorContext.prototype.exitRule = function(listener) {
    if(listener instanceof DMQFieldListener ) {
        listener.exitFieldOperator(this);
	}
};

FieldOperatorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DMQFieldVisitor ) {
        return visitor.visitFieldOperator(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DMQFieldParser.FieldOperatorContext = FieldOperatorContext;

DMQFieldParser.prototype.fieldOperator = function() {

    var localctx = new FieldOperatorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, DMQFieldParser.RULE_fieldOperator);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 69;
        this.match(DMQFieldParser.OPERATOR);
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

function FieldExpressionGroupContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DMQFieldParser.RULE_fieldExpressionGroup;
    return this;
}

FieldExpressionGroupContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FieldExpressionGroupContext.prototype.constructor = FieldExpressionGroupContext;

FieldExpressionGroupContext.prototype.LPAREN = function() {
    return this.getToken(DMQFieldParser.LPAREN, 0);
};

FieldExpressionGroupContext.prototype.fieldOperation = function() {
    return this.getTypedRuleContext(FieldOperationContext,0);
};

FieldExpressionGroupContext.prototype.RPAREN = function() {
    return this.getToken(DMQFieldParser.RPAREN, 0);
};

FieldExpressionGroupContext.prototype.enterRule = function(listener) {
    if(listener instanceof DMQFieldListener ) {
        listener.enterFieldExpressionGroup(this);
	}
};

FieldExpressionGroupContext.prototype.exitRule = function(listener) {
    if(listener instanceof DMQFieldListener ) {
        listener.exitFieldExpressionGroup(this);
	}
};

FieldExpressionGroupContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DMQFieldVisitor ) {
        return visitor.visitFieldExpressionGroup(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DMQFieldParser.FieldExpressionGroupContext = FieldExpressionGroupContext;

DMQFieldParser.prototype.fieldExpressionGroup = function() {

    var localctx = new FieldExpressionGroupContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, DMQFieldParser.RULE_fieldExpressionGroup);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 71;
        this.match(DMQFieldParser.LPAREN);
        this.state = 72;
        this.fieldOperation();
        this.state = 73;
        this.match(DMQFieldParser.RPAREN);
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

function FieldExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DMQFieldParser.RULE_fieldExpression;
    return this;
}

FieldExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FieldExpressionContext.prototype.constructor = FieldExpressionContext;

FieldExpressionContext.prototype.fieldChain = function() {
    return this.getTypedRuleContext(FieldChainContext,0);
};

FieldExpressionContext.prototype.functionCall = function() {
    return this.getTypedRuleContext(FunctionCallContext,0);
};

FieldExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof DMQFieldListener ) {
        listener.enterFieldExpression(this);
	}
};

FieldExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof DMQFieldListener ) {
        listener.exitFieldExpression(this);
	}
};

FieldExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DMQFieldVisitor ) {
        return visitor.visitFieldExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DMQFieldParser.FieldExpressionContext = FieldExpressionContext;

DMQFieldParser.prototype.fieldExpression = function() {

    var localctx = new FieldExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, DMQFieldParser.RULE_fieldExpression);
    try {
        this.state = 77;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 75;
            this.fieldChain();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 76;
            this.functionCall();
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

function FieldChainContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DMQFieldParser.RULE_fieldChain;
    return this;
}

FieldChainContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FieldChainContext.prototype.constructor = FieldChainContext;

FieldChainContext.prototype.fieldChainLink = function() {
    return this.getTypedRuleContext(FieldChainLinkContext,0);
};

FieldChainContext.prototype.DOT = function() {
    return this.getToken(DMQFieldParser.DOT, 0);
};

FieldChainContext.prototype.fieldChain = function() {
    return this.getTypedRuleContext(FieldChainContext,0);
};

FieldChainContext.prototype.fieldName = function() {
    return this.getTypedRuleContext(FieldNameContext,0);
};

FieldChainContext.prototype.enterRule = function(listener) {
    if(listener instanceof DMQFieldListener ) {
        listener.enterFieldChain(this);
	}
};

FieldChainContext.prototype.exitRule = function(listener) {
    if(listener instanceof DMQFieldListener ) {
        listener.exitFieldChain(this);
	}
};

FieldChainContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DMQFieldVisitor ) {
        return visitor.visitFieldChain(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DMQFieldParser.FieldChainContext = FieldChainContext;

DMQFieldParser.prototype.fieldChain = function() {

    var localctx = new FieldChainContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, DMQFieldParser.RULE_fieldChain);
    try {
        this.state = 84;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 79;
            this.fieldChainLink();
            this.state = 80;
            this.match(DMQFieldParser.DOT);
            this.state = 81;
            this.fieldChain();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 83;
            this.fieldName();
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

function FieldChainLinkContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DMQFieldParser.RULE_fieldChainLink;
    return this;
}

FieldChainLinkContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FieldChainLinkContext.prototype.constructor = FieldChainLinkContext;

FieldChainLinkContext.prototype.fieldName = function() {
    return this.getTypedRuleContext(FieldNameContext,0);
};

FieldChainLinkContext.prototype.enterRule = function(listener) {
    if(listener instanceof DMQFieldListener ) {
        listener.enterFieldChainLink(this);
	}
};

FieldChainLinkContext.prototype.exitRule = function(listener) {
    if(listener instanceof DMQFieldListener ) {
        listener.exitFieldChainLink(this);
	}
};

FieldChainLinkContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DMQFieldVisitor ) {
        return visitor.visitFieldChainLink(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DMQFieldParser.FieldChainLinkContext = FieldChainLinkContext;

DMQFieldParser.prototype.fieldChainLink = function() {

    var localctx = new FieldChainLinkContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, DMQFieldParser.RULE_fieldChainLink);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 86;
        this.fieldName();
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

function FieldNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DMQFieldParser.RULE_fieldName;
    return this;
}

FieldNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FieldNameContext.prototype.constructor = FieldNameContext;

FieldNameContext.prototype.escapedFieldName = function() {
    return this.getTypedRuleContext(EscapedFieldNameContext,0);
};

FieldNameContext.prototype.safeFieldName = function() {
    return this.getTypedRuleContext(SafeFieldNameContext,0);
};

FieldNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof DMQFieldListener ) {
        listener.enterFieldName(this);
	}
};

FieldNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof DMQFieldListener ) {
        listener.exitFieldName(this);
	}
};

FieldNameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DMQFieldVisitor ) {
        return visitor.visitFieldName(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DMQFieldParser.FieldNameContext = FieldNameContext;

DMQFieldParser.prototype.fieldName = function() {

    var localctx = new FieldNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, DMQFieldParser.RULE_fieldName);
    try {
        this.state = 90;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case DMQFieldParser.ANYNAME:
            this.enterOuterAlt(localctx, 1);
            this.state = 88;
            this.escapedFieldName();
            break;
        case DMQFieldParser.SAFENAME:
            this.enterOuterAlt(localctx, 2);
            this.state = 89;
            this.safeFieldName();
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

function VariableContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DMQFieldParser.RULE_variable;
    return this;
}

VariableContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VariableContext.prototype.constructor = VariableContext;

VariableContext.prototype.ATPERSAND = function() {
    return this.getToken(DMQFieldParser.ATPERSAND, 0);
};

VariableContext.prototype.SAFENAME = function() {
    return this.getToken(DMQFieldParser.SAFENAME, 0);
};

VariableContext.prototype.enterRule = function(listener) {
    if(listener instanceof DMQFieldListener ) {
        listener.enterVariable(this);
	}
};

VariableContext.prototype.exitRule = function(listener) {
    if(listener instanceof DMQFieldListener ) {
        listener.exitVariable(this);
	}
};

VariableContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DMQFieldVisitor ) {
        return visitor.visitVariable(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DMQFieldParser.VariableContext = VariableContext;

DMQFieldParser.prototype.variable = function() {

    var localctx = new VariableContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, DMQFieldParser.RULE_variable);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 92;
        this.match(DMQFieldParser.ATPERSAND);
        this.state = 93;
        this.match(DMQFieldParser.SAFENAME);
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

function SafeFieldNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DMQFieldParser.RULE_safeFieldName;
    return this;
}

SafeFieldNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SafeFieldNameContext.prototype.constructor = SafeFieldNameContext;

SafeFieldNameContext.prototype.SAFENAME = function() {
    return this.getToken(DMQFieldParser.SAFENAME, 0);
};

SafeFieldNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof DMQFieldListener ) {
        listener.enterSafeFieldName(this);
	}
};

SafeFieldNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof DMQFieldListener ) {
        listener.exitSafeFieldName(this);
	}
};

SafeFieldNameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DMQFieldVisitor ) {
        return visitor.visitSafeFieldName(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DMQFieldParser.SafeFieldNameContext = SafeFieldNameContext;

DMQFieldParser.prototype.safeFieldName = function() {

    var localctx = new SafeFieldNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, DMQFieldParser.RULE_safeFieldName);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 95;
        this.match(DMQFieldParser.SAFENAME);
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

function EscapedFieldNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DMQFieldParser.RULE_escapedFieldName;
    return this;
}

EscapedFieldNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EscapedFieldNameContext.prototype.constructor = EscapedFieldNameContext;

EscapedFieldNameContext.prototype.ANYNAME = function() {
    return this.getToken(DMQFieldParser.ANYNAME, 0);
};

EscapedFieldNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof DMQFieldListener ) {
        listener.enterEscapedFieldName(this);
	}
};

EscapedFieldNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof DMQFieldListener ) {
        listener.exitEscapedFieldName(this);
	}
};

EscapedFieldNameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DMQFieldVisitor ) {
        return visitor.visitEscapedFieldName(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DMQFieldParser.EscapedFieldNameContext = EscapedFieldNameContext;

DMQFieldParser.prototype.escapedFieldName = function() {

    var localctx = new EscapedFieldNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, DMQFieldParser.RULE_escapedFieldName);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 97;
        this.match(DMQFieldParser.ANYNAME);
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

function FunctionCallContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DMQFieldParser.RULE_functionCall;
    return this;
}

FunctionCallContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionCallContext.prototype.constructor = FunctionCallContext;

FunctionCallContext.prototype.functionName = function() {
    return this.getTypedRuleContext(FunctionNameContext,0);
};

FunctionCallContext.prototype.singleParameter = function() {
    return this.getTypedRuleContext(SingleParameterContext,0);
};

FunctionCallContext.prototype.parameterList = function() {
    return this.getTypedRuleContext(ParameterListContext,0);
};

FunctionCallContext.prototype.enterRule = function(listener) {
    if(listener instanceof DMQFieldListener ) {
        listener.enterFunctionCall(this);
	}
};

FunctionCallContext.prototype.exitRule = function(listener) {
    if(listener instanceof DMQFieldListener ) {
        listener.exitFunctionCall(this);
	}
};

FunctionCallContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DMQFieldVisitor ) {
        return visitor.visitFunctionCall(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DMQFieldParser.FunctionCallContext = FunctionCallContext;

DMQFieldParser.prototype.functionCall = function() {

    var localctx = new FunctionCallContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, DMQFieldParser.RULE_functionCall);
    try {
        this.state = 105;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 99;
            this.functionName();
            this.state = 100;
            this.singleParameter();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 102;
            this.functionName();
            this.state = 103;
            this.parameterList();
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

function FunctionNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DMQFieldParser.RULE_functionName;
    return this;
}

FunctionNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionNameContext.prototype.constructor = FunctionNameContext;

FunctionNameContext.prototype.SAFENAME = function() {
    return this.getToken(DMQFieldParser.SAFENAME, 0);
};

FunctionNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof DMQFieldListener ) {
        listener.enterFunctionName(this);
	}
};

FunctionNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof DMQFieldListener ) {
        listener.exitFunctionName(this);
	}
};

FunctionNameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DMQFieldVisitor ) {
        return visitor.visitFunctionName(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DMQFieldParser.FunctionNameContext = FunctionNameContext;

DMQFieldParser.prototype.functionName = function() {

    var localctx = new FunctionNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, DMQFieldParser.RULE_functionName);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 107;
        this.match(DMQFieldParser.SAFENAME);
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

function SingleParameterContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DMQFieldParser.RULE_singleParameter;
    return this;
}

SingleParameterContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SingleParameterContext.prototype.constructor = SingleParameterContext;

SingleParameterContext.prototype.fieldExpression = function() {
    return this.getTypedRuleContext(FieldExpressionContext,0);
};

SingleParameterContext.prototype.enterRule = function(listener) {
    if(listener instanceof DMQFieldListener ) {
        listener.enterSingleParameter(this);
	}
};

SingleParameterContext.prototype.exitRule = function(listener) {
    if(listener instanceof DMQFieldListener ) {
        listener.exitSingleParameter(this);
	}
};

SingleParameterContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DMQFieldVisitor ) {
        return visitor.visitSingleParameter(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DMQFieldParser.SingleParameterContext = SingleParameterContext;

DMQFieldParser.prototype.singleParameter = function() {

    var localctx = new SingleParameterContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, DMQFieldParser.RULE_singleParameter);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 109;
        this.fieldExpression();
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

function ParameterListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DMQFieldParser.RULE_parameterList;
    return this;
}

ParameterListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParameterListContext.prototype.constructor = ParameterListContext;

ParameterListContext.prototype.LPAREN = function() {
    return this.getToken(DMQFieldParser.LPAREN, 0);
};

ParameterListContext.prototype.fieldOperation = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FieldOperationContext);
    } else {
        return this.getTypedRuleContext(FieldOperationContext,i);
    }
};

ParameterListContext.prototype.RPAREN = function() {
    return this.getToken(DMQFieldParser.RPAREN, 0);
};

ParameterListContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(DMQFieldParser.COMMA);
    } else {
        return this.getToken(DMQFieldParser.COMMA, i);
    }
};


ParameterListContext.prototype.enterRule = function(listener) {
    if(listener instanceof DMQFieldListener ) {
        listener.enterParameterList(this);
	}
};

ParameterListContext.prototype.exitRule = function(listener) {
    if(listener instanceof DMQFieldListener ) {
        listener.exitParameterList(this);
	}
};

ParameterListContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DMQFieldVisitor ) {
        return visitor.visitParameterList(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DMQFieldParser.ParameterListContext = ParameterListContext;

DMQFieldParser.prototype.parameterList = function() {

    var localctx = new ParameterListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, DMQFieldParser.RULE_parameterList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 111;
        this.match(DMQFieldParser.LPAREN);
        this.state = 112;
        this.fieldOperation();
        this.state = 117;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===DMQFieldParser.COMMA) {
            this.state = 113;
            this.match(DMQFieldParser.COMMA);
            this.state = 114;
            this.fieldOperation();
            this.state = 119;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 120;
        this.match(DMQFieldParser.RPAREN);
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


exports.DMQFieldParser = DMQFieldParser;
