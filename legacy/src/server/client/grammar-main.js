import React from 'react';
import ReactDOM from 'react-dom';
import InputPane from './grammar/InputPane.js';
import VisitorExtender from './grammar/VisitorExtender.js';
import VisitorTreeView from './grammar/VisitorTreeView.js';

import './grammar/styles.scss';

class VisitorVisContainer extends React.Component {
    constructor(props) {
        super(props);

        let extender = new VisitorExtender(props.lexer, props.parser, props.visitor),
            CustomVisitor = extender.extend();

        this.DefaultRule = window.location.hash ? window.location.hash.substring(1)
            : new props.parser().ruleNames[0];
        this.Visitor = new CustomVisitor();        

        this.state = {
            treedata: {},
            grammar: props.name,
            rule: this.DefaultRule,
            testText: '',
            error: ''
        };

        this.inputPaneChanged = (value) => this.updateTestText(value);
        this.selectedRuleChanged = (event) => {
            this.updateRule(event.newURL.split('#')[1]);
        };

        this.InputPane = null;
        this.TreeView = null;

        this.handleViewResized = (event) => {
            if (this.TreeView) {
                this.TreeView.handleViewResized();
            }
        };
    }
    componentWillMount() {
        window.addEventListener('hashchange', this.selectedRuleChanged, false);
        window.addEventListener('resize', this.handleViewResized, false);
    }
    componentWillUnmount() {
        window.removeEventListener('hashchange', this.selectedRuleChanged, false);
        window.removeEventListener('resize', this.handleViewResized, false);
    }

    updateTestText(text) {
        this.setState({
            testText: text,
            treedata: this.tryParse(text, this.state.rule)
        });
    }

    updateRule(rule) {
        this.setState({
            rule: rule,
            treedata: this.tryParse(this.state.testText, rule)
        });
    }

    tryParse(text, rule) {
        try {
            if (text && rule) {
                let result = this.Visitor.parse(text, rule);
                this.setState({ error: '' });
                return result;
            }
        } catch (err) {
            this.setState({ error: err[0] });   
        }

        return {};
    }
    
    render() {
        return <div className="grammar-test__root">
                <InputPane ref={o => this.InputPane = o} Grammar={this.state.grammar} Errors={this.state.error} onValueChanged={this.inputPaneChanged} Rule={this.state.rule} />
                <VisitorTreeView ref={o => this.TreeView = o} data={this.state.treedata} />
            </div>;
    }
}

module.exports = {
    start: (grammarName, Lexer, Parser, Visitor) => {
        let host = document.getElementById('host');

        ReactDOM.render(<VisitorVisContainer name={grammarName} lexer={Lexer} parser={Parser} visitor={Visitor} />, host);
    }
};