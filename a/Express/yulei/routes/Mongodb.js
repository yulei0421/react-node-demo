var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/yulei';

router.get('/', function(req, res, next) {
    // res.render('index', { title: 'Express',});
    
  });
router.get('/:id/:name',(req,res) => {
    // console.log(req)
    var id = req.params.id;
    var name = req.params.name;
    // console.log(id,name)
    MongoClient.connect(url,(err,db)=>{
        if(err) throw err;
        console.log('数据连接成功')
        var dbyulei = db.db('yulei')
        // var yulei =  {name:id,color:name}
        // dbyulei.collection('a').insert(yulei,(err,res)=>{
        //     if(err) throw err;
        //     console.log('插入成功');
        // })  
        dbyulei.collection("a").find({}).toArray (function(err,res1 ) {
            console.log(res)
             res.json(res1)
        })
        
    })

})
module.exports = router;