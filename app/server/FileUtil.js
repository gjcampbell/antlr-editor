var fs = require('fs'),
	path = require('path'),
	defaultWorkspaceSettings = require('./WorkspaceDefaults');

var outputPath = path.resolve(__dirname, './output'),
	sandboxPath = path.resolve(__dirname, './sandbox'),
	settingsFolderName = '.seaquail';

class FileUtil {
	static saveFiles(outputPath, files, callback) {
		let fileList = files.slice(),
            writeFile = (f) => {
            	let filePath = path.resolve(outputPath, `./${f.name}`),
                    nextFile = fileList.shift();

            	fs.writeFile(filePath, f.text, (err) => {
            		if (err) {
            			console.error(err);
            			callback({ success: false });
            		}

            		if (nextFile) {
            			writeFile(nextFile);
            		} else {
            			callback({ success: true });
            		}
            	});
            }

		if (!fs.existsSync(outputPath)) {
			fs.mkdirSync(outputPath);
		}

		writeFile(fileList.shift());
	}
	static getOutputDir(ws) {
		return path.resolve(FileUtil.getWorkSpaceDir(ws), './output');
	}
	static getWorkSpaceDir(ws) {
		return ws === 'None' ? sandboxPath : ws;
	}
	static getWorkSpaceFiles(ws) {
		let files = fs.readdirSync(FileUtil.getWorkSpaceDir(ws));

		return files.filter(f => f.match(/.g4$/)).map(f => ({
			name: f,
			text: fs.readFileSync(path.resolve(ws, './' + f), 'utf8')
		}));
	}
	static getWorkspaceSettings(ws) {
		let workingDir = FileUtil.getWorkSpaceDir(ws),
            settingsDir = path.resolve(workingDir, './' + settingsFolderName),
            settingsFilePath = path.resolve(settingsDir, './settings.json');

		if (!fs.existsSync(settingsDir)) {
			fs.mkdirSync(settingsDir);
		}

		if (!fs.existsSync(settingsFilePath)) {
			fs.writeFileSync(settingsFilePath, JSON.stringify(defaultWorkspaceSettings));
		}

		return JSON.parse(fs.readFileSync(settingsFilePath));
    }
    static setWorkspaceSettings(ws, settings) {
        let workingDir = FileUtil.getWorkSpaceDir(ws),
            settingsDir = path.resolve(workingDir, './' + settingsFolderName),
            settingsFilePath = path.resolve(settingsDir, `./settings.json`);
        
        fs.writeFileSync(settingsFilePath, JSON.stringify(settings));
    }
}

module.exports = FileUtil;