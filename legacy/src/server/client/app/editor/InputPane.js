import React from 'react';
import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/text';
import 'brace/theme/textmate';

class InputPane extends React.Component {
    constructor(props) {
        super(props);

        this.StorageKey = props.Grammar + '$' + props.Rule;
        this.state = {
            Value: this.getStoredValue(),
            focused: false,
            Grammar: props.Grammar,
            Rule: props.Rule,
            Errors: props.Errors,
            AutoRun: true
        };

        this.callValueChanged = props.onValueChanged || (() => {});

        this.onChange = (value) => this.setValue(value);
        this.onFocus = () => this.setState({ focused: true });
        this.onBlur = () => this.setState({ focused: false });
        this.Ace = null;
    }

    setValue(text) {
        sessionStorage.setItem(this.StorageKey, text);
        this.setState({ Value: text, Errors: '' },
            () => {
                if (this.state.AutoRun) {
                    this.callValueChanged(text);
                }
            });
    }

    applyChanges() {
        this.callValueChanged(this.state.Value);
    }

    componentWillReceiveProps(props) {
        this.StorageKey = props.Grammar + '$' + props.Rule;
        
        let storedValue = this.getStoredValue();
        if (this.state.Value !== storedValue) {
            this.setState({
                Value: storedValue
            });
            this.callValueChanged(storedValue);
        }

        if (props.Grammar !== this.state.Grammar) {
            this.setState({ Grammar: props.Grammar });
        }
        if (props.Rule !== this.state.Rule) {
            this.setState({ Rule: props.Rule });
        }
        if (props.Errors !== this.state.Errors) {
            this.setState({ Errors: props.Errors });
        }
    }

    getStoredValue() {
        return sessionStorage.getItem(this.StorageKey) || '';
    }

    handleResize() {
        this.Ace.editor.resize(true);
    }

    setAce(ace) {
        if (!this.Ace) {
            ace.editor.commands.addCommand({
                name: 'RunTest',
                bindKey: { win: 'Ctrl-Enter', mac: 'Command-Enter' },
                exec: () => this.applyChanges()
            });
            this.Ace = ace;
        }
    }

    render() {
        return <div className="grammar-test__input">
            <div className="grammar-test__input-toolbar toolbar">
                <div className="toolbar__left">
                    <span className="toolbar__text">
                        <span>Grammar: <strong>{this.state.Grammar || 'None'}</strong></span> <span>Rule: <strong>{this.state.Rule || 'None'}</strong></span> - Enter test text below.
                    </span>
                </div>
                <div className="toolbar__right">
                    <a href="javascript:" className={'toolbar__item ' + (this.state.AutoRun ? 'toolbar__item--active' : '')} title={this.state.AutoRun ? 'Turn off Autorun' : 'Turn on Autorun'} onClick={() => this.setState({ AutoRun: !this.state.AutoRun })}><i className="fa fa-pause-circle"></i></a>
                    <a href="javascript:" className="toolbar__item" title="Run" onClick={() => this.applyChanges()}><i className="fa fa-play"></i></a>
                </div>
            </div>
            <AceEditor ref={ace => this.setAce(ace)} mode="text" theme="textmate" value={this.state.Value} onChange={this.onChange} height="100%" width="100%" name="test" onFocus={this.onFocus} onBlur={this.onBlur} />
            <div className="grammar-test__input-error">
                Issues: { typeof this.state.Errors === 'string' ? this.state.Errors : 'none'}
            </div>
        </div>;

    }
}

module.exports = InputPane;