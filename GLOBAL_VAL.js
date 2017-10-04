/**
 * @Author: bitzo
 * @Date: 17-10-4 下午6:45
 * @Last Modified by: bitzo
 * @Last Modified time: 17-10-4 下午6:45
 * @Function:
 */

global.APP_PATH = __dirname;

global.appRequire = function(path) {
    return require(require('path').resolve(__dirname, path));
};

global.errAlert = function (errMsg, location) {
    console.log('=====ERROR=========================================================================');
    console.log('| ' + location + ' : ');
    console.log('| ');
    console.log('| ' + errMsg);
    console.log('| ');
    console.log('===================================================================================');
};