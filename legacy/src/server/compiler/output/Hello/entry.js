
import Lexer from './HelloLexer.js';
import Parser from './HelloParser.js';
import Visitor from './HelloVisitor.js';
import main from '../../../client/grammar-main.js';

main.start(Lexer.HelloLexer, Parser.HelloParser, Visitor.HelloVisitor);
