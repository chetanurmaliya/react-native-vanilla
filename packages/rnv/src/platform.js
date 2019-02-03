import chalk from 'chalk';
import { isPlatformSupported, getConfig, logComplete, logError, logTask } from './common';


const addPlatform = (platform, program, process) => {
    if (!isPlatformSupported(platform)) return;

    getConfig().then((v) => {
        _runAddPlatform()
            .then(() => logComplete())
            .catch(e => logError(e));
    });
};

const removePlatform = (platform, program, process) => {
    if (!isPlatformSupported(platform)) return;
    console.log('REMOVE_PLATFORM: ', platform);
};

const _runAddPlatform = c => new Promise((resolve, reject) => {
    logTask('runAddPlatform');
    resolve();
});

export { addPlatform, removePlatform };