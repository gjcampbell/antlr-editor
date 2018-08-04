// Generated from .\LessParser.g4 by ANTLR 4.7
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class LessParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.7", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		NULL=1, IN=2, Unit=3, Ellipsis=4, InterpolationStart=5, LPAREN=6, RPAREN=7, 
		BlockStart=8, BlockEnd=9, LBRACK=10, RBRACK=11, GT=12, TIL=13, LT=14, 
		COLON=15, SEMI=16, COMMA=17, DOT=18, DOLLAR=19, AT=20, PARENTREF=21, HASH=22, 
		COLONCOLON=23, PLUS=24, TIMES=25, DIV=26, MINUS=27, PERC=28, EQEQ=29, 
		GTEQ=30, LTEQ=31, NOTEQ=32, EQ=33, PIPE_EQ=34, TILD_EQ=35, URL=36, UrlStart=37, 
		IMPORT=38, MEDIA=39, EXTEND=40, IMPORTANT=41, ARGUMENTS=42, REST=43, REFERENCE=44, 
		INLINE=45, LESS=46, CSS=47, ONCE=48, MULTIPLE=49, WHEN=50, NOT=51, AND=52, 
		Identifier=53, StringLiteral=54, Number=55, Color=56, WS=57, SL_COMMENT=58, 
		COMMENT=59, FUNCTION_NAME=60, COLOR=61, CONVERT=62, DATA_URI=63, DEFAULT=64, 
		UNIT=65, GET_UNIT=66, SVG_GRADIENT=67, ESCAPE=68, E=69, FORMAT=70, REPLACE=71, 
		LENGTH=72, EXTRACT=73, CEIL=74, FLOOR=75, PERCENTAGE=76, ROUND=77, SQRT=78, 
		ABS=79, SIN=80, ASIN=81, COS=82, ACOS=83, TAN=84, ATAN=85, PI=86, POW=87, 
		MOD=88, MIN=89, MAX=90, ISNUMBER=91, ISSTRING=92, ISCOLOR=93, ISKEYWORD=94, 
		ISURL=95, ISPIXEL=96, ISEM=97, ISPERCENTAGE=98, ISUNIT=99, RGB=100, RGBA=101, 
		ARGB=102, HSL=103, HSLA=104, HSV=105, HSVA=106, HUE=107, SATURATION=108, 
		LIGHTNESS=109, HSVHUE=110, HSVSATURATION=111, HSVVALUE=112, RED=113, GREEN=114, 
		BLUE=115, ALPHA=116, LUMA=117, LUMINANCE=118, SATURATE=119, DESATURATE=120, 
		LIGHTEN=121, DARKEN=122, FADEIN=123, FADEOUT=124, FADE=125, SPIN=126, 
		MIX=127, GREYSCALE=128, CONTRAST=129, MULTIPLY=130, SCREEN=131, OVERLAY=132, 
		SOFTLIGHT=133, HARDLIGHT=134, DIFFERENCE=135, EXCLUSION=136, AVERAGE=137, 
		NEGATION=138, UrlEnd=139, Url=140, SPACE=141, InterpolationStartAfter=142, 
		IdentifierAfter=143;
	public static final int
		RULE_stylesheet = 0, RULE_statement = 1, RULE_variableName = 2, RULE_commandStatement = 3, 
		RULE_mathCharacter = 4, RULE_mathStatement = 5, RULE_expression = 6, RULE_function = 7, 
		RULE_conditions = 8, RULE_condition = 9, RULE_conditionStatement = 10, 
		RULE_variableDeclaration = 11, RULE_importDeclaration = 12, RULE_referenceUrl = 13, 
		RULE_mediaTypes = 14, RULE_ruleset = 15, RULE_block = 16, RULE_mixinDefinition = 17, 
		RULE_mixinGuard = 18, RULE_mixinDefinitionParam = 19, RULE_mixinReference = 20, 
		RULE_selectors = 21, RULE_selector = 22, RULE_attrib = 23, RULE_pseudo = 24, 
		RULE_element = 25, RULE_selectorPrefix = 26, RULE_attribRelate = 27, RULE_identifier = 28, 
		RULE_identifierPart = 29, RULE_identifierVariableName = 30, RULE_property = 31, 
		RULE_values = 32, RULE_url = 33, RULE_measurement = 34;
	public static final String[] ruleNames = {
		"stylesheet", "statement", "variableName", "commandStatement", "mathCharacter", 
		"mathStatement", "expression", "function", "conditions", "condition", 
		"conditionStatement", "variableDeclaration", "importDeclaration", "referenceUrl", 
		"mediaTypes", "ruleset", "block", "mixinDefinition", "mixinGuard", "mixinDefinitionParam", 
		"mixinReference", "selectors", "selector", "attrib", "pseudo", "element", 
		"selectorPrefix", "attribRelate", "identifier", "identifierPart", "identifierVariableName", 
		"property", "values", "url", "measurement"
	};

	private static final String[] _LITERAL_NAMES = {
		null, "'null'", "'in'", null, "'...'", null, "'('", "')'", "'{'", "'}'", 
		"'['", "']'", "'>'", "'~'", "'<'", "':'", "';'", "','", "'.'", "'$'", 
		"'@'", "'&'", "'#'", "'::'", "'+'", "'*'", "'/'", "'-'", null, "'=='", 
		"'>='", "'<='", "'!='", "'='", "'|='", "'~='", "'url'", null, "'@import'", 
		"'@media'", "':extend'", "'!important'", "'@arguments'", "'@rest'", "'reference'", 
		"'inline'", "'less'", "'css'", "'once'", "'multiple'", "'when'", "'not'", 
		"'and'", null, null, null, null, null, null, null, null, "'color'", "'convert'", 
		"'data-uri'", "'default'", "'unit'", "'get-unit'", "'svg-gradient'", "'escape'", 
		"'e'", null, "'replace'", "'length'", "'extract'", "'ceil'", "'floor'", 
		"'percentage'", "'round'", "'sqrt'", "'abs'", "'sin'", "'asin'", "'cos'", 
		"'acos'", "'tan'", "'atan'", "'pi'", "'pow'", "'mod'", "'min'", "'max'", 
		"'isnumber'", "'isstring'", "'iscolor'", "'iskeyword'", "'isurl'", "'ispixel'", 
		"'isem'", "'ispercentage'", "'isunit'", "'rgb'", "'rgba'", "'argb'", "'hsl'", 
		"'hsla'", "'hsv'", "'hsva'", "'hue'", "'saturation'", "'lightness'", "'hsvhue'", 
		"'hsvsaturation'", "'hsvvalue'", "'red'", "'green'", "'blue'", "'alpha'", 
		"'luma'", "'luminance'", "'saturate'", "'desaturate'", "'lighten'", "'darken'", 
		"'fadein'", "'fadeout'", "'fade'", "'spin'", "'mix'", "'greyscale'", "'contrast'", 
		"'multiply'", "'screen'", "'overlay'", "'softlight'", "'hardlight'", "'difference'", 
		"'exclusion'", "'average'", "'negation'"
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, "NULL", "IN", "Unit", "Ellipsis", "InterpolationStart", "LPAREN", 
		"RPAREN", "BlockStart", "BlockEnd", "LBRACK", "RBRACK", "GT", "TIL", "LT", 
		"COLON", "SEMI", "COMMA", "DOT", "DOLLAR", "AT", "PARENTREF", "HASH", 
		"COLONCOLON", "PLUS", "TIMES", "DIV", "MINUS", "PERC", "EQEQ", "GTEQ", 
		"LTEQ", "NOTEQ", "EQ", "PIPE_EQ", "TILD_EQ", "URL", "UrlStart", "IMPORT", 
		"MEDIA", "EXTEND", "IMPORTANT", "ARGUMENTS", "REST", "REFERENCE", "INLINE", 
		"LESS", "CSS", "ONCE", "MULTIPLE", "WHEN", "NOT", "AND", "Identifier", 
		"StringLiteral", "Number", "Color", "WS", "SL_COMMENT", "COMMENT", "FUNCTION_NAME", 
		"COLOR", "CONVERT", "DATA_URI", "DEFAULT", "UNIT", "GET_UNIT", "SVG_GRADIENT", 
		"ESCAPE", "E", "FORMAT", "REPLACE", "LENGTH", "EXTRACT", "CEIL", "FLOOR", 
		"PERCENTAGE", "ROUND", "SQRT", "ABS", "SIN", "ASIN", "COS", "ACOS", "TAN", 
		"ATAN", "PI", "POW", "MOD", "MIN", "MAX", "ISNUMBER", "ISSTRING", "ISCOLOR", 
		"ISKEYWORD", "ISURL", "ISPIXEL", "ISEM", "ISPERCENTAGE", "ISUNIT", "RGB", 
		"RGBA", "ARGB", "HSL", "HSLA", "HSV", "HSVA", "HUE", "SATURATION", "LIGHTNESS", 
		"HSVHUE", "HSVSATURATION", "HSVVALUE", "RED", "GREEN", "BLUE", "ALPHA", 
		"LUMA", "LUMINANCE", "SATURATE", "DESATURATE", "LIGHTEN", "DARKEN", "FADEIN", 
		"FADEOUT", "FADE", "SPIN", "MIX", "GREYSCALE", "CONTRAST", "MULTIPLY", 
		"SCREEN", "OVERLAY", "SOFTLIGHT", "HARDLIGHT", "DIFFERENCE", "EXCLUSION", 
		"AVERAGE", "NEGATION", "UrlEnd", "Url", "SPACE", "InterpolationStartAfter", 
		"IdentifierAfter"
	};
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "LessParser.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public LessParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}
	public static class StylesheetContext extends ParserRuleContext {
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public StylesheetContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stylesheet; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof LessParserListener ) ((LessParserListener)listener).enterStylesheet(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof LessParserListener ) ((LessParserListener)listener).exitStylesheet(this);
		}
	}

	public final StylesheetContext stylesheet() throws RecognitionException {
		StylesheetContext _localctx = new StylesheetContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_stylesheet);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(73);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << InterpolationStart) | (1L << DOT) | (1L << AT) | (1L << PARENTREF) | (1L << HASH) | (1L << TIMES) | (1L << IMPORT) | (1L << Identifier))) != 0)) {
				{
				{
				setState(70);
				statement();
				}
				}
				setState(75);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StatementContext extends ParserRuleContext {
		public ImportDeclarationContext importDeclaration() {
			return getRuleContext(ImportDeclarationContext.class,0);
		}
		public RulesetContext ruleset() {
			return getRuleContext(RulesetContext.class,0);
		}
		public VariableDeclarationContext variableDeclaration() {
			return getRuleContext(VariableDeclarationContext.class,0);
		}
		public MixinDefinitionContext mixinDefinition() {
			return getRuleContext(MixinDefinitionContext.class,0);
		}
		public StatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statement; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof LessParserListener ) ((LessParserListener)listener).enterStatement(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof LessParserListener ) ((LessParserListener)listener).exitStatement(this);
		}
	}

	public final StatementContext statement() throws RecognitionException {
		StatementContext _localctx = new StatementContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_statement);
		try {
			setState(82);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,1,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(76);
				importDeclaration();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(77);
				ruleset();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(78);
				variableDeclaration();
				setState(79);
				match(SEMI);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(81);
				mixinDefinition();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class VariableNameContext extends ParserRuleContext {
		public TerminalNode AT() { return getToken(LessParser.AT, 0); }
		public VariableNameContext variableName() {
			return getRuleContext(VariableNameContext.class,0);
		}
		public TerminalNode Identifier() { return getToken(LessParser.Identifier, 0); }
		public VariableNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variableName; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof LessParserListener ) ((LessParserListener)listener).enterVariableName(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof LessParserListener ) ((LessParserListener)listener).exitVariableName(this);
		}
	}

	public final VariableNameContext variableName() throws RecognitionException {
		VariableNameContext _localctx = new VariableNameContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_variableName);
		try {
			setState(88);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,2,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(84);
				match(AT);
				setState(85);
				variableName();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(86);
				match(AT);
				setState(87);
				match(Identifier);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CommandStatementContext extends ParserRuleContext {
		public MathStatementContext mathStatement() {
			return getRuleContext(MathStatementContext.class,0);
		}
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public CommandStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_commandStatement; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof LessParserListener ) ((LessParserListener)listener).enterCommandStatement(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof LessParserListener ) ((LessParserListener)listener).exitCommandStatement(this);
		}
	}

	public final CommandStatementContext commandStatement() throws RecognitionException {
		CommandStatementContext _localctx = new CommandStatementContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_commandStatement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(91); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(90);
				expression();
				}
				}
				setState(93); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << InterpolationStart) | (1L << AT) | (1L << UrlStart) | (1L << Identifier) | (1L << StringLiteral) | (1L << Number) | (1L << Color))) != 0) );
			}
			setState(96);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << PLUS) | (1L << TIMES) | (1L << DIV) | (1L << MINUS) | (1L << PERC))) != 0)) {
				{
				setState(95);
				mathStatement();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MathCharacterContext extends ParserRuleContext {
		public TerminalNode TIMES() { return getToken(LessParser.TIMES, 0); }
		public TerminalNode PLUS() { return getToken(LessParser.PLUS, 0); }
		public TerminalNode DIV() { return getToken(LessParser.DIV, 0); }
		public TerminalNode MINUS() { return getToken(LessParser.MINUS, 0); }
		public TerminalNode PERC() { return getToken(LessParser.PERC, 0); }
		public MathCharacterContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_mathCharacter; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof LessParserListener ) ((LessParserListener)listener).enterMathCharacter(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof LessParserListener ) ((LessParserListener)listener).exitMathCharacter(this);
		}
	}

	public final MathCharacterContext mathCharacter() throws RecognitionException {
		MathCharacterContext _localctx = new MathCharacterContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_mathCharacter);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(98);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << PLUS) | (1L << TIMES) | (1L << DIV) | (1L << MINUS) | (1L << PERC))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MathStatementContext extends ParserRuleContext {
		public MathCharacterContext mathCharacter() {
			return getRuleContext(MathCharacterContext.class,0);
		}
		public CommandStatementContext commandStatement() {
			return getRuleContext(CommandStatementContext.class,0);
		}
		public MathStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_mathStatement; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof LessParserListener ) ((LessParserListener)listener).enterMathStatement(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof LessParserListener ) ((LessParserListener)listener).exitMathStatement(this);
		}
	}

	public final MathStatementContext mathStatement() throws RecognitionException {
		MathStatementContext _localctx = new MathStatementContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_mathStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(100);
			mathCharacter();
			setState(101);
			commandStatement();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExpressionContext extends ParserRuleContext {
		public MeasurementContext measurement() {
			return getRuleContext(MeasurementContext.class,0);
		}
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode LPAREN() { return getToken(LessParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(LessParser.RPAREN, 0); }
		public ValuesContext values() {
			return getRuleContext(ValuesContext.class,0);
		}
		public TerminalNode Color() { return getToken(LessParser.Color, 0); }
		public TerminalNode StringLiteral() { return getToken(LessParser.StringLiteral, 0); }
		public UrlContext url() {
			return getRuleContext(UrlContext.class,0);
		}
		public VariableNameContext variableName() {
			return getRuleContext(VariableNameContext.class,0);
		}
		public ExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expression; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof LessParserListener ) ((LessParserListener)listener).enterExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof LessParserListener ) ((LessParserListener)listener).exitExpression(this);
		}
	}

	public final ExpressionContext expression() throws RecognitionException {
		ExpressionContext _localctx = new ExpressionContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_expression);
		int _la;
		try {
			setState(116);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,6,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(103);
				measurement();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(104);
				identifier();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(105);
				identifier();
				setState(106);
				match(LPAREN);
				setState(108);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << InterpolationStart) | (1L << AT) | (1L << UrlStart) | (1L << Identifier) | (1L << StringLiteral) | (1L << Number) | (1L << Color))) != 0)) {
					{
					setState(107);
					values();
					}
				}

				setState(110);
				match(RPAREN);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(112);
				match(Color);
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(113);
				match(StringLiteral);
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(114);
				url();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(115);
				variableName();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FunctionContext extends ParserRuleContext {
		public TerminalNode FUNCTION_NAME() { return getToken(LessParser.FUNCTION_NAME, 0); }
		public TerminalNode LPAREN() { return getToken(LessParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(LessParser.RPAREN, 0); }
		public ValuesContext values() {
			return getRuleContext(ValuesContext.class,0);
		}
		public FunctionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_function; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof LessParserListener ) ((LessParserListener)listener).enterFunction(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof LessParserListener ) ((LessParserListener)listener).exitFunction(this);
		}
	}

	public final FunctionContext function() throws RecognitionException {
		FunctionContext _localctx = new FunctionContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_function);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(118);
			match(FUNCTION_NAME);
			setState(119);
			match(LPAREN);
			setState(121);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << InterpolationStart) | (1L << AT) | (1L << UrlStart) | (1L << Identifier) | (1L << StringLiteral) | (1L << Number) | (1L << Color))) != 0)) {
				{
				setState(120);
				values();
				}
			}

			setState(123);
			match(RPAREN);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ConditionsContext extends ParserRuleContext {
		public List<ConditionContext> condition() {
			return getRuleContexts(ConditionContext.class);
		}
		public ConditionContext condition(int i) {
			return getRuleContext(ConditionContext.class,i);
		}
		public List<TerminalNode> AND() { return getTokens(LessParser.AND); }
		public TerminalNode AND(int i) {
			return getToken(LessParser.AND, i);
		}
		public List<TerminalNode> COMMA() { return getTokens(LessParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(LessParser.COMMA, i);
		}
		public ConditionsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_conditions; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof LessParserListener ) ((LessParserListener)listener).enterConditions(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof LessParserListener ) ((LessParserListener)listener).exitConditions(this);
		}
	}

	public final ConditionsContext conditions() throws RecognitionException {
		ConditionsContext _localctx = new ConditionsContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_conditions);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(125);
			condition();
			setState(130);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA || _la==AND) {
				{
				{
				setState(126);
				_la = _input.LA(1);
				if ( !(_la==COMMA || _la==AND) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(127);
				condition();
				}
				}
				setState(132);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ConditionContext extends ParserRuleContext {
		public TerminalNode LPAREN() { return getToken(LessParser.LPAREN, 0); }
		public ConditionStatementContext conditionStatement() {
			return getRuleContext(ConditionStatementContext.class,0);
		}
		public TerminalNode RPAREN() { return getToken(LessParser.RPAREN, 0); }
		public TerminalNode NOT() { return getToken(LessParser.NOT, 0); }
		public ConditionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_condition; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof LessParserListener ) ((LessParserListener)listener).enterCondition(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof LessParserListener ) ((LessParserListener)listener).exitCondition(this);
		}
	}

	public final ConditionContext condition() throws RecognitionException {
		ConditionContext _localctx = new ConditionContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_condition);
		try {
			setState(142);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case LPAREN:
				enterOuterAlt(_localctx, 1);
				{
				setState(133);
				match(LPAREN);
				setState(134);
				conditionStatement();
				setState(135);
				match(RPAREN);
				}
				break;
			case NOT:
				enterOuterAlt(_localctx, 2);
				{
				setState(137);
				match(NOT);
				setState(138);
				match(LPAREN);
				setState(139);
				conditionStatement();
				setState(140);
				match(RPAREN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ConditionStatementContext extends ParserRuleContext {
		public List<CommandStatementContext> commandStatement() {
			return getRuleContexts(CommandStatementContext.class);
		}
		public CommandStatementContext commandStatement(int i) {
			return getRuleContext(CommandStatementContext.class,i);
		}
		public TerminalNode EQ() { return getToken(LessParser.EQ, 0); }
		public TerminalNode LT() { return getToken(LessParser.LT, 0); }
		public TerminalNode GT() { return getToken(LessParser.GT, 0); }
		public TerminalNode GTEQ() { return getToken(LessParser.GTEQ, 0); }
		public TerminalNode LTEQ() { return getToken(LessParser.LTEQ, 0); }
		public ConditionStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_conditionStatement; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof LessParserListener ) ((LessParserListener)listener).enterConditionStatement(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof LessParserListener ) ((LessParserListener)listener).exitConditionStatement(this);
		}
	}

	public final ConditionStatementContext conditionStatement() throws RecognitionException {
		ConditionStatementContext _localctx = new ConditionStatementContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_conditionStatement);
		int _la;
		try {
			setState(149);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,10,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(144);
				commandStatement();
				setState(145);
				_la = _input.LA(1);
				if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << GT) | (1L << LT) | (1L << GTEQ) | (1L << LTEQ) | (1L << EQ))) != 0)) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(146);
				commandStatement();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(148);
				commandStatement();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class VariableDeclarationContext extends ParserRuleContext {
		public VariableNameContext variableName() {
			return getRuleContext(VariableNameContext.class,0);
		}
		public TerminalNode COLON() { return getToken(LessParser.COLON, 0); }
		public ValuesContext values() {
			return getRuleContext(ValuesContext.class,0);
		}
		public VariableDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variableDeclaration; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof LessParserListener ) ((LessParserListener)listener).enterVariableDeclaration(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof LessParserListener ) ((LessParserListener)listener).exitVariableDeclaration(this);
		}
	}

	public final VariableDeclarationContext variableDeclaration() throws RecognitionException {
		VariableDeclarationContext _localctx = new VariableDeclarationContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_variableDeclaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(151);
			variableName();
			setState(152);
			match(COLON);
			setState(153);
			values();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ImportDeclarationContext extends ParserRuleContext {
		public ReferenceUrlContext referenceUrl() {
			return getRuleContext(ReferenceUrlContext.class,0);
		}
		public MediaTypesContext mediaTypes() {
			return getRuleContext(MediaTypesContext.class,0);
		}
		public ImportDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_importDeclaration; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof LessParserListener ) ((LessParserListener)listener).enterImportDeclaration(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof LessParserListener ) ((LessParserListener)listener).exitImportDeclaration(this);
		}
	}

	public final ImportDeclarationContext importDeclaration() throws RecognitionException {
		ImportDeclarationContext _localctx = new ImportDeclarationContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_importDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(155);
			match(IMPORT);
			setState(156);
			referenceUrl();
			setState(158);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Identifier) {
				{
				setState(157);
				mediaTypes();
				}
			}

			setState(160);
			match(SEMI);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ReferenceUrlContext extends ParserRuleContext {
		public TerminalNode StringLiteral() { return getToken(LessParser.StringLiteral, 0); }
		public TerminalNode UrlStart() { return getToken(LessParser.UrlStart, 0); }
		public TerminalNode Url() { return getToken(LessParser.Url, 0); }
		public TerminalNode UrlEnd() { return getToken(LessParser.UrlEnd, 0); }
		public ReferenceUrlContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_referenceUrl; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof LessParserListener ) ((LessParserListener)listener).enterReferenceUrl(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof LessParserListener ) ((LessParserListener)listener).exitReferenceUrl(this);
		}
	}

	public final ReferenceUrlContext referenceUrl() throws RecognitionException {
		ReferenceUrlContext _localctx = new ReferenceUrlContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_referenceUrl);
		try {
			setState(166);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case StringLiteral:
				enterOuterAlt(_localctx, 1);
				{
				setState(162);
				match(StringLiteral);
				}
				break;
			case UrlStart:
				enterOuterAlt(_localctx, 2);
				{
				setState(163);
				match(UrlStart);
				setState(164);
				match(Url);
				setState(165);
				match(UrlEnd);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MediaTypesContext extends ParserRuleContext {
		public List<TerminalNode> Identifier() { return getTokens(LessParser.Identifier); }
		public TerminalNode Identifier(int i) {
			return getToken(LessParser.Identifier, i);
		}
		public List<TerminalNode> COMMA() { return getTokens(LessParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(LessParser.COMMA, i);
		}
		public MediaTypesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_mediaTypes; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof LessParserListener ) ((LessParserListener)listener).enterMediaTypes(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof LessParserListener ) ((LessParserListener)listener).exitMediaTypes(this);
		}
	}

	public final MediaTypesContext mediaTypes() throws RecognitionException {
		MediaTypesContext _localctx = new MediaTypesContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_mediaTypes);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(168);
			match(Identifier);
			setState(173);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(169);
				match(COMMA);
				setState(170);
				match(Identifier);
				}
				}
				setState(175);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class RulesetContext extends ParserRuleContext {
		public SelectorsContext selectors() {
			return getRuleContext(SelectorsContext.class,0);
		}
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public RulesetContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ruleset; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof LessParserListener ) ((LessParserListener)listener).enterRuleset(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof LessParserListener ) ((LessParserListener)listener).exitRuleset(this);
		}
	}

	public final RulesetContext ruleset() throws RecognitionException {
		RulesetContext _localctx = new RulesetContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_ruleset);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(176);
			selectors();
			setState(177);
			block();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BlockContext extends ParserRuleContext {
		public TerminalNode BlockStart() { return getToken(LessParser.BlockStart, 0); }
		public TerminalNode BlockEnd() { return getToken(LessParser.BlockEnd, 0); }
		public List<PropertyContext> property() {
			return getRuleContexts(PropertyContext.class);
		}
		public PropertyContext property(int i) {
			return getRuleContext(PropertyContext.class,i);
		}
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public List<MixinReferenceContext> mixinReference() {
			return getRuleContexts(MixinReferenceContext.class);
		}
		public MixinReferenceContext mixinReference(int i) {
			return getRuleContext(MixinReferenceContext.class,i);
		}
		public BlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_block; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof LessParserListener ) ((LessParserListener)listener).enterBlock(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof LessParserListener ) ((LessParserListener)listener).exitBlock(this);
		}
	}

	public final BlockContext block() throws RecognitionException {
		BlockContext _localctx = new BlockContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_block);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(179);
			match(BlockStart);
			setState(187);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,15,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					setState(185);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,14,_ctx) ) {
					case 1:
						{
						setState(180);
						property();
						setState(181);
						match(SEMI);
						}
						break;
					case 2:
						{
						setState(183);
						statement();
						}
						break;
					case 3:
						{
						setState(184);
						mixinReference();
						}
						break;
					}
					} 
				}
				setState(189);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,15,_ctx);
			}
			setState(191);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==InterpolationStart || _la==Identifier) {
				{
				setState(190);
				property();
				}
			}

			setState(193);
			match(BlockEnd);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MixinDefinitionContext extends ParserRuleContext {
		public SelectorsContext selectors() {
			return getRuleContext(SelectorsContext.class,0);
		}
		public TerminalNode LPAREN() { return getToken(LessParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(LessParser.RPAREN, 0); }
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public List<MixinDefinitionParamContext> mixinDefinitionParam() {
			return getRuleContexts(MixinDefinitionParamContext.class);
		}
		public MixinDefinitionParamContext mixinDefinitionParam(int i) {
			return getRuleContext(MixinDefinitionParamContext.class,i);
		}
		public TerminalNode Ellipsis() { return getToken(LessParser.Ellipsis, 0); }
		public MixinGuardContext mixinGuard() {
			return getRuleContext(MixinGuardContext.class,0);
		}
		public MixinDefinitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_mixinDefinition; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof LessParserListener ) ((LessParserListener)listener).enterMixinDefinition(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof LessParserListener ) ((LessParserListener)listener).exitMixinDefinition(this);
		}
	}

	public final MixinDefinitionContext mixinDefinition() throws RecognitionException {
		MixinDefinitionContext _localctx = new MixinDefinitionContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_mixinDefinition);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(195);
			selectors();
			setState(196);
			match(LPAREN);
			setState(205);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==AT) {
				{
				setState(197);
				mixinDefinitionParam();
				setState(202);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==SEMI) {
					{
					{
					setState(198);
					match(SEMI);
					setState(199);
					mixinDefinitionParam();
					}
					}
					setState(204);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(208);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Ellipsis) {
				{
				setState(207);
				match(Ellipsis);
				}
			}

			setState(210);
			match(RPAREN);
			setState(212);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==WHEN) {
				{
				setState(211);
				mixinGuard();
				}
			}

			setState(214);
			block();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MixinGuardContext extends ParserRuleContext {
		public TerminalNode WHEN() { return getToken(LessParser.WHEN, 0); }
		public ConditionsContext conditions() {
			return getRuleContext(ConditionsContext.class,0);
		}
		public MixinGuardContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_mixinGuard; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof LessParserListener ) ((LessParserListener)listener).enterMixinGuard(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof LessParserListener ) ((LessParserListener)listener).exitMixinGuard(this);
		}
	}

	public final MixinGuardContext mixinGuard() throws RecognitionException {
		MixinGuardContext _localctx = new MixinGuardContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_mixinGuard);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(216);
			match(WHEN);
			setState(217);
			conditions();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MixinDefinitionParamContext extends ParserRuleContext {
		public VariableNameContext variableName() {
			return getRuleContext(VariableNameContext.class,0);
		}
		public VariableDeclarationContext variableDeclaration() {
			return getRuleContext(VariableDeclarationContext.class,0);
		}
		public MixinDefinitionParamContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_mixinDefinitionParam; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof LessParserListener ) ((LessParserListener)listener).enterMixinDefinitionParam(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof LessParserListener ) ((LessParserListener)listener).exitMixinDefinitionParam(this);
		}
	}

	public final MixinDefinitionParamContext mixinDefinitionParam() throws RecognitionException {
		MixinDefinitionParamContext _localctx = new MixinDefinitionParamContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_mixinDefinitionParam);
		try {
			setState(221);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,21,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(219);
				variableName();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(220);
				variableDeclaration();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MixinReferenceContext extends ParserRuleContext {
		public SelectorContext selector() {
			return getRuleContext(SelectorContext.class,0);
		}
		public TerminalNode LPAREN() { return getToken(LessParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(LessParser.RPAREN, 0); }
		public ValuesContext values() {
			return getRuleContext(ValuesContext.class,0);
		}
		public TerminalNode IMPORTANT() { return getToken(LessParser.IMPORTANT, 0); }
		public MixinReferenceContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_mixinReference; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof LessParserListener ) ((LessParserListener)listener).enterMixinReference(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof LessParserListener ) ((LessParserListener)listener).exitMixinReference(this);
		}
	}

	public final MixinReferenceContext mixinReference() throws RecognitionException {
		MixinReferenceContext _localctx = new MixinReferenceContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_mixinReference);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(223);
			selector();
			setState(224);
			match(LPAREN);
			setState(226);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << InterpolationStart) | (1L << AT) | (1L << UrlStart) | (1L << Identifier) | (1L << StringLiteral) | (1L << Number) | (1L << Color))) != 0)) {
				{
				setState(225);
				values();
				}
			}

			setState(228);
			match(RPAREN);
			setState(230);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==IMPORTANT) {
				{
				setState(229);
				match(IMPORTANT);
				}
			}

			setState(232);
			match(SEMI);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SelectorsContext extends ParserRuleContext {
		public List<SelectorContext> selector() {
			return getRuleContexts(SelectorContext.class);
		}
		public SelectorContext selector(int i) {
			return getRuleContext(SelectorContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(LessParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(LessParser.COMMA, i);
		}
		public SelectorsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_selectors; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof LessParserListener ) ((LessParserListener)listener).enterSelectors(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof LessParserListener ) ((LessParserListener)listener).exitSelectors(this);
		}
	}

	public final SelectorsContext selectors() throws RecognitionException {
		SelectorsContext _localctx = new SelectorsContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_selectors);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(234);
			selector();
			setState(239);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(235);
				match(COMMA);
				setState(236);
				selector();
				}
				}
				setState(241);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SelectorContext extends ParserRuleContext {
		public List<ElementContext> element() {
			return getRuleContexts(ElementContext.class);
		}
		public ElementContext element(int i) {
			return getRuleContext(ElementContext.class,i);
		}
		public List<SelectorPrefixContext> selectorPrefix() {
			return getRuleContexts(SelectorPrefixContext.class);
		}
		public SelectorPrefixContext selectorPrefix(int i) {
			return getRuleContext(SelectorPrefixContext.class,i);
		}
		public List<AttribContext> attrib() {
			return getRuleContexts(AttribContext.class);
		}
		public AttribContext attrib(int i) {
			return getRuleContext(AttribContext.class,i);
		}
		public PseudoContext pseudo() {
			return getRuleContext(PseudoContext.class,0);
		}
		public SelectorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_selector; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof LessParserListener ) ((LessParserListener)listener).enterSelector(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof LessParserListener ) ((LessParserListener)listener).exitSelector(this);
		}
	}

	public final SelectorContext selector() throws RecognitionException {
		SelectorContext _localctx = new SelectorContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_selector);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(243); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(242);
				element();
				}
				}
				setState(245); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << InterpolationStart) | (1L << DOT) | (1L << PARENTREF) | (1L << HASH) | (1L << TIMES) | (1L << Identifier))) != 0) );
			setState(252);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << GT) | (1L << TIL) | (1L << PLUS))) != 0)) {
				{
				{
				setState(247);
				selectorPrefix();
				setState(248);
				element();
				}
				}
				setState(254);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(258);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==LBRACK) {
				{
				{
				setState(255);
				attrib();
				}
				}
				setState(260);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(262);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COLON || _la==COLONCOLON) {
				{
				setState(261);
				pseudo();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AttribContext extends ParserRuleContext {
		public List<TerminalNode> Identifier() { return getTokens(LessParser.Identifier); }
		public TerminalNode Identifier(int i) {
			return getToken(LessParser.Identifier, i);
		}
		public AttribRelateContext attribRelate() {
			return getRuleContext(AttribRelateContext.class,0);
		}
		public TerminalNode StringLiteral() { return getToken(LessParser.StringLiteral, 0); }
		public AttribContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_attrib; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof LessParserListener ) ((LessParserListener)listener).enterAttrib(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof LessParserListener ) ((LessParserListener)listener).exitAttrib(this);
		}
	}

	public final AttribContext attrib() throws RecognitionException {
		AttribContext _localctx = new AttribContext(_ctx, getState());
		enterRule(_localctx, 46, RULE_attrib);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(264);
			match(LBRACK);
			setState(265);
			match(Identifier);
			setState(269);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << EQ) | (1L << PIPE_EQ) | (1L << TILD_EQ))) != 0)) {
				{
				setState(266);
				attribRelate();
				setState(267);
				_la = _input.LA(1);
				if ( !(_la==Identifier || _la==StringLiteral) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
			}

			setState(271);
			match(RBRACK);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PseudoContext extends ParserRuleContext {
		public TerminalNode Identifier() { return getToken(LessParser.Identifier, 0); }
		public TerminalNode COLON() { return getToken(LessParser.COLON, 0); }
		public TerminalNode COLONCOLON() { return getToken(LessParser.COLONCOLON, 0); }
		public PseudoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_pseudo; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof LessParserListener ) ((LessParserListener)listener).enterPseudo(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof LessParserListener ) ((LessParserListener)listener).exitPseudo(this);
		}
	}

	public final PseudoContext pseudo() throws RecognitionException {
		PseudoContext _localctx = new PseudoContext(_ctx, getState());
		enterRule(_localctx, 48, RULE_pseudo);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(273);
			_la = _input.LA(1);
			if ( !(_la==COLON || _la==COLONCOLON) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(274);
			match(Identifier);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ElementContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode PARENTREF() { return getToken(LessParser.PARENTREF, 0); }
		public ElementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_element; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof LessParserListener ) ((LessParserListener)listener).enterElement(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof LessParserListener ) ((LessParserListener)listener).exitElement(this);
		}
	}

	public final ElementContext element() throws RecognitionException {
		ElementContext _localctx = new ElementContext(_ctx, getState());
		enterRule(_localctx, 50, RULE_element);
		try {
			setState(283);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case InterpolationStart:
			case Identifier:
				enterOuterAlt(_localctx, 1);
				{
				setState(276);
				identifier();
				}
				break;
			case HASH:
				enterOuterAlt(_localctx, 2);
				{
				setState(277);
				match(HASH);
				setState(278);
				identifier();
				}
				break;
			case DOT:
				enterOuterAlt(_localctx, 3);
				{
				setState(279);
				match(DOT);
				setState(280);
				identifier();
				}
				break;
			case PARENTREF:
				enterOuterAlt(_localctx, 4);
				{
				setState(281);
				match(PARENTREF);
				}
				break;
			case TIMES:
				enterOuterAlt(_localctx, 5);
				{
				setState(282);
				match(TIMES);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SelectorPrefixContext extends ParserRuleContext {
		public TerminalNode GT() { return getToken(LessParser.GT, 0); }
		public TerminalNode PLUS() { return getToken(LessParser.PLUS, 0); }
		public TerminalNode TIL() { return getToken(LessParser.TIL, 0); }
		public SelectorPrefixContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_selectorPrefix; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof LessParserListener ) ((LessParserListener)listener).enterSelectorPrefix(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof LessParserListener ) ((LessParserListener)listener).exitSelectorPrefix(this);
		}
	}

	public final SelectorPrefixContext selectorPrefix() throws RecognitionException {
		SelectorPrefixContext _localctx = new SelectorPrefixContext(_ctx, getState());
		enterRule(_localctx, 52, RULE_selectorPrefix);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(285);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << GT) | (1L << TIL) | (1L << PLUS))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AttribRelateContext extends ParserRuleContext {
		public AttribRelateContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_attribRelate; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof LessParserListener ) ((LessParserListener)listener).enterAttribRelate(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof LessParserListener ) ((LessParserListener)listener).exitAttribRelate(this);
		}
	}

	public final AttribRelateContext attribRelate() throws RecognitionException {
		AttribRelateContext _localctx = new AttribRelateContext(_ctx, getState());
		enterRule(_localctx, 54, RULE_attribRelate);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(287);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << EQ) | (1L << PIPE_EQ) | (1L << TILD_EQ))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IdentifierContext extends ParserRuleContext {
		public TerminalNode Identifier() { return getToken(LessParser.Identifier, 0); }
		public List<IdentifierPartContext> identifierPart() {
			return getRuleContexts(IdentifierPartContext.class);
		}
		public IdentifierPartContext identifierPart(int i) {
			return getRuleContext(IdentifierPartContext.class,i);
		}
		public TerminalNode InterpolationStart() { return getToken(LessParser.InterpolationStart, 0); }
		public IdentifierVariableNameContext identifierVariableName() {
			return getRuleContext(IdentifierVariableNameContext.class,0);
		}
		public TerminalNode BlockEnd() { return getToken(LessParser.BlockEnd, 0); }
		public IdentifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_identifier; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof LessParserListener ) ((LessParserListener)listener).enterIdentifier(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof LessParserListener ) ((LessParserListener)listener).exitIdentifier(this);
		}
	}

	public final IdentifierContext identifier() throws RecognitionException {
		IdentifierContext _localctx = new IdentifierContext(_ctx, getState());
		enterRule(_localctx, 56, RULE_identifier);
		int _la;
		try {
			setState(305);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Identifier:
				enterOuterAlt(_localctx, 1);
				{
				setState(289);
				match(Identifier);
				setState(293);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==InterpolationStartAfter || _la==IdentifierAfter) {
					{
					{
					setState(290);
					identifierPart();
					}
					}
					setState(295);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
				break;
			case InterpolationStart:
				enterOuterAlt(_localctx, 2);
				{
				setState(296);
				match(InterpolationStart);
				setState(297);
				identifierVariableName();
				setState(298);
				match(BlockEnd);
				setState(302);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==InterpolationStartAfter || _la==IdentifierAfter) {
					{
					{
					setState(299);
					identifierPart();
					}
					}
					setState(304);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IdentifierPartContext extends ParserRuleContext {
		public TerminalNode InterpolationStartAfter() { return getToken(LessParser.InterpolationStartAfter, 0); }
		public IdentifierVariableNameContext identifierVariableName() {
			return getRuleContext(IdentifierVariableNameContext.class,0);
		}
		public TerminalNode BlockEnd() { return getToken(LessParser.BlockEnd, 0); }
		public TerminalNode IdentifierAfter() { return getToken(LessParser.IdentifierAfter, 0); }
		public IdentifierPartContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_identifierPart; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof LessParserListener ) ((LessParserListener)listener).enterIdentifierPart(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof LessParserListener ) ((LessParserListener)listener).exitIdentifierPart(this);
		}
	}

	public final IdentifierPartContext identifierPart() throws RecognitionException {
		IdentifierPartContext _localctx = new IdentifierPartContext(_ctx, getState());
		enterRule(_localctx, 58, RULE_identifierPart);
		try {
			setState(312);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case InterpolationStartAfter:
				enterOuterAlt(_localctx, 1);
				{
				setState(307);
				match(InterpolationStartAfter);
				setState(308);
				identifierVariableName();
				setState(309);
				match(BlockEnd);
				}
				break;
			case IdentifierAfter:
				enterOuterAlt(_localctx, 2);
				{
				setState(311);
				match(IdentifierAfter);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IdentifierVariableNameContext extends ParserRuleContext {
		public TerminalNode Identifier() { return getToken(LessParser.Identifier, 0); }
		public TerminalNode IdentifierAfter() { return getToken(LessParser.IdentifierAfter, 0); }
		public IdentifierVariableNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_identifierVariableName; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof LessParserListener ) ((LessParserListener)listener).enterIdentifierVariableName(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof LessParserListener ) ((LessParserListener)listener).exitIdentifierVariableName(this);
		}
	}

	public final IdentifierVariableNameContext identifierVariableName() throws RecognitionException {
		IdentifierVariableNameContext _localctx = new IdentifierVariableNameContext(_ctx, getState());
		enterRule(_localctx, 60, RULE_identifierVariableName);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(314);
			_la = _input.LA(1);
			if ( !(_la==Identifier || _la==IdentifierAfter) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PropertyContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode COLON() { return getToken(LessParser.COLON, 0); }
		public ValuesContext values() {
			return getRuleContext(ValuesContext.class,0);
		}
		public PropertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_property; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof LessParserListener ) ((LessParserListener)listener).enterProperty(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof LessParserListener ) ((LessParserListener)listener).exitProperty(this);
		}
	}

	public final PropertyContext property() throws RecognitionException {
		PropertyContext _localctx = new PropertyContext(_ctx, getState());
		enterRule(_localctx, 62, RULE_property);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(316);
			identifier();
			setState(317);
			match(COLON);
			setState(318);
			values();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ValuesContext extends ParserRuleContext {
		public List<CommandStatementContext> commandStatement() {
			return getRuleContexts(CommandStatementContext.class);
		}
		public CommandStatementContext commandStatement(int i) {
			return getRuleContext(CommandStatementContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(LessParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(LessParser.COMMA, i);
		}
		public ValuesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_values; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof LessParserListener ) ((LessParserListener)listener).enterValues(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof LessParserListener ) ((LessParserListener)listener).exitValues(this);
		}
	}

	public final ValuesContext values() throws RecognitionException {
		ValuesContext _localctx = new ValuesContext(_ctx, getState());
		enterRule(_localctx, 64, RULE_values);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(320);
			commandStatement();
			setState(325);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(321);
				match(COMMA);
				setState(322);
				commandStatement();
				}
				}
				setState(327);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class UrlContext extends ParserRuleContext {
		public TerminalNode UrlStart() { return getToken(LessParser.UrlStart, 0); }
		public TerminalNode Url() { return getToken(LessParser.Url, 0); }
		public TerminalNode UrlEnd() { return getToken(LessParser.UrlEnd, 0); }
		public UrlContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_url; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof LessParserListener ) ((LessParserListener)listener).enterUrl(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof LessParserListener ) ((LessParserListener)listener).exitUrl(this);
		}
	}

	public final UrlContext url() throws RecognitionException {
		UrlContext _localctx = new UrlContext(_ctx, getState());
		enterRule(_localctx, 66, RULE_url);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(328);
			match(UrlStart);
			setState(329);
			match(Url);
			setState(330);
			match(UrlEnd);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MeasurementContext extends ParserRuleContext {
		public TerminalNode Number() { return getToken(LessParser.Number, 0); }
		public TerminalNode Unit() { return getToken(LessParser.Unit, 0); }
		public MeasurementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_measurement; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof LessParserListener ) ((LessParserListener)listener).enterMeasurement(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof LessParserListener ) ((LessParserListener)listener).exitMeasurement(this);
		}
	}

	public final MeasurementContext measurement() throws RecognitionException {
		MeasurementContext _localctx = new MeasurementContext(_ctx, getState());
		enterRule(_localctx, 68, RULE_measurement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(332);
			match(Number);
			setState(334);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Unit) {
				{
				setState(333);
				match(Unit);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3\u0091\u0153\4\2\t"+
		"\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\3\2\7\2J\n\2\f\2\16\2M\13\2\3\3\3\3\3\3\3\3\3"+
		"\3\3\3\5\3U\n\3\3\4\3\4\3\4\3\4\5\4[\n\4\3\5\6\5^\n\5\r\5\16\5_\3\5\5"+
		"\5c\n\5\3\6\3\6\3\7\3\7\3\7\3\b\3\b\3\b\3\b\3\b\5\bo\n\b\3\b\3\b\3\b\3"+
		"\b\3\b\3\b\5\bw\n\b\3\t\3\t\3\t\5\t|\n\t\3\t\3\t\3\n\3\n\3\n\7\n\u0083"+
		"\n\n\f\n\16\n\u0086\13\n\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13"+
		"\5\13\u0091\n\13\3\f\3\f\3\f\3\f\3\f\5\f\u0098\n\f\3\r\3\r\3\r\3\r\3\16"+
		"\3\16\3\16\5\16\u00a1\n\16\3\16\3\16\3\17\3\17\3\17\3\17\5\17\u00a9\n"+
		"\17\3\20\3\20\3\20\7\20\u00ae\n\20\f\20\16\20\u00b1\13\20\3\21\3\21\3"+
		"\21\3\22\3\22\3\22\3\22\3\22\3\22\7\22\u00bc\n\22\f\22\16\22\u00bf\13"+
		"\22\3\22\5\22\u00c2\n\22\3\22\3\22\3\23\3\23\3\23\3\23\3\23\7\23\u00cb"+
		"\n\23\f\23\16\23\u00ce\13\23\5\23\u00d0\n\23\3\23\5\23\u00d3\n\23\3\23"+
		"\3\23\5\23\u00d7\n\23\3\23\3\23\3\24\3\24\3\24\3\25\3\25\5\25\u00e0\n"+
		"\25\3\26\3\26\3\26\5\26\u00e5\n\26\3\26\3\26\5\26\u00e9\n\26\3\26\3\26"+
		"\3\27\3\27\3\27\7\27\u00f0\n\27\f\27\16\27\u00f3\13\27\3\30\6\30\u00f6"+
		"\n\30\r\30\16\30\u00f7\3\30\3\30\3\30\7\30\u00fd\n\30\f\30\16\30\u0100"+
		"\13\30\3\30\7\30\u0103\n\30\f\30\16\30\u0106\13\30\3\30\5\30\u0109\n\30"+
		"\3\31\3\31\3\31\3\31\3\31\5\31\u0110\n\31\3\31\3\31\3\32\3\32\3\32\3\33"+
		"\3\33\3\33\3\33\3\33\3\33\3\33\5\33\u011e\n\33\3\34\3\34\3\35\3\35\3\36"+
		"\3\36\7\36\u0126\n\36\f\36\16\36\u0129\13\36\3\36\3\36\3\36\3\36\7\36"+
		"\u012f\n\36\f\36\16\36\u0132\13\36\5\36\u0134\n\36\3\37\3\37\3\37\3\37"+
		"\3\37\5\37\u013b\n\37\3 \3 \3!\3!\3!\3!\3\"\3\"\3\"\7\"\u0146\n\"\f\""+
		"\16\"\u0149\13\"\3#\3#\3#\3#\3$\3$\5$\u0151\n$\3$\2\2%\2\4\6\b\n\f\16"+
		"\20\22\24\26\30\32\34\36 \"$&(*,.\60\62\64\668:<>@BDF\2\n\3\2\32\36\4"+
		"\2\23\23\66\66\6\2\16\16\20\20 !##\3\2\678\4\2\21\21\31\31\4\2\16\17\32"+
		"\32\3\2#%\4\2\67\67\u0091\u0091\2\u015f\2K\3\2\2\2\4T\3\2\2\2\6Z\3\2\2"+
		"\2\b]\3\2\2\2\nd\3\2\2\2\ff\3\2\2\2\16v\3\2\2\2\20x\3\2\2\2\22\177\3\2"+
		"\2\2\24\u0090\3\2\2\2\26\u0097\3\2\2\2\30\u0099\3\2\2\2\32\u009d\3\2\2"+
		"\2\34\u00a8\3\2\2\2\36\u00aa\3\2\2\2 \u00b2\3\2\2\2\"\u00b5\3\2\2\2$\u00c5"+
		"\3\2\2\2&\u00da\3\2\2\2(\u00df\3\2\2\2*\u00e1\3\2\2\2,\u00ec\3\2\2\2."+
		"\u00f5\3\2\2\2\60\u010a\3\2\2\2\62\u0113\3\2\2\2\64\u011d\3\2\2\2\66\u011f"+
		"\3\2\2\28\u0121\3\2\2\2:\u0133\3\2\2\2<\u013a\3\2\2\2>\u013c\3\2\2\2@"+
		"\u013e\3\2\2\2B\u0142\3\2\2\2D\u014a\3\2\2\2F\u014e\3\2\2\2HJ\5\4\3\2"+
		"IH\3\2\2\2JM\3\2\2\2KI\3\2\2\2KL\3\2\2\2L\3\3\2\2\2MK\3\2\2\2NU\5\32\16"+
		"\2OU\5 \21\2PQ\5\30\r\2QR\7\22\2\2RU\3\2\2\2SU\5$\23\2TN\3\2\2\2TO\3\2"+
		"\2\2TP\3\2\2\2TS\3\2\2\2U\5\3\2\2\2VW\7\26\2\2W[\5\6\4\2XY\7\26\2\2Y["+
		"\7\67\2\2ZV\3\2\2\2ZX\3\2\2\2[\7\3\2\2\2\\^\5\16\b\2]\\\3\2\2\2^_\3\2"+
		"\2\2_]\3\2\2\2_`\3\2\2\2`b\3\2\2\2ac\5\f\7\2ba\3\2\2\2bc\3\2\2\2c\t\3"+
		"\2\2\2de\t\2\2\2e\13\3\2\2\2fg\5\n\6\2gh\5\b\5\2h\r\3\2\2\2iw\5F$\2jw"+
		"\5:\36\2kl\5:\36\2ln\7\b\2\2mo\5B\"\2nm\3\2\2\2no\3\2\2\2op\3\2\2\2pq"+
		"\7\t\2\2qw\3\2\2\2rw\7:\2\2sw\78\2\2tw\5D#\2uw\5\6\4\2vi\3\2\2\2vj\3\2"+
		"\2\2vk\3\2\2\2vr\3\2\2\2vs\3\2\2\2vt\3\2\2\2vu\3\2\2\2w\17\3\2\2\2xy\7"+
		">\2\2y{\7\b\2\2z|\5B\"\2{z\3\2\2\2{|\3\2\2\2|}\3\2\2\2}~\7\t\2\2~\21\3"+
		"\2\2\2\177\u0084\5\24\13\2\u0080\u0081\t\3\2\2\u0081\u0083\5\24\13\2\u0082"+
		"\u0080\3\2\2\2\u0083\u0086\3\2\2\2\u0084\u0082\3\2\2\2\u0084\u0085\3\2"+
		"\2\2\u0085\23\3\2\2\2\u0086\u0084\3\2\2\2\u0087\u0088\7\b\2\2\u0088\u0089"+
		"\5\26\f\2\u0089\u008a\7\t\2\2\u008a\u0091\3\2\2\2\u008b\u008c\7\65\2\2"+
		"\u008c\u008d\7\b\2\2\u008d\u008e\5\26\f\2\u008e\u008f\7\t\2\2\u008f\u0091"+
		"\3\2\2\2\u0090\u0087\3\2\2\2\u0090\u008b\3\2\2\2\u0091\25\3\2\2\2\u0092"+
		"\u0093\5\b\5\2\u0093\u0094\t\4\2\2\u0094\u0095\5\b\5\2\u0095\u0098\3\2"+
		"\2\2\u0096\u0098\5\b\5\2\u0097\u0092\3\2\2\2\u0097\u0096\3\2\2\2\u0098"+
		"\27\3\2\2\2\u0099\u009a\5\6\4\2\u009a\u009b\7\21\2\2\u009b\u009c\5B\""+
		"\2\u009c\31\3\2\2\2\u009d\u009e\7(\2\2\u009e\u00a0\5\34\17\2\u009f\u00a1"+
		"\5\36\20\2\u00a0\u009f\3\2\2\2\u00a0\u00a1\3\2\2\2\u00a1\u00a2\3\2\2\2"+
		"\u00a2\u00a3\7\22\2\2\u00a3\33\3\2\2\2\u00a4\u00a9\78\2\2\u00a5\u00a6"+
		"\7\'\2\2\u00a6\u00a7\7\u008e\2\2\u00a7\u00a9\7\u008d\2\2\u00a8\u00a4\3"+
		"\2\2\2\u00a8\u00a5\3\2\2\2\u00a9\35\3\2\2\2\u00aa\u00af\7\67\2\2\u00ab"+
		"\u00ac\7\23\2\2\u00ac\u00ae\7\67\2\2\u00ad\u00ab\3\2\2\2\u00ae\u00b1\3"+
		"\2\2\2\u00af\u00ad\3\2\2\2\u00af\u00b0\3\2\2\2\u00b0\37\3\2\2\2\u00b1"+
		"\u00af\3\2\2\2\u00b2\u00b3\5,\27\2\u00b3\u00b4\5\"\22\2\u00b4!\3\2\2\2"+
		"\u00b5\u00bd\7\n\2\2\u00b6\u00b7\5@!\2\u00b7\u00b8\7\22\2\2\u00b8\u00bc"+
		"\3\2\2\2\u00b9\u00bc\5\4\3\2\u00ba\u00bc\5*\26\2\u00bb\u00b6\3\2\2\2\u00bb"+
		"\u00b9\3\2\2\2\u00bb\u00ba\3\2\2\2\u00bc\u00bf\3\2\2\2\u00bd\u00bb\3\2"+
		"\2\2\u00bd\u00be\3\2\2\2\u00be\u00c1\3\2\2\2\u00bf\u00bd\3\2\2\2\u00c0"+
		"\u00c2\5@!\2\u00c1\u00c0\3\2\2\2\u00c1\u00c2\3\2\2\2\u00c2\u00c3\3\2\2"+
		"\2\u00c3\u00c4\7\13\2\2\u00c4#\3\2\2\2\u00c5\u00c6\5,\27\2\u00c6\u00cf"+
		"\7\b\2\2\u00c7\u00cc\5(\25\2\u00c8\u00c9\7\22\2\2\u00c9\u00cb\5(\25\2"+
		"\u00ca\u00c8\3\2\2\2\u00cb\u00ce\3\2\2\2\u00cc\u00ca\3\2\2\2\u00cc\u00cd"+
		"\3\2\2\2\u00cd\u00d0\3\2\2\2\u00ce\u00cc\3\2\2\2\u00cf\u00c7\3\2\2\2\u00cf"+
		"\u00d0\3\2\2\2\u00d0\u00d2\3\2\2\2\u00d1\u00d3\7\6\2\2\u00d2\u00d1\3\2"+
		"\2\2\u00d2\u00d3\3\2\2\2\u00d3\u00d4\3\2\2\2\u00d4\u00d6\7\t\2\2\u00d5"+
		"\u00d7\5&\24\2\u00d6\u00d5\3\2\2\2\u00d6\u00d7\3\2\2\2\u00d7\u00d8\3\2"+
		"\2\2\u00d8\u00d9\5\"\22\2\u00d9%\3\2\2\2\u00da\u00db\7\64\2\2\u00db\u00dc"+
		"\5\22\n\2\u00dc\'\3\2\2\2\u00dd\u00e0\5\6\4\2\u00de\u00e0\5\30\r\2\u00df"+
		"\u00dd\3\2\2\2\u00df\u00de\3\2\2\2\u00e0)\3\2\2\2\u00e1\u00e2\5.\30\2"+
		"\u00e2\u00e4\7\b\2\2\u00e3\u00e5\5B\"\2\u00e4\u00e3\3\2\2\2\u00e4\u00e5"+
		"\3\2\2\2\u00e5\u00e6\3\2\2\2\u00e6\u00e8\7\t\2\2\u00e7\u00e9\7+\2\2\u00e8"+
		"\u00e7\3\2\2\2\u00e8\u00e9\3\2\2\2\u00e9\u00ea\3\2\2\2\u00ea\u00eb\7\22"+
		"\2\2\u00eb+\3\2\2\2\u00ec\u00f1\5.\30\2\u00ed\u00ee\7\23\2\2\u00ee\u00f0"+
		"\5.\30\2\u00ef\u00ed\3\2\2\2\u00f0\u00f3\3\2\2\2\u00f1\u00ef\3\2\2\2\u00f1"+
		"\u00f2\3\2\2\2\u00f2-\3\2\2\2\u00f3\u00f1\3\2\2\2\u00f4\u00f6\5\64\33"+
		"\2\u00f5\u00f4\3\2\2\2\u00f6\u00f7\3\2\2\2\u00f7\u00f5\3\2\2\2\u00f7\u00f8"+
		"\3\2\2\2\u00f8\u00fe\3\2\2\2\u00f9\u00fa\5\66\34\2\u00fa\u00fb\5\64\33"+
		"\2\u00fb\u00fd\3\2\2\2\u00fc\u00f9\3\2\2\2\u00fd\u0100\3\2\2\2\u00fe\u00fc"+
		"\3\2\2\2\u00fe\u00ff\3\2\2\2\u00ff\u0104\3\2\2\2\u0100\u00fe\3\2\2\2\u0101"+
		"\u0103\5\60\31\2\u0102\u0101\3\2\2\2\u0103\u0106\3\2\2\2\u0104\u0102\3"+
		"\2\2\2\u0104\u0105\3\2\2\2\u0105\u0108\3\2\2\2\u0106\u0104\3\2\2\2\u0107"+
		"\u0109\5\62\32\2\u0108\u0107\3\2\2\2\u0108\u0109\3\2\2\2\u0109/\3\2\2"+
		"\2\u010a\u010b\7\f\2\2\u010b\u010f\7\67\2\2\u010c\u010d\58\35\2\u010d"+
		"\u010e\t\5\2\2\u010e\u0110\3\2\2\2\u010f\u010c\3\2\2\2\u010f\u0110\3\2"+
		"\2\2\u0110\u0111\3\2\2\2\u0111\u0112\7\r\2\2\u0112\61\3\2\2\2\u0113\u0114"+
		"\t\6\2\2\u0114\u0115\7\67\2\2\u0115\63\3\2\2\2\u0116\u011e\5:\36\2\u0117"+
		"\u0118\7\30\2\2\u0118\u011e\5:\36\2\u0119\u011a\7\24\2\2\u011a\u011e\5"+
		":\36\2\u011b\u011e\7\27\2\2\u011c\u011e\7\33\2\2\u011d\u0116\3\2\2\2\u011d"+
		"\u0117\3\2\2\2\u011d\u0119\3\2\2\2\u011d\u011b\3\2\2\2\u011d\u011c\3\2"+
		"\2\2\u011e\65\3\2\2\2\u011f\u0120\t\7\2\2\u0120\67\3\2\2\2\u0121\u0122"+
		"\t\b\2\2\u01229\3\2\2\2\u0123\u0127\7\67\2\2\u0124\u0126\5<\37\2\u0125"+
		"\u0124\3\2\2\2\u0126\u0129\3\2\2\2\u0127\u0125\3\2\2\2\u0127\u0128\3\2"+
		"\2\2\u0128\u0134\3\2\2\2\u0129\u0127\3\2\2\2\u012a\u012b\7\7\2\2\u012b"+
		"\u012c\5> \2\u012c\u0130\7\13\2\2\u012d\u012f\5<\37\2\u012e\u012d\3\2"+
		"\2\2\u012f\u0132\3\2\2\2\u0130\u012e\3\2\2\2\u0130\u0131\3\2\2\2\u0131"+
		"\u0134\3\2\2\2\u0132\u0130\3\2\2\2\u0133\u0123\3\2\2\2\u0133\u012a\3\2"+
		"\2\2\u0134;\3\2\2\2\u0135\u0136\7\u0090\2\2\u0136\u0137\5> \2\u0137\u0138"+
		"\7\13\2\2\u0138\u013b\3\2\2\2\u0139\u013b\7\u0091\2\2\u013a\u0135\3\2"+
		"\2\2\u013a\u0139\3\2\2\2\u013b=\3\2\2\2\u013c\u013d\t\t\2\2\u013d?\3\2"+
		"\2\2\u013e\u013f\5:\36\2\u013f\u0140\7\21\2\2\u0140\u0141\5B\"\2\u0141"+
		"A\3\2\2\2\u0142\u0147\5\b\5\2\u0143\u0144\7\23\2\2\u0144\u0146\5\b\5\2"+
		"\u0145\u0143\3\2\2\2\u0146\u0149\3\2\2\2\u0147\u0145\3\2\2\2\u0147\u0148"+
		"\3\2\2\2\u0148C\3\2\2\2\u0149\u0147\3\2\2\2\u014a\u014b\7\'\2\2\u014b"+
		"\u014c\7\u008e\2\2\u014c\u014d\7\u008d\2\2\u014dE\3\2\2\2\u014e\u0150"+
		"\79\2\2\u014f\u0151\7\5\2\2\u0150\u014f\3\2\2\2\u0150\u0151\3\2\2\2\u0151"+
		"G\3\2\2\2\'KTZ_bnv{\u0084\u0090\u0097\u00a0\u00a8\u00af\u00bb\u00bd\u00c1"+
		"\u00cc\u00cf\u00d2\u00d6\u00df\u00e4\u00e8\u00f1\u00f7\u00fe\u0104\u0108"+
		"\u010f\u011d\u0127\u0130\u0133\u013a\u0147\u0150";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}