
import Lexer from './DMQFieldLexer.js';
import Parser from './DMQFieldParser.js';
import Visitor from './DMQFieldVisitor.js';
import main from '../../../client/grammar-main.js';

main.start('DMQField', Lexer.DMQFieldLexer, Parser.DMQFieldParser, Visitor.DMQFieldVisitor);
