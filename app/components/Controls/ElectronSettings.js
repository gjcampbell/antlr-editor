import settings from 'electron-settings';

class ElectronSettings {
    constructor() {

    }
    get(name) {
        return settings.get(name);
    }
    set(name, value) {
        return settings.set(name, value)
    }
    setSelectedWorkspace(ws) {
        let recentWs = this.get('RecentWorkSpaces') || [],
            wsIndex = recentWs.indexOf(ws);

        this.set('LastWorkSpace', ws);

        if (wsIndex >= 0) {
            recentWs.splice(wsIndex, 1);
        }
        recentWs.unshift(ws);

        this.set('RecentWorkSpaces', recentWs);
    }
}

module.exports = ElectronSettings;