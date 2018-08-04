import React from 'react';
import PubSub from '../infrastructure/PubSub';

class ComponentBase extends React.Component {
    constructor(props) {

        this.subscriptions = [];
    }
    componentWillMount() {
        this.subscriptions = this.getSubscriptions().map(s => {
            return PubSub.subscribe(s.topics, s.handler);
        });
    }
    componentWillUnmount() {
        this.subscriptions.forEach(s => s.dispose());
    }
    getSubscriptions() {
        return []
    }
}

module.exports = ComponentBase;
