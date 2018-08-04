import React from 'react';
import BasePane from './BasePane';
import brace from 'brace';
import AceEditor from 'react-ace';
import { ToolbarGroup, ToolbarTitle } from 'material-ui';

import 'brace/mode/text';
import 'brace/theme/textmate';
import styles from './InputTest.css';

class InputTest extends BasePane {
    constructor(props) {
        super(props);

        this.state = {
            AutoRun: true
        };

        this.TestText = this.getContext().create('TestText', '');
        this.SelectedRule = this.getContext().create('SelectedRule', '');
        this.Ace = null;
    }
    static get DefaultDimensions() {
        return { w: 12, h: 3 };
    }

    handleResize() {
        if (this.Ace) {
            this.Ace.editor.resize(true);
        }
    }

    componentDidMount() {
        setTimeout(() => this.Ace.editor.resize(true), 1);
    }

    setAce(ace) {
        if (!this.Ace) {
            ace.editor.commands.addCommand({
                name: 'RunTestInput',
                bindKey: { win: 'Ctrl-Enter', mac: 'Command-Enter' },
                exec: () => this.applyChanges()
            });
            this.Ace = ace;
        }
    }

    getSelectedRuleName() {
        return !this.SelectedRule() ? '(None)'
            : this.SelectedRule().rule;
    }

    getPaneContent() {
        return <div className={styles.container}>
            <AceEditor ref={ace => this.setAce(ace)} mode="text" theme="textmate" value={this.TestText()} onChange={this.TestText} height="100%" width="100%" name={this.Key} />
        </div>
    }
    getToolbarLeft() {
        return <ToolbarGroup firstChild={true}>
            <ToolbarTitle text={'Selected Rule: ' + (this.getSelectedRuleName()) } />
        </ToolbarGroup>;
    }
}

module.exports = InputTest;