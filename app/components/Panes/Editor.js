import React from 'react';
import BasePane from './BasePane';
import brace from 'brace';
import 'brace/ext/language_tools';
import AceEditor from 'react-ace';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import Divider from 'material-ui/Divider';
import MenuItem from 'material-ui/MenuItem';
import antlr from '../../actions/Antlr';

import styles from './Editor.css';

import '../../extensions/ace/antlr4.js';
import '../../extensions/ace/antlr4.global.scss';

import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import { ToolbarGroup } from 'material-ui/Toolbar';


class Editor extends BasePane {
    constructor(props) {
        super(props);

        this.state = {
            SelectedFile: null,
            ShowMenu: false,
            MenuOpener: null
        };

        this.SelectedRule = this.getContext().create('SelectedRule', '');
        this.IsCompiling = this.getContext().create('IsCompiling', false);
        this.Files = this.getContext().create('Files', {});
        this.CompilerOutput = this.getContext().create('CompilerOutput', []);
        this.WorkSpace = this.getContext().create('WorkSpace', 'None');
        
        this.onChange = (v) => this.handleChange(v);
        this.Ace = null;
    }
    setAce(ace) {
        if (!this.Ace) {
            this.Ace = ace;
            
            ace.editor.commands.addCommand({
                name: 'Compile',
                bindKey: { win: 'Ctrl-Enter', mac: 'Command-Enter' },
                exec: () => this.compile()
            });

            ace.editor.setOptions({
                enableLiveAutocompletion: true,
                autoScrollEditorIntoView: false
            });

            let selection = ace.editor.getSelection();
            selection.on('changeSelection', (event) => {
                let request = { fid: this.state.SelectedFile, column: selection.getCursor().column, row: selection.getCursor().row };
                antlr.getRuleAtPosition.throttled(500, request).then(([rule, index]) => {
                    this.SelectedRule({ rule: rule, fid: request.fid, name: this.getFileName() });
                });
            });
        }
    }
    compile() {
        let files = this.Files(),
            compileRequest = {
                files: Object.keys(files).map(fid => files[fid]),
                language: 'JavaScript',
                workspace: this.getContext().get('WorkSpace') || 'None'
            },
            compilerOutput = ['Compiling ' + compileRequest.files.map(f => f.name).join(', ')];

        this.CompilerOutput(compilerOutput);
        this.IsCompiling(true);
        antlr.compile(compileRequest).then((result) => {
            if (result.success) {
                this.CompilerOutput(compilerOutput.concat(['Compile finished']));
            } else {
                this.CompilerOutput(compilerOutput.concat(['An error occurred', ...result.output.split('\r\n')]));
            }

            this.IsCompiling(false);
        }, (result) => {
            this.CompilerOutput(['An unknown error occurred.', result]);

            this.IsCompiling(false);
        });
    }
    handleChange(value) {
        let file = this.getFile();

        file.text = value;
        file.name = this.parseFileName(value);

        this.updateFile(file);
    }
    parseFileName(value) {
        let lines = value.split(/\r\n/g);
        for (let i = 0; i < lines.length; i++) {
            let line = lines[i],
                [fullMatch, type, name] = line.match(/^\s*(lexer\s+|parser\s+)?grammar\s+([a-zA-Z0-9-_]+)\s*;/i) || [],
                file = this.getFile(),
                typeName = !type ? ''
                    : type.match('lexer') ? 'Lexer' : 'Parser';

            if (fullMatch) {
                return `${name}.g4`;
            }
        }
    }

    getFile() {
        return this.Files()[this.state.SelectedFile];
    }
    updateFile(file) {
        antlr.updateFile({ fid: this.state.SelectedFile, text: file.text });
        antlr.parse.throttled(500, { fid: this.state.SelectedFile });

        let files = this.Files();
        files[this.state.SelectedFile] = file;
        this.Files(files);
    }
    getFileText() {
        return this.getFile().text;
    }
    getFileName() {
        return this.getFile().name || '[Unknown]';
    }
    componentWillMount() {
        this.loadDefaultFiles();
    }
    componentDidMount() {
        setTimeout(() => {
            this.Ace.editor.resize(true)
            this.Ace.editor.session.FileId = this.state.SelectedFile;
        }, 1);

        this.SelectedRule.changed(() => {
            let rule = this.SelectedRule();
            if (this.state.SelectedFile === rule.fid) {
                this.applyRuleSelection();
            } else {
                this.clearRuleSelection();
            }
        });
    }

    applyRuleSelection() {
        let rule = this.SelectedRule();
    }

    clearRuleSelection() {

    }

    loadDefaultFiles() {
        if (!this.getFileIds().length) {
            this.addFile();
        }
        if (!this.state.SelectedFile) {
            this.selectFile(this.getFileIds()[0].toString());
        }
    }
    selectFile(fid) {
        if (this.state.SelectedFile !== null) {
            antlr.dereferenceFile({ fid: this.state.SelectedFile });
        }

        if (this.Ace && this.Ace.editor && this.Ace.editor.session) {
            this.Ace.editor.session.FileId = this.state.SelectedFile;
        }
        this.setState({ SelectedFile: fid }, () => { antlr.referenceFile({ fid: fid, text: this.getFileText() }); });
        
    }
    addFile() {
        let fileIds = this.getFileIds(),
            files = this.Files(),
            nextId = (!fileIds.length ? 1 : fileIds.reduce((prev, curr) => Math.max(prev, curr), 0)) + 1,
            fid = nextId.toString(),
            newFile = { name: `NewGrammer${nextId}.g4`, text: `grammar NewGrammer${nextId};` };

        files[fid] = newFile;
        this.Files(files);
        this.setState({ SelectedFile: fid });
    }
    getFileIds() {
        return Object.keys(this.Files()).map(fid => parseInt(fid));
    }
    handleResize() {
        if (this.Ace) {
            this.Ace.editor.resize(true);
        }
    }
    static get DefaultDimensions() {
        return { w: 12, h: 10 };
    }
    getPaneContent() {
        return <div className={styles.container}>
            <AceEditor mode="antlr4" theme="antlr4" value={this.getFileText()} onChange={this.onChange} ref={ace => this.setAce(ace)} name="editor" width="100%" height="100%" />
        </div>;
    }
    closeMenu() {
        this.setState({ ShowMenu: false });
    }
    handleMenuRequestClose() {
        this.closeMenu();
    }
    handleMenuOpen(event) {
        this.setState({
            ShowMenu: true,
            MenuOpener: event.currentTarget
        });
    }
    handleSelectFileClicked(fid) {
        this.selectFile(fid);
        this.closeMenu();
    }
    handleAddMenuClicked() {
        this.addFile();
        this.closeMenu();
    }
    handleCompileClicked() {
        this.compile();
    }
    getFileMenu() {
        let files = this.Files(),
            fileMenuItems = Object.keys(this.Files()).map(fid => {
                let file = files[fid];
                return <MenuItem key={this.Key + "fileselector" + fid} primaryText={file.name || '[Unknown]'} onTouchTap={() => this.handleSelectFileClicked(fid)} />
            });
        return fileMenuItems.concat([
            <Divider key={this.Key + "fileselector split1"} />,
            <MenuItem key={this.Key + "fileselector add"} primaryText="Add new file" onTouchTap={() => this.handleAddMenuClicked()} />
        ]);
    }
    getToolbarLeft() {
        return <ToolbarGroup firstChild={true}>
            <FlatButton labelStyle={{ textTransform: 'none'}} label={"File: " + this.getFileName()} primary={true} onTouchTap={(e) => this.handleMenuOpen(e)} />
            <Popover open={this.state.ShowMenu} anchorEl={this.state.MenuOpener} onRequestClose={() => this.handleMenuRequestClose()}>
                <Menu desktop={true}>
                    {this.getFileMenu()}
                </Menu>
            </Popover>            
        </ToolbarGroup>;
    }
    getToolbarRight() {
        return <ToolbarGroup lastChild={true}>
            <IconButton iconClassName={'fa fa-cog ' + (this.IsCompiling() ? 'fa-spin' : '')} onTouchTap={() => this.handleCompileClicked()} label="Compile" />
        </ToolbarGroup>
    }
}

module.exports = Editor;

class AntlrAutoCompleter {
    getCompletions(editor, session, pos, prefix, callback) {
        antlr.autocomplete({ fid: session.FileId, row: pos.row + 1, column: pos.column, prefix: prefix }).then((words) => {
            callback(null, words.map(w => ({
                caption: w.name,
                value: w.name,
                meta: 'static'
            })));
        })
    }
    static initialize() {
        let langTools = brace.acequire('ace/ext/language_tools');
        langTools.addCompleter(new AntlrAutoCompleter());
    }
}

AntlrAutoCompleter.initialize();
