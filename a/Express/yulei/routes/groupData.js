var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/yulei';
var data = require('./data')

router.get('/', function(req, res, next) {
    // res.render('index', { title: 'Express',});
    res.send('respond with a resource');
  });
router.get('/group/city',(req,res) => {
    // console.log(data)
   MongoClient.connect(url,(err,db) => {
    if(err) throw err;
    // console.log(data)
    console.log('数据连接成功')
    var dbyulei = db.db('yulei')
    dbyulei.collection('b').find({}).toArray (function(err,res1) {
        res.json(res1)
    })
   })
})
module.exports = router;