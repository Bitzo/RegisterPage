/**
 * @Author: bitzo
 * @Date: 17-10-4 下午6:38
 * @Last Modified by: bitzo
 * @Last Modified time: 17-10-4 下午6:38
 * @Function:
 */

let signUpDAL = require(APP_PATH + '/dal/signUpDAL'),
    moment = require('moment');

exports.queryUsers = (data, callback) => {
    let queryData = {
        'phoneNumber': data.phoneNumber || '',
        'email': data.email || '',
        'QQ': data.QQ || '',
    };

    signUpDAL.queryUsers(queryData, function (err, results) {
        if (err) {
            return callback(true, results);
        }

        return callback(false, results);
    })
};

exports.addSignUp = (data, callback) => {
    let postData = {
        'username': data.username || '',
        'gender': data.gender || '',
        'department': data.department || '',
        'grade': data.grade || '',
        'class': data.className || '',
        'phoneNumber': data.phoneNumber || '',
        'email': data.email || '',
        'QQ': data.QQ || '',
        'personInfo': data.personInfo || '',
        'professionalInfo': data.professionalInfo || '',
        'respect': data.respect || '',
        'createTime': moment().format('YYYY-MM-DD HH:mm:ss'),
        'isActive':1
    };

    signUpDAL.addUser(postData, function (err, results) {
        if (err) {
            return callback(true, results);
        }

        return callback(false, results);
    })
};