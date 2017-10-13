/**
 * @Author: bitzo
 * @Date: 2017/10/13 9:15
 * @Last Modified by: bitzo
 * @Last Modified time: 2017/10/13 9:15
 * @Function:
 */
let moment = require('moment');

let defend = (ip) => {
    let now = moment().unix();
    if(IP[ip]&&IP[ip].length>=3){
        let ips = IP[ip].slice(-3);
        // console.log(ips);
        let [a, b, c] = ips;

        a = moment(a).unix();
        b = moment(b).unix();
        c = moment(c).unix();

        // console.log('a ', a);
        // console.log('b ', b);
        // console.log('c ', c);

        if(now - c >= 55) {
            return false;
        }

        if(c - b >= 30) {
            return false;
        }

        if(c - a >= 100) {
            return false;
        }

        return true;
    }else{
        return false;
    }
};

module.exports = defend;