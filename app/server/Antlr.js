'use strict';

var fs = require('fs'),
    path = require('path'),
    ParserRunner = require('./ParserRunner.js'),
    FileUtil = require('./FileUtil'),
    antlrGraps = require('antlr4-graps'),
    graps = new antlrGraps.AntlrLanguageSupport(''),
    Compiler = require('./Compiler');

class Antlr {
    constructor() { }
    referenceFile(request, callback) {
        graps.loadGrammar(request.fid, request.text);
        callback();
    }
    dereferenceFile(request, callback) {
        graps.releaseGrammar(request.fid);
        callback();
    }
    updateFile(request, callback) {
        graps.setText(request.fid, request.text);
        callback();
    }
    getRuleAtPosition(request, callback) {
        callback(graps.ruleFromPosition(request.fid, request.column, request.row + 1));
    }
    parse(request, callback) {
        graps.reparse(request.fid);
        callback();
    }
    getRailroadDiagramData(request, callback) {
        let rrdData = graps.getRRDScript(request.fid, request.rule);

        callback(rrdData);
    }
    getWorkSpaceFiles(request, callback) {
        callback(FileUtil.getWorkSpaceFiles(request.ws));
    }
    visitInput(request, callback) {
        let path = FileUtil.getOutputDir(request.ws);

        callback(ParserRunner.parse(path, request.name, request.rule, request.text));
    }
    autocomplete(request, callback) {
        callback(graps.getCodeCompletionCandidates(request.fid, request.column, request.row));
    }
    getWorkspaceSettings(request, callback) {
        let result = FileUtil.getWorkspaceSettings(request.ws);

        callback(result);
    }
    updateWorkspaceSettings(request, callback) {
        let settings = FileUtil.getWorkspaceSettings(request.ws);
        settings = { ...settings, ...request.settings };
        FileUtil.setWorkspaceSettings(request.ws, settings);

        callback();
    }
    compile(request, callback) {
        let { language, workspace, files } = request;

        Compiler.compile(language, workspace, files, true).then(callback);
    }
}

module.exports = Antlr;
