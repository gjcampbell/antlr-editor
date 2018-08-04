import React from 'react';
import BasePane from './BasePane';
import * as d3 from 'd3';
//https://bl.ocks.org/d3noob/b024fcce8b4b9264011a1c3e7c7d70dc
import antlr from '../../actions/Antlr';

import styles from './VisitorTree.scss';

class VisitorTree extends BasePane {
    constructor(props) {
        super(props);

        this.state = {
            data: {},
            width: 500,
            height: 500
        };

        this.Value = this.getContext().create('Value', '');
        this.ContainerNode = null;
        this.SvgNode = null;
        this.TestText = this.getContext().create('TestText', '');
        this.SelectedRule = this.getContext().create('SelectedRule', '');
    }
    static get DefaultDimensions() {
        return { w: 12, h: 10 };
    }
    static get UserFriendlyName() {
        return 'Visitor Viewer';
    }
    componentDidUpdate() {
        this.createTree();
    }
    handleResize() {
        this.updateDimensions();
    }
    componentWillMount() {
        this.TestText.changed(() => this.updateVisitorData());
        this.SelectedRule.changed(() => this.updateVisitorData());
    }
    updateVisitorData() {
        let selectedRule = this.SelectedRule(),
            request = {
                ws: this.getContext().get('WorkSpace'),
                name: selectedRule.name,
                rule: selectedRule.rule,
                text: this.TestText()
            };

        antlr.visitInput(request).then((result) => {
            if (result.details) {
                this.getContext().set('Test Text Output', result.details);
            }
            this.setState({ data: result.data });
        });
    }

    static getTreeDepth(data) {
        let result = 0;

        if (data && data.children) {
            for (let i = 0; i < data.children.length; i++) {
                result = Math.max(VisitorTree.getTreeDepth(data.children[i]), result);
            }
        }

        return result + 1;
    }

    static getTreeWidth(data) {
        let result = 0,
            depthSize = {},
            addWidth = (width, level) => {
                if (!depthSize[level]) {
                    depthSize[level] = 0;
                }
                depthSize[level] += width;

                result = Math.max(depthSize[level]);
            },
            descend = (node, level) => {
                if (node && node.children) {
                    addWidth(node.children.length, level);
                    node.children.forEach((c, i) => descend(c, level + 1));
                }
            };

        descend(data, 0, 0);

        return result;
    }

    createTree() {
        let self = this,
            margin = { top: 50, left: 90, right: 90, bottom: 50 },
            treeDepth = VisitorTree.getTreeDepth(this.state.data),
            treeWidth = VisitorTree.getTreeWidth(this.state.data),
            minVertDist = 60,
            minHorizDist = 180,
            nodeWidth = Math.max(this.state.width, treeWidth * minHorizDist),
            nodeHeight = Math.max(this.state.height, treeDepth * minVertDist),
            width = nodeWidth - margin.left - margin.right,
            height = nodeHeight - margin.top - margin.bottom,
            treeChart = d3.tree()
                .size([width, height]),
            nodes = d3.hierarchy(this.state.data);

        nodes = treeChart(nodes);

        d3.select(this.SvgNode).selectAll('*').remove();

        let svg = d3.select(this.SvgNode)
            .style('width', nodeWidth + 'px')
            .style('height', nodeHeight + 'px'),

            g = svg.append('g')
                .attr('transform', `translate(${margin.left},${margin.top})`),

            link = g.selectAll('.link')
                .data(nodes.descendants().slice(1))
                .enter().append('path')
                .attr('class', 'link')
                .attr('d', (d) => {
                    return "M" + d.x + "," + d.y
                        + "C" + d.x + "," + (d.y + d.parent.y) / 2
                        + " " + d.parent.x + "," + (d.y + d.parent.y) / 2
                        + " " + d.parent.x + "," + d.parent.y;
                }),

            node = g.selectAll('.node')
                .data(nodes.descendants())
                .enter().append('g')
                .attr('class', (d) => 'node' + (d.children ? ' node--internal' : ' node--leaf'))
                .attr('transform', (d) => `translate(${d.x},${d.y})`);

        node.append('circle')
            .attr('r', 10)
            .on('click', (d) => self.callRuleClicked(d.data.id));

        node.append('text')
            .attr('dy', '.35em')
            .attr('y', (d) => d.children ? -20 : 20)
            .style('text-anchor', 'middle')
            .text((d) => d.data.name);
    }

    updateDimensions() {
        this.setState({
            height: this.ContainerNode.offsetHeight,
            width: this.ContainerNode.offsetWidth
        }, () => this.createTree());
    }
    getPaneContent() {
        return <div className={styles.container} ref={node => this.ContainerNode = node}><svg ref={node => this.SvgNode = node}></svg></div>;
    }
}

module.exports = VisitorTree;