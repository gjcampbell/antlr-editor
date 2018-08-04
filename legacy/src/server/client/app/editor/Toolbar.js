import React from 'react';

import 'font-awesome/scss/font-awesome.scss';

class Toolbar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: props.isLoading
        };

        this.Props = props;
    }
    componentWillReceiveProps(props) {
        this.setState({ isLoading: props.isLoading });
    }
    render() {
        return <div className="toolbar">
            <a className="toolbar__item" href="javascript:" onClick={this.Props.onCompileClicked} title="Compile"><i className={'fa fa-cog' + (this.state.isLoading ? ' fa-spin' : '')}></i></a>
        </div>;
    }
}

module.exports = Toolbar;