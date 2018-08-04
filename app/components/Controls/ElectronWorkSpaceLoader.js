let { dialog } = require('electron').remote;
import antlr from '../../actions/Antlr.js';

class ElectronWorkSpaceLoader {
    constructor() {

    }
    openWorkSpace(callback) {
        let dialogOptions = {
            title: 'Select Workspace',
            properties: ['openDirectory', 'createDirectory'],
            filter: [
                { name: 'Grammar Files', extensions: ['g4'] },
                { name: 'All Files', extensions: ['*'] }
            ]
        };

        dialog.showOpenDialog(dialogOptions, (path) => {
            this.loadWorkspace(path ? path[0] : null, callback);
        });
    }
    loadWorkspace(ws, callback) {
        let result = { ws: 'None', files: null };

        if (ws) {
            let filesRequest = antlr.getWorkSpaceFiles({ ws: ws }),
                settingsRequest = antlr.getWorkspaceSettings({ ws: ws });

            Promise.all([filesRequest, settingsRequest]).then(([files, settings]) => {
                result.ws = ws;
                result.files = files;
                result.settings = settings;

                callback(result);
            });
        } else {
            callback(result);
        }
    }
}

module.exports = ElectronWorkSpaceLoader;