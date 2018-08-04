import React from 'react';
import ReactDOM from 'react-dom';
import EditorContainer from './app/editor/EditorContainer.js';
import jquery from 'jquery';

import './app/content/styles.scss';

window.$ = jquery;

module.exports = {
    start: () => {
        let host = document.getElementById('host');

        ReactDOM.render(<EditorContainer />, host);
    }
};