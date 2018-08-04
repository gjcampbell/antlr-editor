import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.css';
import ReactGridLayout from 'react-grid-layout';
import PaneLoader from '../framework/PaneLoader';


import { AppBar, IconButton, IconMenu, MenuItem } from 'material-ui';
import WorkSpaceLoader from './Controls/ElectronWorkSpaceLoader.js';
import Settings from './Controls/ElectronSettings.js';
import antlr from '../actions/Antlr';

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.PaneLoader = new PaneLoader();
        this.Settings = new Settings();

        this.state = {
            Panes: [],
            Width: null,
            WorkSpace: this.Settings.get('LastWorkSpace')
        }

        this.PaneLoader.loadLayout([]);
        this.onWindowResize = () => {
            this.setState({ Width: this.getContainerWidth() }, () => this.PaneLoader.handleResize());
        };
        this.onGridResize = () => {
            this.PaneLoader.handleResize();
        };
    }
    getContainerWidth() {
        return window.document.body.offsetWidth;
    }
    componentWillMount() {
        this.loadWorkspace(this.state.WorkSpace);
        window.addEventListener('resize', this.onWindowResize, false);
        this.setState({
            Width: this.getContainerWidth()
        });
    }

    openWorkSpace() {
        let wsLoader = new WorkSpaceLoader();
        wsLoader.openWorkSpace((result) => this.loadWorkspaceData(result));
    }
    loadWorkspace(ws) {
        let wsLoader = new WorkSpaceLoader();
        wsLoader.loadWorkspace(ws, (result) => this.loadWorkspaceData(result));
    }
    loadWorkspaceData(workspaceData) {
        this.Settings.setSelectedWorkspace(workspaceData.ws);
        this.PaneLoader.Context.set('WorkSpace', workspaceData.ws);
        this.PaneLoader.Context.set('Files', workspaceData.files);
        this.PaneLoader.loadLayout(workspaceData.settings.panes);
        this.setPanes();
    }
    setPanes() {
        this.setState({ Panes: this.PaneLoader.Panes });
    }
    clearPanes() {

    }
    addPane(paneName) {
        this.PaneLoader.loadPane({ Pane: paneName }, true);
        this.setPanes();
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.onWindowResize);
    }

    handleLayoutChanged(layout) {
        let persistableLayout = this.PaneLoader.getLayout(layout);

        antlr.updateWorkspaceSettings({ ws: this.state.WorkSpace, settings: { panes: persistableLayout } });
    }
    
    render() {
        return <div>
            <AppBar style={{ boxShadow: 'none' }} title={this.state.WorkSpace} iconElementLeft={
                <IconButton iconClassName="fa fa-folder-open" onClick={() => this.openWorkSpace()}></IconButton>
            } iconElementRight={
                    <IconMenu iconButtonElement={<IconButton iconClassName="fa fa-plus" tooltip="Add a Tool" />}>
                        {
                            this.PaneLoader.getPaneTypeNames().map(type => <MenuItem primaryText={type.ufName} key={type.name} onClick={() => this.addPane(type.name)} />)
                        }
                    </IconMenu>
            } onTitleTouchTap={() => { }} />
            <ReactGridLayout className="layout" draggableHandle=".draghandle" onLayoutChange={(l) => this.handleLayoutChanged(l)} cols={24} rowHeight={60} width={this.state.Width} onResize={this.onGridResize}>
                {this.state.Panes.map(p => <div key={p.key + 'grid'} data-grid={p.config}>{ p.item }</div>)}
            </ReactGridLayout>
        </div>;
    }
}
