var express = require('express');
var router = express.Router();
const nodemailer = require('nodemailer');
const { connect } = require('../app');
var mysql_odbc = require('../db/db_conn')();
var conn = mysql_odbc.init();



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('order', { title: 'Express' });

});


router.post('/sendemail', function(req, res, next){
  let email = req.body.email;
  let name = req.body.name;
  let menu = req.body.menu;
  let age = req.body.age;
  let option = req.body.option;
  let detail = req.body.detail;
  let email_data = email.split('@');


  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'kimty627@gmail.com',  // gmail 계정 아이디를 입력
      pass: 'gwipqkwncbrozjql'          // gmail 계정의 비밀번호를 입력
    }
  });

  let mailOptions = {
    from: '빌리풋 <kimty627@gmail.com>',    // 발송 메일 주소 (위에서 작성한 gmail 계정 아이디)
    to: email ,                     // 수신 메일 주소
    subject: '[빌리풋] '+name+'회원님 주문내역 안내드립니다.',   // 제목
    html: '<h1 style="margin: 0 auto; text-align:center; display:block; width:1000px;">빌리풋 주문내역 안내 </h1><table border="0.5px solid #000000" style=" margin: 0 auto; text-align:center; display:block; width:1000px; background-color:#EAEAEA"><tr><td style="font-size:20px; font-weight:lighter; text-align;center; padding:5px;">주문자명</td><td style="font-size:20px; font-weight:bold;  padding:5px;">'+name+'</td></tr><tr><td style="font-size:20px; font-weight:lighter; text-align;center;  padding:5px;">주메뉴</td><td style="font-size:20px; font-weight:bold;  padding:5px;">'+menu+'</td></tr>><tr><td style="font-size:20px; font-weight:lighter; text-align;center;  padding:5px;">연령대</td><td style="font-size:20px; font-weight:bold;   padding:5px;">'+age+'</td></tr><tr><td style="font-size:20px; font-weight:lighter; text-align;center;  padding:5px;">특이사항</td><td style="font-size:20px; font-weight:bold;   padding:5px;">'+option+'</td></tr><tr><td style="font-size:20px; font-weight:lighter; text-align;center;  padding:5px;">상세설명</td><td style="font-size:20px; font-weight:bold;   padding:5px;">'+detail+'</td></tr></table>'  // 내용
  };

  var datas = [name,email_data[0],menu,age,detail,option];

  var sql="insert into `order`(`name`,`email`,`menu`,`age`,`detail`,`option`) values(?,?,?,?,?,?)";
  conn.query(sql, datas, function(err,rows){
    if(err)console.log("err:" +err);
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      }
      else {
       console.log('Email sent: ' + info.response);
     }
   });
   res.redirect("/order");

  });


})

module.exports = router;


