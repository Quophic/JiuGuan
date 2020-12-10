const express = require('express');
const expressStatic = require('express-static');
 
var server = express();
server.listen(3000); 

var users ={
    'huangchenruo' : '123456',
    'ouyangwenlin' : '123456',
    'zhanhaobin' : '123456,'
};

server.get('/login', function (req, res) {  //请求路径为  http://localhost:8080/1.html
    //res.write('aaa');  //向前台写入aaa
    //res.send('aaa');  //向前台写入aaa
    res.send({ a: 12, b: 5 });   //向前台写入json数据
    res.end();
})
 

//3000是express挂载的服务器，如果要从3000请求数据得解决和8080的跨域问题