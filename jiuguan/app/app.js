// server.get('/login', function (req, res) {  //请求路径为  http://localhost:8080/1.html
//     var users = req.query['loginForm']
//     console.log(req.query)
// })

var express = require('express')
const expressStatic = require('express-static');
var cors = require('cors')
var app = express();

app.use(cors());
app.use(expressStatic())

var corsOptions = {
    origin: 'http://localhost:8080', //只有从localhost:8080来的才不会被拦截
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

app.get('/products', cors(corsOptions), function (req, res, next) {
    res.json(data)
  })
   
app.listen(8000, function () {
    console.log('CORS-enabled web server listening on port 8000')
  })

var data = {
  code: 200,
  msg: 'ok',
  data: {
    a: 1,
    b: 2,
  }
}

server.use(expressStatic('./www')); //读取静态文件

