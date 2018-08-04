import React from 'react';
import BasePane from './BasePane';
import { DropDownMenu, MenuItem, ToolbarGroup } from 'material-ui';

import styles from './CompilerConsole.scss';

class CompilerConsole extends BasePane {
    constructor(props) {
        super(props);

        this.state = {
            OutputSource: props.LayoutSettings && props.LayoutSettings.OutputSource || 'Compiler'
        };

        this.CompilerOutput = this.getContext().create('CompilerOutput', []);
        this.TestTextOutput = this.getContext().create('Test Text Output', []);
    }
    static get DefaultDimensions() {
        return { w: 12, h: 3 };
    }
    static get UserFriendlyName() {
        return 'Output';
    }
    saveLayoutSettings() {
        return {
            OutputSource: this.state.OutputSource
        };
    }
    getPaneContent() {
        return <div className={styles.lines}>{this.getOutputLines()}</div>
    }
    getOutputLines() {
        let data = this.getOutputData();
        
        return data.map(o => <div className={styles.line} key={o}>{o}</div>);
    }

    getToolbarLeft() {
        return <ToolbarGroup firstChild={true}>
            <DropDownMenu value={this.state.OutputSource} onChange={(e, i, value) => this.setState({ OutputSource: value })}>
                <MenuItem value={'Compiler'} primaryText="Compiler" />
                <MenuItem value={'Test Text'} primaryText="Test Text" />
            </DropDownMenu>
        </ToolbarGroup>;
    }
    getOutputData() {
        return this.state.OutputSource === 'Compiler' ? this.CompilerOutput()
            : this.state.OutputSource === 'Test Text' ? this.TestTextOutput()
            : [];
    }
}

module.exports = CompilerConsole;