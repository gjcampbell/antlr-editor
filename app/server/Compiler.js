var antlr4 = require('antlr4/index'),
    FileUtil = require('./FileUtil'),
    path = require('path'),
    proc = require('child_process'),
    ParserRunner = require('./ParserRunner');


class Compiler {
    static compile(language, workspace, files, internalCompile) {
        let workingDir = FileUtil.getWorkSpaceDir(workspace),
            outputDir = FileUtil.getOutputDir(workspace),
            fileNames = files.map(f => f.name),
            jarPath = path.resolve(__dirname, './server/resources/antlr-4.7-complete.jar'),
            callback = null,
            result = new Promise((succeed, fail) => callback = succeed);

        FileUtil.saveFiles(workingDir, files, (fileResult) => {
            if (!fileResult.success) {
                callback(fileResult);
            } else {
                proc.exec(`java -jar "${jarPath}" ${fileNames.map(fn => `"${fn}"`).join(' ')} -o "${outputDir}" -visitor -Dlanguage=${language || 'JavaScript'}`, { cwd: workingDir }, (error, stdout, stderr) => {
                    if (stderr) {
                        console.log(`stderr: ${stderr}`);
                    }
                    callback({
                        success: !error,
                        details: error,
                        output: stderr
                    });
                    if (!error && internalCompile) {
                        ParserRunner.prepare(outputDir);
                    }
                });
            }
        });

        return result;
    }
}

module.exports = Compiler;