var express = require('express');
const { connect } = require('../app');
var router = express.Router();
var mysql_odbc = require('../db/db_conn')();
var conn = mysql_odbc.init();
/* GET home page. */

router.get('/review',function(req,res,next){
    res.redirect('/board/review/1');
});


router.get('/review/:page', function(req, res, next) {

  var page = req.params.page;
  var sql ="select * from board"

  conn.query(sql,  function(err, rows){
    if(err) console.error(err);
    res.render('review', {rows:rows, page:page, length:rows.length-1, page_num:10, pass:true});
    console.log(rows.length-1);
});
  

});

module.exports = router;



router.get('/write', function(req,res,next){
    res.render('write',{title : "게시판 글 쓰기"});
});

router.post('/write', function(req, res, next){
    var title = req.body.title;
    var ordered_product = req.body.ordered_product;
    var content = req.body.content;
    var star = req.body.star;
    var datas = [title,ordered_product,content,star];

    var sql="insert into board(title,ordered_product,content,star) values(?,?,?,?)";
    conn.query(sql, datas, function(err,rows){
        if(err)console.err("err:" +err);
        res.redirect('/board/review');
    });
});


