ace.define('ace/mode/antlr4_highlight_rules', [
    'require', 'exports', 'module', 'ace/lib/oop', 'ace/mode/text', 'ace/mode/antlr4_highlight_rules'
], (acequire, exports, module) => {
    "use strict";
    
    let oop = acequire('../lib/oop'),
        TextHighlightRules = acequire('./text_highlight_rules').TextHighlightRules;

    let Antlr4HighlightRules = function () {

        this.$rules = {
            start: [
                {
                    token: 'keyword',
                    regex: 'grammar|channels|channel|options|import|lexer|parser|protected|public|private|returns|locals|throws|catch|finally|mode'
                }, {
                    token: 'comment', // comments are not allowed, but who cares?
                    regex: '(\\/\\/|#).*$'
                }, {
                    token: 'comment.start', // comments are not allowed, but who cares?
                    regex: '\\/\\*',
                    next: 'comment'
                }, {
                    token: 'lexer.identifier',
                    regex: '^(fragment )?[A-Z0-9_]+',
                    next: 'function'
                }, {
                    token: 'parser.identifier',
                    regex: '^[a-z][a-zA-Z0-9_]*',
                    next: 'function'
                }, {
                    token: 'keyword.operator',
                    regex: ';\\s*$',
                    next: 'start'
                }
            ],
            comment: [
                {
                    token: 'comment.end',
                    regex: '\\*\\/',
                    next: 'start'
                }, {
                    defaultToken: 'comment'
                }
            ],
            function: [
                {
                    token: 'matcher.char',
                    regex: '\'[^\']+\''
                }, {
                    token: 'matcher.regex',
                    regex: '\\[[^\\]]+\]'
                }, {
                    token: 'keyword.operator',
                    regex: '\\||\\:|\\.\\.|-\\>'
                }, {
                    token: 'plurality',
                    regex: '\\?|\\+|\\*'
                }, {
                    token: 'grouping',
                    regex: '\\(|\\)'
                }, {
                    token: 'keyword.operator',
                    regex: ';\\s*$',
                    next: 'start'
                }, {
                    token: 'comment', // comments are not allowed, but who cares?
                    regex: '(\\/\\/|#).*$'
                }, {
                    token: 'comment.start', // comments are not allowed, but who cares?
                    regex: '\\/\\*',
                    next: 'comment'
                }, {
                    token: 'keyword',
                    regex: 'channel|skip'
                }, {
                    token: 'lexer.use',
                    regex: '[A-Z0-9_]+',
                    next: 'function'
                }, {
                    token: 'parser.use',
                    regex: '[a-z][a-zA-Z0-9_]*',
                    next: 'function'
                }
            ]
        };
    }
    oop.inherits(Antlr4HighlightRules, TextHighlightRules);

    exports.Antlr4HighlightRules = Antlr4HighlightRules;
});

ace.define('ace/mode/antlr4', [
    'require', 'exports', 'module', 'ace/lib/oop', 'ace/mode/text', 'ace/mode/antlr4_highlight_rules'
], (acequire, exports, module) => {
    'use strict';

    let oop = acequire('../lib/oop'),
        TextMode = acequire('./text').Mode,
        Antlr4HighlightRules = acequire('./antlr4_highlight_rules').Antlr4HighlightRules;

    let Mode = function () {
        this.HighlightRules = Antlr4HighlightRules;
        this.$behaviour = this.$defaultBehaviour;
    }
    oop.inherits(Mode, TextMode);

    (function () {
        this.lineCommentStart = '';
        this.$id = 'ace/mode/antlr4';
    }).call(Mode.prototype);

    exports.Mode = Mode;
});

ace.define('ace/theme/antlr4', ['require', 'exports', 'module', 'ace/lib/dom'], (acequire, exports, module) => {
    "use strict";

    exports.isDark = false;
    exports.cssClass = "ace-antlr4";
    exports.cssText = acequire("text!./antlr4.css");

    var dom = acequire("../lib/dom");
    dom.importCssString(exports.cssText, exports.cssClass);
});
