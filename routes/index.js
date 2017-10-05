var express = require('express');
var router = express.Router();

let signRoute = require('./api/signRoute');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('signUp', { title: 'Taffeit科技社 - 报名页面' });
});

router.use('/api', signRoute);

module.exports = router;
