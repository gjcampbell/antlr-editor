
import Lexer from './calculatorLexer.js';
import Parser from './calculatorParser.js';
import Visitor from './calculatorVisitor.js';
import main from '../../../client/grammar-main.js';

main.start(Lexer.calculatorLexer, Parser.calculatorParser, Visitor.calculatorVisitor);
