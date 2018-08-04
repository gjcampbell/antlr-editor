import ServiceBase from './ServiceBase.js';

class CompilerService extends ServiceBase {
    constructor() {
        super('http://localhost:3000/');
    }
    compile(data) {
        return this.call('compile', data);
    }
    bundle(data) {
        return this.call('bundle', data);
    }
    test(data) {
        return this.call('test', data);
    }
}

module.exports = CompilerService;