var express = require('express');
var router = express.Router();

let signUpService = require(APP_PATH+'/service/signUpService');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('signUp', { title: 'Taffeit科技社 - 报名页面' });
});

router.post('/api/signUp', function(req, res, next) {
  console.log(req.body);
  let data = req.body;

  signUpService.queryUsers({
      'QQ': data.QQ,
      'email': data.email,
      'phoneNumber': data.phoneNumber
  }, (err, results) => {
      if(err) {
          res.status(400);
          return res.json({
              status: 400,
              isSuccess: false,
              msg: "提交失败，稍后再试。\n如有疑问，请邮件。"
          })
      }
      console.log(results)

      if(!results){
          res.status(400);
          return res.json({
              status: 400,
              isSuccess: false,
              msg: "提交失败，稍后再试。\n如有疑问，请邮件。"
          })
      }

      if(results.length>0) {
          res.status(400);
          return res.json({
              status: 400,
              isSuccess: false,
              msg: "你已经提交过申请了。\n我们将在百团大战招新结束后一周内回复您\n请耐心等待回复 \n如有疑问，请邮件。"
          })
      }else {
          signUpService.addSignUp(data, (err, results) => {
              if (err) {
                  res.status(400);
                  return res.json({
                      status: 400,
                      isSuccess: false,
                      msg: "提交失败，稍后再试。\n如有疑问，请邮件。"
                  })
              }
              if (results && results.affectedRows > 0) {
                  res.status(200);
                  return res.json({
                      status: 200,
                      isSuccess: true,
                      msg: "提交成功，我们将在百团大战招新结束后一周内回复您。"
                  })

              }else{
                  res.status(400);
                  return res.json({
                      status: 400,
                      isSuccess: false,
                      msg: "提交失败，稍后再试。\n如有疑问，请邮件。"
                  })
              }
          });
      }
  });
});

module.exports = router;
