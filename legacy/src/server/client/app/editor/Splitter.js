import React from 'react';

class Splitter extends React.Component {
    constructor(props) {
        super(props);

        this.IsVertical = props.IsVertical;
        this.FillLatter = !!props.FillLatter;
        this.state = {
            size: props.size
        };
        this.onChange = props.onChange || (() => { });
    }
    
    getSize() {
        return `${this.state.smallPaneSize}px`;
    }

    handleMouseDown(event) {
        event.persist();

        let mouseMove = (evt) => {
                let { clientX, clientY } = evt,
                    delta = (this.IsVertical ? start.x - clientX : start.y - clientY) * (this.FillLatter ? 1 : -1);
                this.setState({
                    size: start.size + delta
                }, () => this.onChange(this.state.size));
            },
            mouseUp = (evt) => {
                window.removeEventListener('mouseup', mouseUp);
                window.removeEventListener('mousemove', mouseMove);
            },
            start = {
                x: event.clientX,
                y: event.clientY,
                size: this.state.size
            };

        window.addEventListener('mousemove', mouseMove);
        window.addEventListener('mouseup', mouseUp);
    }

    render() {

        return <div className={'splitter splitter-' + (this.IsVertical ? 'v' : 'h')} onMouseDown={(evt) => this.handleMouseDown(evt)}></div>;
    }
}

module.exports = Splitter;