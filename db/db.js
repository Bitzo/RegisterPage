/**
 * @Author: bitzo
 * @Date: 17-10-4 下午6:03
 * @Last Modified by: bitzo
 * @Last Modified time: 17-10-4 下午6:03
 * @Function:
 */
let mysql = require('mysql'),
    config = require(APP_PATH + '/config/config'),
    dbPool = mysql.createPool(config.mysql);

exports.mysqlPool = dbPool;