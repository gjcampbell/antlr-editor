import React from 'react';
import { Context } from './Context';

let keySequence = 0;

class PaneLoader {
    constructor() {
        this.Context = new Context();
        this.Panes = [];
    }
    
    loadPane(config, isNew) {
        let PaneType = this.getPaneType(config.Pane);
        if (!config.w && PaneType.DefaultDimensions) {
            config.w = PaneType.DefaultDimensions.w;
            config.h = PaneType.DefaultDimensions.h;
        }
        if (isNew) {
            config.x = this.Panes.length * 2 % 12;
            config.y = Infinity;
        }
        let pane = {
            ref: null,
            item: <PaneType Context={this.Context} UfName={PaneType.UserFriendlyName || config.Pane} LayoutSettings={config.Settings} ref={p => pane.ref = p} />,
            key: 'paneloaderitem' + (++keySequence),
            config: config,
            type: config.Pane
        };
        this.Panes.push(pane);
    }

    loadLayout(panes) {
        this.clearPanes();
        panes.forEach(paneConfig => this.loadPane(paneConfig, false));
    }

    clearPanes() {
        this.Panes.splice(0, this.Panes.length);
    }

    addPane(paneConfig) {
        this.loadPane(paneConfig, true);
    }

    getPanes() {
        // todo: make this dynamic
        return [
            'CompilerConsole', 'Editor', 'InputTest', 'RailroadViewer', 'VisitorTree'
        ];
    }

    getPaneTypeNames() {
        return this.getPanes().map(p => ({ ufName: this.getPaneType(p).UserFriendlyName || p, name: p }));
    }

    getPaneType(typeName) {
        return require('../components/Panes/' + typeName + '.js');
    }

    getLayout(layout) {
        return layout.map((item, i) => ({
            x: item.x, y: item.y, w: item.w, h: item.h,
            Pane: this.Panes[i].type,
            Settings: this.Panes[i].ref && this.Panes[i].ref.saveLayoutSettings()
        }));
    }

    handleResize() {
        this.Panes.forEach((p) => {
            try {
                if (p.ref) {
                    p.ref.handleResize();
                }
            } catch (err) {
                console.error('Pane threw errors while handling resize', p, error);
            }
        });
    }
}

module.exports = PaneLoader;