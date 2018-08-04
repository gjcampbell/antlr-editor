import React from 'react';
import BasePane from './BasePane';
import 'railroad-diagrams/railroad-diagrams.js';
import antlr from '../../actions/Antlr';

import styles from './RailroadViewer.scss';


class RailroadViewer extends BasePane {
    constructor(props) {
        super(props);

        this.state = {
            RailroadScript: ''
        };

        this.SelectedRule = this.getContext().create('SelectedRule');
        this.SelectedRule.changed(() => {
            this.updateRailroad();
        });
    }

    updateRailroad() {
        let rule = this.SelectedRule();
        antlr.getRailroadDiagramData(rule).then((result) => {
            this.setState({ RailroadScript: this.getRrdScript(result && result.replace('.addTo(', '.toSVG(')) });
        });
    }
    getRrdScript(script) {
        return `(() => { var {Diagram, ComplexDiagram, Sequence, Stack, OptionalSequence, Choice, MultipleChoice, Optional, OneOrMore, ZeroOrMore, Terminal, NonTerminal, Comment, Skip} = require('railroad-diagrams/railroad-diagrams.js');  return (${script || '{}'}).outerHTML; })()`;
    }
    static get DefaultDimensions() {
        return { w: 12, h: 7 };
    }
    static get UserFriendlyName() {
        return 'Railroad Diagram';
    }
    getPaneContent() {
        return <div className={styles.container}><div dangerouslySetInnerHTML={{ __html: eval(this.state.RailroadScript) }}></div></div>
    }
}

module.exports = RailroadViewer;