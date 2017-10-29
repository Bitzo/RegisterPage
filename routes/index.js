var express = require('express');
var router = express.Router();

let signRoute = require('./api/signRoute');

/* GET home page. */
router.get('/', function(req, res, next) {
var ip = req.get("X-Real-IP") || req.get("X-Forwarded-For") || req.ip;
console.log(ip);

  res.render('signUp', { title: 'Taffeit科技社 - 报名页面' });
});

router.use('/api', signRoute);

module.exports = router;
