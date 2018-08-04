// Generated from C:\git-seaquail.visualstudio.com\AntlrEditor\src\server\compiler\output\FieldChanges\FieldChanges.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var FieldChangesListener = require('./FieldChangesListener').FieldChangesListener;
var FieldChangesVisitor = require('./FieldChangesVisitor').FieldChangesVisitor;

var grammarFileName = "FieldChanges.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\n<\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t\u0004",
    "\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004\b",
    "\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0004\u0006\u0004",
    "\u001e\n\u0004\r\u0004\u000e\u0004\u001f\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0006\u0005%\n\u0005\r\u0005\u000e\u0005&\u0003\u0006\u0003\u0006",
    "\u0003\u0007\u0006\u0007,\n\u0007\r\u0007\u000e\u0007-\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\n\u0003\n\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0002\u0002\f\u0002\u0004\u0006\b\n\f",
    "\u000e\u0010\u0012\u0014\u0002\u0003\u0003\u0002\u0003\u0004\u00024",
    "\u0002\u0016\u0003\u0002\u0002\u0002\u0004\u001a\u0003\u0002\u0002\u0002",
    "\u0006\u001d\u0003\u0002\u0002\u0002\b!\u0003\u0002\u0002\u0002\n(\u0003",
    "\u0002\u0002\u0002\f+\u0003\u0002\u0002\u0002\u000e/\u0003\u0002\u0002",
    "\u0002\u00105\u0003\u0002\u0002\u0002\u00127\u0003\u0002\u0002\u0002",
    "\u00149\u0003\u0002\u0002\u0002\u0016\u0017\u0007\u0005\u0002\u0002",
    "\u0017\u0018\u0005\u0004\u0003\u0002\u0018\u0019\u0005\u0006\u0004\u0002",
    "\u0019\u0003\u0003\u0002\u0002\u0002\u001a\u001b\u0007\t\u0002\u0002",
    "\u001b\u0005\u0003\u0002\u0002\u0002\u001c\u001e\u0005\b\u0005\u0002",
    "\u001d\u001c\u0003\u0002\u0002\u0002\u001e\u001f\u0003\u0002\u0002\u0002",
    "\u001f\u001d\u0003\u0002\u0002\u0002\u001f \u0003\u0002\u0002\u0002",
    " \u0007\u0003\u0002\u0002\u0002!\"\u0007\u0007\u0002\u0002\"$\u0005",
    "\n\u0006\u0002#%\u0005\f\u0007\u0002$#\u0003\u0002\u0002\u0002%&\u0003",
    "\u0002\u0002\u0002&$\u0003\u0002\u0002\u0002&\'\u0003\u0002\u0002\u0002",
    "\'\t\u0003\u0002\u0002\u0002()\u0007\u0006\u0002\u0002)\u000b\u0003",
    "\u0002\u0002\u0002*,\u0005\u000e\b\u0002+*\u0003\u0002\u0002\u0002,",
    "-\u0003\u0002\u0002\u0002-+\u0003\u0002\u0002\u0002-.\u0003\u0002\u0002",
    "\u0002.\r\u0003\u0002\u0002\u0002/0\u0007\u0007\u0002\u000201\u0007",
    "\u0007\u0002\u000212\u0005\u0010\t\u000223\u0005\u0012\n\u000234\u0005",
    "\u0014\u000b\u00024\u000f\u0003\u0002\u0002\u000256\t\u0002\u0002\u0002",
    "6\u0011\u0003\u0002\u0002\u000278\u0007\b\u0002\u00028\u0013\u0003\u0002",
    "\u0002\u00029:\u0007\t\u0002\u0002:\u0015\u0003\u0002\u0002\u0002\u0005",
    "\u001f&-"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'Add'", "'Remove'", "'Session'" ];

var symbolicNames = [ null, "ADD", "REMOVE", "SESSION", "DOC_NAME", "TAB", 
                      "FIELD_NAME", "NAME", "NL" ];

var ruleNames =  [ "session", "sessionName", "documents", "document", "documentName", 
                   "fieldValues", "fieldValue", "action", "fieldName", "value" ];

function FieldChangesParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

FieldChangesParser.prototype = Object.create(antlr4.Parser.prototype);
FieldChangesParser.prototype.constructor = FieldChangesParser;

Object.defineProperty(FieldChangesParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

FieldChangesParser.EOF = antlr4.Token.EOF;
FieldChangesParser.ADD = 1;
FieldChangesParser.REMOVE = 2;
FieldChangesParser.SESSION = 3;
FieldChangesParser.DOC_NAME = 4;
FieldChangesParser.TAB = 5;
FieldChangesParser.FIELD_NAME = 6;
FieldChangesParser.NAME = 7;
FieldChangesParser.NL = 8;

FieldChangesParser.RULE_session = 0;
FieldChangesParser.RULE_sessionName = 1;
FieldChangesParser.RULE_documents = 2;
FieldChangesParser.RULE_document = 3;
FieldChangesParser.RULE_documentName = 4;
FieldChangesParser.RULE_fieldValues = 5;
FieldChangesParser.RULE_fieldValue = 6;
FieldChangesParser.RULE_action = 7;
FieldChangesParser.RULE_fieldName = 8;
FieldChangesParser.RULE_value = 9;

function SessionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FieldChangesParser.RULE_session;
    return this;
}

SessionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SessionContext.prototype.constructor = SessionContext;

SessionContext.prototype.SESSION = function() {
    return this.getToken(FieldChangesParser.SESSION, 0);
};

SessionContext.prototype.sessionName = function() {
    return this.getTypedRuleContext(SessionNameContext,0);
};

SessionContext.prototype.documents = function() {
    return this.getTypedRuleContext(DocumentsContext,0);
};

SessionContext.prototype.enterRule = function(listener) {
    if(listener instanceof FieldChangesListener ) {
        listener.enterSession(this);
	}
};

SessionContext.prototype.exitRule = function(listener) {
    if(listener instanceof FieldChangesListener ) {
        listener.exitSession(this);
	}
};

SessionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FieldChangesVisitor ) {
        return visitor.visitSession(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FieldChangesParser.SessionContext = SessionContext;

FieldChangesParser.prototype.session = function() {

    var localctx = new SessionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, FieldChangesParser.RULE_session);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 20;
        this.match(FieldChangesParser.SESSION);
        this.state = 21;
        this.sessionName();
        this.state = 22;
        this.documents();
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

function SessionNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FieldChangesParser.RULE_sessionName;
    return this;
}

SessionNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SessionNameContext.prototype.constructor = SessionNameContext;

SessionNameContext.prototype.NAME = function() {
    return this.getToken(FieldChangesParser.NAME, 0);
};

SessionNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof FieldChangesListener ) {
        listener.enterSessionName(this);
	}
};

SessionNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof FieldChangesListener ) {
        listener.exitSessionName(this);
	}
};

SessionNameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FieldChangesVisitor ) {
        return visitor.visitSessionName(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FieldChangesParser.SessionNameContext = SessionNameContext;

FieldChangesParser.prototype.sessionName = function() {

    var localctx = new SessionNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, FieldChangesParser.RULE_sessionName);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 24;
        this.match(FieldChangesParser.NAME);
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

function DocumentsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FieldChangesParser.RULE_documents;
    return this;
}

DocumentsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DocumentsContext.prototype.constructor = DocumentsContext;

DocumentsContext.prototype.document = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(DocumentContext);
    } else {
        return this.getTypedRuleContext(DocumentContext,i);
    }
};

DocumentsContext.prototype.enterRule = function(listener) {
    if(listener instanceof FieldChangesListener ) {
        listener.enterDocuments(this);
	}
};

DocumentsContext.prototype.exitRule = function(listener) {
    if(listener instanceof FieldChangesListener ) {
        listener.exitDocuments(this);
	}
};

DocumentsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FieldChangesVisitor ) {
        return visitor.visitDocuments(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FieldChangesParser.DocumentsContext = DocumentsContext;

FieldChangesParser.prototype.documents = function() {

    var localctx = new DocumentsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, FieldChangesParser.RULE_documents);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 27; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 26;
            this.document();
            this.state = 29; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===FieldChangesParser.TAB);
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

function DocumentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FieldChangesParser.RULE_document;
    return this;
}

DocumentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DocumentContext.prototype.constructor = DocumentContext;

DocumentContext.prototype.TAB = function() {
    return this.getToken(FieldChangesParser.TAB, 0);
};

DocumentContext.prototype.documentName = function() {
    return this.getTypedRuleContext(DocumentNameContext,0);
};

DocumentContext.prototype.fieldValues = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FieldValuesContext);
    } else {
        return this.getTypedRuleContext(FieldValuesContext,i);
    }
};

DocumentContext.prototype.enterRule = function(listener) {
    if(listener instanceof FieldChangesListener ) {
        listener.enterDocument(this);
	}
};

DocumentContext.prototype.exitRule = function(listener) {
    if(listener instanceof FieldChangesListener ) {
        listener.exitDocument(this);
	}
};

DocumentContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FieldChangesVisitor ) {
        return visitor.visitDocument(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FieldChangesParser.DocumentContext = DocumentContext;

FieldChangesParser.prototype.document = function() {

    var localctx = new DocumentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, FieldChangesParser.RULE_document);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 31;
        this.match(FieldChangesParser.TAB);
        this.state = 32;
        this.documentName();
        this.state = 34; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 33;
        		this.fieldValues();
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 36; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,1, this._ctx);
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

function DocumentNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FieldChangesParser.RULE_documentName;
    return this;
}

DocumentNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DocumentNameContext.prototype.constructor = DocumentNameContext;

DocumentNameContext.prototype.DOC_NAME = function() {
    return this.getToken(FieldChangesParser.DOC_NAME, 0);
};

DocumentNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof FieldChangesListener ) {
        listener.enterDocumentName(this);
	}
};

DocumentNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof FieldChangesListener ) {
        listener.exitDocumentName(this);
	}
};

DocumentNameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FieldChangesVisitor ) {
        return visitor.visitDocumentName(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FieldChangesParser.DocumentNameContext = DocumentNameContext;

FieldChangesParser.prototype.documentName = function() {

    var localctx = new DocumentNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, FieldChangesParser.RULE_documentName);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 38;
        this.match(FieldChangesParser.DOC_NAME);
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

function FieldValuesContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FieldChangesParser.RULE_fieldValues;
    return this;
}

FieldValuesContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FieldValuesContext.prototype.constructor = FieldValuesContext;

FieldValuesContext.prototype.fieldValue = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FieldValueContext);
    } else {
        return this.getTypedRuleContext(FieldValueContext,i);
    }
};

FieldValuesContext.prototype.enterRule = function(listener) {
    if(listener instanceof FieldChangesListener ) {
        listener.enterFieldValues(this);
	}
};

FieldValuesContext.prototype.exitRule = function(listener) {
    if(listener instanceof FieldChangesListener ) {
        listener.exitFieldValues(this);
	}
};

FieldValuesContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FieldChangesVisitor ) {
        return visitor.visitFieldValues(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FieldChangesParser.FieldValuesContext = FieldValuesContext;

FieldChangesParser.prototype.fieldValues = function() {

    var localctx = new FieldValuesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, FieldChangesParser.RULE_fieldValues);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 41; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 40;
        		this.fieldValue();
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 43; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,2, this._ctx);
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

function FieldValueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FieldChangesParser.RULE_fieldValue;
    return this;
}

FieldValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FieldValueContext.prototype.constructor = FieldValueContext;

FieldValueContext.prototype.TAB = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FieldChangesParser.TAB);
    } else {
        return this.getToken(FieldChangesParser.TAB, i);
    }
};


FieldValueContext.prototype.action = function() {
    return this.getTypedRuleContext(ActionContext,0);
};

FieldValueContext.prototype.fieldName = function() {
    return this.getTypedRuleContext(FieldNameContext,0);
};

FieldValueContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};

FieldValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof FieldChangesListener ) {
        listener.enterFieldValue(this);
	}
};

FieldValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof FieldChangesListener ) {
        listener.exitFieldValue(this);
	}
};

FieldValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FieldChangesVisitor ) {
        return visitor.visitFieldValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FieldChangesParser.FieldValueContext = FieldValueContext;

FieldChangesParser.prototype.fieldValue = function() {

    var localctx = new FieldValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, FieldChangesParser.RULE_fieldValue);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 45;
        this.match(FieldChangesParser.TAB);
        this.state = 46;
        this.match(FieldChangesParser.TAB);
        this.state = 47;
        this.action();
        this.state = 48;
        this.fieldName();
        this.state = 49;
        this.value();
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

function ActionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FieldChangesParser.RULE_action;
    return this;
}

ActionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ActionContext.prototype.constructor = ActionContext;

ActionContext.prototype.ADD = function() {
    return this.getToken(FieldChangesParser.ADD, 0);
};

ActionContext.prototype.REMOVE = function() {
    return this.getToken(FieldChangesParser.REMOVE, 0);
};

ActionContext.prototype.enterRule = function(listener) {
    if(listener instanceof FieldChangesListener ) {
        listener.enterAction(this);
	}
};

ActionContext.prototype.exitRule = function(listener) {
    if(listener instanceof FieldChangesListener ) {
        listener.exitAction(this);
	}
};

ActionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FieldChangesVisitor ) {
        return visitor.visitAction(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FieldChangesParser.ActionContext = ActionContext;

FieldChangesParser.prototype.action = function() {

    var localctx = new ActionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, FieldChangesParser.RULE_action);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 51;
        _la = this._input.LA(1);
        if(!(_la===FieldChangesParser.ADD || _la===FieldChangesParser.REMOVE)) {
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

function FieldNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FieldChangesParser.RULE_fieldName;
    return this;
}

FieldNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FieldNameContext.prototype.constructor = FieldNameContext;

FieldNameContext.prototype.FIELD_NAME = function() {
    return this.getToken(FieldChangesParser.FIELD_NAME, 0);
};

FieldNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof FieldChangesListener ) {
        listener.enterFieldName(this);
	}
};

FieldNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof FieldChangesListener ) {
        listener.exitFieldName(this);
	}
};

FieldNameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FieldChangesVisitor ) {
        return visitor.visitFieldName(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FieldChangesParser.FieldNameContext = FieldNameContext;

FieldChangesParser.prototype.fieldName = function() {

    var localctx = new FieldNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, FieldChangesParser.RULE_fieldName);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 53;
        this.match(FieldChangesParser.FIELD_NAME);
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

function ValueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FieldChangesParser.RULE_value;
    return this;
}

ValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValueContext.prototype.constructor = ValueContext;

ValueContext.prototype.NAME = function() {
    return this.getToken(FieldChangesParser.NAME, 0);
};

ValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof FieldChangesListener ) {
        listener.enterValue(this);
	}
};

ValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof FieldChangesListener ) {
        listener.exitValue(this);
	}
};

ValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FieldChangesVisitor ) {
        return visitor.visitValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FieldChangesParser.ValueContext = ValueContext;

FieldChangesParser.prototype.value = function() {

    var localctx = new ValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, FieldChangesParser.RULE_value);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 55;
        this.match(FieldChangesParser.NAME);
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


exports.FieldChangesParser = FieldChangesParser;
