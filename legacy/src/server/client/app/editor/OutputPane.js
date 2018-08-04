import React from 'react';

class OutputPane extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            output: props.output || []
        };
        
        this.callOutputClicked = props.onLineClicked || (() => { });
    }
    componentWillReceiveProps(props) {
        this.setState({ output: props.output });
    }

    render() {
        let rows = [];
        this.state.output.forEach((line, i) => {
            let lineParts = line.split(/\n/);

            lineParts.forEach(l => {
                rows.push(<div className="output-pane__line" onClick={() => this.callOutputClicked(l)} key={l}>{l}</div>);
            });
        });

        return <div className="output-pane">{rows}</div>;
    }
}

module.exports = OutputPane;