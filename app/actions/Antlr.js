import server from './Server';

class Antlr {
    constructor() {
        let controller = 'Antlr',
            actions = [
                'compile',
                'referenceFile',
                'dereferenceFile',
                'updateFile',
                'parse',
                'getRuleAtPosition',
                'getRailroadDiagramData',
                'generate',
                'visitInput',
                'autocomplete',
                'getWorkspaceSettings',
                'updateWorkspaceSettings',
                'getWorkSpaceFiles'
            ];

        actions.forEach(action => {
            let pendingRequests = {};

            this[action] = (data) => server.call(`${controller}/${action}`, data);
            this[action].throttled = (time = 1, data, id = 'none') => {
                return new Promise((succeed, fail) => {
                    clearTimeout(pendingRequests[id]);
                    pendingRequests[id] = setTimeout(() => {
                        delete pendingRequests[id];
                        server.call(`${controller}/${action}`, data).then(succeed, fail);
                    }, time);
                });
            };
        });
    }
}

module.exports = new Antlr();