
import Lexer from './FunkLexer.js';
import Parser from './FunkParser.js';
import Visitor from './FunkVisitor.js';
import main from '../../../client/grammar-main.js';

main.start(Lexer.FunkLexer, Parser.FunkParser, Visitor.FunkVisitor);
