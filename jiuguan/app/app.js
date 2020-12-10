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
 

// //3000是express挂载的服务器，如果要从3000请求数据得解决和8080的跨域问题

var express = require('express');
var app = express();

//解决跨域  
app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});


var server = app.listen(8000, 'localhost', function () {
  console.log('服务器已经启动，地址是http://localhost:8000')
})

app.get('/', function (req, res) {
  res.send('这里是首页')
})
app.get('/goods', function (req, res) {
  res.json(data) // 返回json
})
var data = {
  code: 200,
  msg: 'ok',
  data: {
    a: 1,
    b: 2,
  }
}