/**
 * @Author: bitzo
 * @Date: 2017/10/5 19:55
 * @Last Modified by: bitzo
 * @Last Modified time: 2017/10/5 19:55
 * @Function:
 */
let express = require('express');
let router = express.Router();
let signUpService = require(APP_PATH+'/service/signUpService');
let moment = require('moment');
let nodemailer = require('nodemailer');

router.post('/signUp', function(req, res, next) {
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

router.get('/signUp', function (req, res) {
    // let url = 'https://taffeit.bitzo.cn',
    let url = '',
        picUrl = url + '/images/bg5.png';
    console.log(picUrl);

    let username = '石玉龙',
        data = moment().format('YYYY 年 M 月 D 日');

    let html = "<head><meta charset=\"utf-8\"><link rel=\"stylesheet\" type=\"text/css\" href=\"" + url + "/stylesheets/email.css\"></head><body><img src=\"/images/bg5.png\" class=\"banner\"><table><tbody><tr><td colspan=\"2\"><h1>Taffeit 科技社</h1></td></tr><tr><td colspan=\"2\"><b>" + username + "</b> 同学您好：</td></tr><tr><td>&nbsp;</td></tr><tr><td width=\"30\"></td><td><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们很高兴的通知您，您提交的“金陵科技学院软件工程学院<b> Taffeit 科技社 </b>”的入社申请已通过，我们诚挚的欢迎您的加入并荣幸您能成为我们的一员。</span><br><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;您可以通过以下方式加入我们的👉<a href=\"https://jq.qq.com/?_wv=1027&k=5NM75Rv\">社团Q群：657105694</a>👈，我们会在社团群内通知第一次社员大会的时间。如有任何问题也可以直接<a href=\"mailto:bitzo@qq.com\">👉邮件联系👈</a></span><br><span>（此邮件不接受回复！如有问题请点击上方的邮件联系或加群后联系。）</span></td></tr><tr><td colspan=\"2\"><div class=\"q\"><img src=\"" + url + "/images/qqun.jpg\" class=\"qun\"></div><div style=\"text-align: center;\" class=\"q\"><p>加群请注明自己的姓名及班级，以便于管理员审核，谢谢！</p></div></td></tr><tr><td>&nbsp;</td></tr><tr><td colspan=\"2\" style=\"text-align: right; padding-right: 30px\"><span>Taffeit 科技社</span><br><span>" + data + "</span></td></tr></tbody></table></body>";


    let transporter = nodemailer.createTransport({
                            host : 'smtp.qq.com',
                            port: 587,
                            secureConnection: true, // 使用 SSL 方式（安全方式，防止被窃取信息）
                            auth : {
                                user : 'bitzo@qq.com',
                                pass : 'imrwklxmzjcibcga'
                            },
                        });
    transporter.verify(function(error, success) {
        if (error) {
            console.log(error);
        } else {
            console.log('Server is ready to take our messages');
        }
    });
    let mailConfig = {
        from: 'bitzo@qq.com',
        to: "bitzo@qq.com",
        subject: "Taffeit 科技社-入社邀请函",
        text: '欢迎加入Taffei科技社！',
        html: html
    };
    transporter.sendMail(mailConfig, function (err, results) {
        if(err){
            return console.log(err);
        }
        return console.log(results)
    });

    return res.end(html);
});

module.exports = router;