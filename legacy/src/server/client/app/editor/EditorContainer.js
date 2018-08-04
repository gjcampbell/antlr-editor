import React from 'react';
import ReactDOM from 'react-dom';

import EditorPane from './EditorPane.js';
import Toolbar from './Toolbar.js';
import OutputPane from './OutputPane.js';
import CompilerService from '../server/CompilerService.js';
import InputPane from './InputPane.js';
import VisitorTreeView from './VisitorTreeView.js';
import Splitter from './Splitter.js';

class EditorContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            compilerOutput: [],
            grammarName: '',
            selectedRule: '',
            isCompiling: false,
            error: '',
            testText: '',
            treedata: {},
            consoleOutputSize: 200,
            editorContainerSize: 500,
            testInputSize: 200
        }

        this.onGrammarDefinitionChanged = (value) => this.updateGrammarDefinition(value);
        this.onRuleSelect = (rule) => this.setState({ selectedRule: rule }, () => this.invalidateViewer());
        this.onTestInputChanged = (value) => this.updateTestText(value);
        this.onCompileCommand = () => this.compile();
        this.onViewerRuleClicked = (rule) => this.Editor.flashRule(rule);
        this.onOutputClicked = (line) => this.navigateEditor(line);

        this.GrammarDefinition = '';
        this.Editor = null;
        this.TestInput = null;
        this.Viewer = null;

        this.Compiler = new CompilerService();
    }
    updateGrammarDefinition(value) {
        this.GrammarDefinition = value;
    }

    updateTestText(value) {
        this.setState({ testText: value }, () => this.invalidateViewer())
    }

    navigateEditor(line) {
        let position = EditorContainer.parseRowColumn(line);

        if (position) {
            this.Editor.goToPosition(position.row, position.column);
        }
    }

    static parseRowColumn(value) {
        let matchResult = value.match(/[: ](\d+):(\d+)[: ]/);

        return matchResult ? { row: parseInt(matchResult[1]), column: parseInt(matchResult[2]) } : null;
    }

    invalidateViewer() {
        this.setState({ error: '' });
        this.Compiler.test({ grammar: this.state.grammarName, rule: this.state.selectedRule, text: this.state.testText }).then(result => {
            this.setState({
                error: result.success ? '' : result.details,
                treedata: result.success ? result.data : {}
            });
        })
    }

	compile() {
		this.setState({ isCompiling: true });
		this.resetOutput('Compiling Grammar...');
		this.Compiler.compile({ grammar: this.GrammarDefinition }).then(result => {
			if (result.success) {
                let grammarName = result.grammar;
                this.appendOutput(`Grammar compilation for "${result.grammar}" succeeded.`, result.output);
                this.setState({ grammarName: grammarName, isCompiling: false }, () => {
                    this.invalidateViewer();
                });
			} else {
				this.setState({ isCompiling: false });
				this.appendOutput(`Grammar compilation for "${result.grammar}" failed.`, result.output);
			}
		}, failure => {
			this.setState({ isCompiling: false });
			this.appendOutput('Failed while attempting to compile. Unknown error. ');
		});
	}

	resetOutput(...newLines) {
		this.setState({ compilerOutput: newLines });
	}
	appendOutput(...newLines) {;
		let lines = this.state.compilerOutput;

		lines.push(...newLines);
		this.setState({
			compilerOutput: lines
		});
	}

    render() {
        return <div className="editor-root pane-container pane-container-h">
            <div className="editor-container pane-container pane-container-v pane-section">
                <div className="pane-section editor-container__text">
                    <Toolbar isLoading={this.state.isCompiling} onCompileClicked={this.onCompileCommand} />
                    <EditorPane ref={pane => this.Editor = pane} onValueChanged={this.onGrammarDefinitionChanged} onCompileKeyed={this.onCompileCommand} onRuleSelected={this.onRuleSelect} />
                </div>
                <Splitter IsVertical={false} FillLatter={true} size={this.state.consoleOutputSize} onChange={(size) => { this.setState({ consoleOutputSize: size }); this.Editor.handleResize();} } />
                <div className="pane-section pane-section--dynamic" style={{ height: this.state.consoleOutputSize + 'px' }}>
                    <OutputPane output={this.state.compilerOutput} onLineClicked={(line) => this.onOutputClicked(line)} />
                </div>
            </div>
            <Splitter IsVertical={true} size={this.state.editorContainerSize} onChange={(size) => { this.setState({ editorContainerSize: size }); this.Editor.handleResize(); this.TestInput.handleResize(); this.Viewer.handleResize(); } } />
            <div className="viewer-container pane-container pane-container-v pane-section pane-section--dynamic" style={{ width: `calc(100% - ${this.state.editorContainerSize}px)` }}>
                <div className="pane-section pane-section--dynamic" style={{ height: this.state.testInputSize + 'px' }}>
                    <InputPane ref={pane => this.TestInput = pane} Grammar={this.state.grammarName} Errors={this.state.error} onValueChanged={this.onTestInputChanged} Rule={this.state.selectedRule} />
                </div>
                <Splitter IsVertical={false} size={this.state.testInputSize} onChange={size => this.setState({ testInputSize: size }, () => { this.TestInput.handleResize(); this.Viewer.handleResize(); }) } />
                <div className="pane-section">
                    <VisitorTreeView ref={pane => this.Viewer = pane} data={this.state.treedata} onRuleClicked={this.onViewerRuleClicked} />
                </div>
            </div>
        </div>;
	}
}

module.exports = EditorContainer;