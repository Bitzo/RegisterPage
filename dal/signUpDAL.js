/**
 * @Author: bitzo
 * @Date: 17-10-4 下午6:44
 * @Last Modified by: bitzo
 * @Last Modified time: 17-10-4 下午6:44
 * @Function:
 */

let db = require(APP_PATH + '/db/db');

exports.queryUsers = function (data, callback) {
    let sql = 'select * from signUp where 1=0 ';

    for (let key in data) {
        if (data[key] !== '') {
            sql += ' || ' + key + " = '" + data[key] + "'";
        }
    }

    console.log('查询用户信息：' + sql);

    db.mysqlPool.getConnection(function(err, connection) {
        if (err) {
            errAlert('数据库连接失败！' + err, 'signUpDAL.queryUsers()');
            return callback(true, '连接数据库失败');
        }

        connection.query(sql, function(err, results) {
            connection.release();

            if (err) {
                errAlert('sql 语句：' + err, 'signUpDAL.queryUsers()');
                return callback(true, '查询失败');
            }
            return callback(false, results);
        });
    });
};


exports.addUser = function (userInfo, callback) {
    let sql = "INSERT INTO signUp set ";

    let addSql = '';

    for (let key in userInfo) {
        if (userInfo[key] !== '') {
            if(addSql.length === 0) {
                addSql += key + " = '" + userInfo[key] + "'";
            } else {
                addSql += ' , ' + key + " = '" + userInfo[key] + "'";
            }
        }
    }

    sql += addSql;

    console.log('增加用户信息：' + sql);

    db.mysqlPool.getConnection(function(err, connection) {
        if (err) {
            errAlert('数据库连接失败！' + err, 'userDAL.addUserInfo()');
            return callback(true, '连接数据库失败');
        }

        connection.query(sql, function(err, results) {
            connection.release();

            if (err) {
                errAlert('sql 语句：' + err, 'userDAL.addUserInfo()');
                return callback(true, '增加用户失败');
            }
            return callback(false, results);
        });
    });
};


exports.querySignUp = function (data, callback) {
    let sql = 'select * from signUp where 1=1 ';

    for (let key in data) {
        if (data[key] !== '') {
            sql += ' and ' + key + " = '" + data[key] + "'";
        }
    }

    console.log('查询报名信息：' + sql);

    db.mysqlPool.getConnection(function(err, connection) {
        if (err) {
            errAlert('数据库连接失败！' + err, 'signUpDAL.querySignUp()');
            return callback(true, '连接数据库失败');
        }

        connection.query(sql, function(err, results) {
            connection.release();

            if (err) {
                errAlert('sql 语句：' + err, 'signUpDAL.queryUsers()');
                return callback(true, '查询失败');
            }
            return callback(false, results);
        });
    });
};
