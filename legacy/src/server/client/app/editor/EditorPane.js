import React from 'react';
import brace from 'brace';
import AceEditor from 'react-ace';
import $ from 'jquery';

import '../ace/mode/antlr4.js';
import '../ace/mode/antlr4.scss';

class EditorPane extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            Grammar: '',
            GrammarName: ''
        };
        this.onChange = (value) => { 
            this.setState({ Grammar: value });
            this.callValueChanged(value);
        }

        this.callCompileKeyed = props.onCompileKeyed || (() => { });

        this.callValueChanged = props.onValueChanged || (() => { });
        this.callRuleSelected = props.onRuleSelected || (() => { });
        this.BoundAce = false;
        this.Ace = null;
    }
    setAce(ace) {
        if (!this.BoundAce) {
            this.Ace = ace;
            this.BoundAce = true;

            ace.editor.commands.addCommand({
                name: 'Compile',
                bindKey: { win: 'Ctrl-Enter', mac: 'Command-Enter' },
                exec: () => this.callCompileKeyed()
            });

            let selection = ace.editor.getSelection();
            selection.on('changeSelection', (event) => {
                let lineNumber = selection.getCursor().row,
                    lineText = ace.editor.session.getLine(lineNumber),
                    ruleMatch = lineText.match(/^[a-z][a-zA-Z0-9_]*/);

                if (ruleMatch) {
                    this.callRuleSelected(ruleMatch[0]);
                }
            });
        }
    }
    flashRule(rule) {
        let ruleRow = this.getRuleRow(rule);

        if (ruleRow) {
            this.Ace.editor.session.removeGutterDecoration(this.FlashedRule, 'ace__gutter__flash');
            this.Ace.editor.scrollToLine(ruleRow, true, false, () => { });
            this.Ace.editor.session.addGutterDecoration(ruleRow, 'ace__gutter__flash');
            this.FlashedRule = ruleRow;
        }
    }
    goToPosition(row, column) {
        this.Ace.editor.gotoLine(row, column, true);
    }
    getRuleRow(rule) {
        let rows = this.state.Grammar.replace(/\r/g, '').split(/\n/g),
            result = 0;

        for (let i = 0; i < rows.length; i++) {
            if (rows[i].match(new RegExp(`^(${rule}\\s|${rule}$)`))) {
                result = i;
                break;
            }
        }

        return result;
    }
    handleResize() {
        this.Ace.editor.resize(true);
    }
    render() {
        return <div className="editor-pane">
                <AceEditor mode="antlr4" theme="antlr4" value={this.state.Grammar} onChange={this.onChange} ref={ace => this.setAce(ace)} name="editor" width="100%" height="100%" />
            </div>;

    }
}

module.exports = EditorPane;