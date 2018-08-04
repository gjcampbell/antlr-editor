import $ from 'jquery';

class ElectronServer {
    constructor() {

    }

    call(endpoint, data) {
        let succeed = () => { },
            fail = () => { },
            result = new Promise((s, f) => { succeed = s; fail = f; }),
            [controllerName, actionName] = endpoint.split(/\//),
            controllerType, controller = null,
            error,
            remote = require('electron').remote;

        controllerType = require(`../server/${controllerName}`);//remote.require(`./server/${controllerName}`);

        if (!controllerType) {
            error = `Invalid controller name "${controllerName}"`;
        }

        controller = new controllerType();

        if (!controller[actionName]) {
            error = `Invalid action ${actionName} for controller ${controllerName}`;
        }

        try {controller[actionName](data, succeed);
        } catch (err) {
            error = err;
        }

        if (error) {
            fail(error);
        }

        return result;
    }
}

module.exports = ElectronServer;