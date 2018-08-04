'use strict';

const path = require('path');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const Compiler = require('./compiler/compiler.js');
const ParserRunner = require('./compiler/ParserRunner.js');

const app = express();  
const port = 3000;

var corsOptions = {
    origin: 'http://localhost:8080',
    optionsSuccessStatus: 200
};

app.use(bodyParser.json());
app.use(cors(corsOptions));

app.get('/build.js', (req, res) => {
    res.sendFile(path.resolve(__dirname, `../wwwroot/build.js`));
});
app.get('/index.html', (req, res) => {
    res.sendFile(path.resolve(__dirname, `../wwwroot/index.html`));
});

app.post('/compile', (req, res) => {
    var compiler = new Compiler.GrammarCompiler(req.body);
    compiler.compile((result) => {
        res.send(result);
    });
});

app.post('/test', (req, res) => {
    let { grammar, rule, text } = req.body;

    try {
        ParserRunner.clearRequireCache(grammar);
        let result = ParserRunner.parse(grammar, rule, text);

        res.send(result);
    } catch (err) {
        res.send({ success: false, details: err });
    }
});

app.post('/bundle', (req, res) => {
    var compiler = new Compiler.WebPackCompiler(req.body);
    compiler.compile((result) => {
        res.send(result);
    });
});

app.listen(port, (err) => {  
    if (err) {
        return console.log('something bad happened', err);
    }

    console.log(`server is listening on ${port}`);
});

global.fromRoot = (...rel) => {
    return path.resolve(__dirname, ...rel);
};

global.env = require('./env.js')