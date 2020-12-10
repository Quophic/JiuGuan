// const express = require('express');
// const expressStatic = require('express-static');
 
// var server = express();
// server.listen(3000); 

// var users ={
//     'huangchenruo' : '123456',
//     'ouyangwenlin' : '123456',
//     'zhanhaobin' : '123456,'
// };

// server.get('/login', function (req, res) {  //请求路径为  http://localhost:8080/1.html
//     var users = req.query['loginForm']
//     console.log(req.query)
// })

var express = require('express')
var cors = require('cors')
var app = express();

app.use(cors());

var corsOptions = {
    origin: 'http://localhost:8080', //只有从localhost:8080来的才不会被拦截
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

app.get('/products', cors(corsOptions), function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for only example.com.'})
  })
   
app.listen(8000, function () {
    console.log('CORS-enabled web server listening on port 8000')
  })
// app.options('*', cors()); // preflight OPTIONS; put before other routes

// var server = app.listen(8000, 'localhost', function () {
//   console.log('服务器已经启动，地址是http://localhost:8000')
// })

// app.get('/', function (req, res) {
//   res.send('这里是首页')
// })
// app.get('/goods', function (req, res) {
//   res.json(data) // 返回json
// })
// var data = {
//   code: 200,
//   msg: 'ok',
//   data: {
//     a: 1,
//     b: 2,
//   }
// }