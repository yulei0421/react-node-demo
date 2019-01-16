var express = require('express');
var router = express();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',});
});


//编写接口api
router.get("/random/:min/:max", function(req, res) {
  var min = parseInt(req.params.min);
  var max = parseInt(req.params.max);
  if (isNaN(min) || isNaN(max)) {
      res.status(400);
      res.json({ error: "Bad request." });
      return;
  }

  var result = Math.round((Math.random() * (max - min)) + min);
  res.json({ result: result });
});
router.get('/home', function(req, res, next) {
  res.send('welcome yuleis');
});

// router.get('/home',function(req, res, next) {
//   res.send('welcome,yulei')
// })
// router.use(function(request, response) {
//   response.status(404).send("Page not found!");
// });
// // router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });


module.exports = router;
