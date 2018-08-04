import React from 'react';
import styles from './BasePane.scss';
import { ContextWrapper } from '../../framework/Context';
import { Toolbar, ToolbarTitle } from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import Paper from 'material-ui/Paper';

let keySequence = 0;

class BasePane extends React.Component {
    constructor(props) {
        super(props);

        this.PaneDimensions = props.PaneDimensions;
        this.UfName = props.UfName;
        this.Key = "basepane" + (++keySequence);
        this.ContextWrapper = new ContextWrapper(this.props.Context, null, this);
        this.getContext = () => this.ContextWrapper.Wrapper;
    }
    componentWillMount() {
        this.init();
    }
    componentWillUnmount() {
        this.ContextWrapper.disposeSubscriptions();
        this.dispose();
    }
    render() {
        return <Paper zDepth={1} className={styles.container}>
            <div className="title draghandle">
                <Toolbar style={{ borderBottom: 'solid 1px #e8e8e8' }}>
                    <ToolbarTitle style={{}} text={this.UfName} />
                    {this.getToolbarLeft()}
                    {this.getToolbarRight()}
                </Toolbar>
            </div>
            <div className={styles.paneWrapper}>
                {this.getPaneContent()}
            </div>
        </Paper>;
    }

    init() {

    }
    dispose() {

    }
    saveLayoutSettings() {
        return null;
    }
    handleResize() {

    }
    getPaneContent() {
        return <div>empty pane :(</div>
    }
    getToolbarLeft() {
        
    }
    getToolbarRight() {

    }
}

module.exports = BasePane;