// const express = require('express');
 
// var server = express();
// server.use('/1.html', function (req, res) {  //请求路径为  http://localhost:8080/1.html
//     //res.write('aaa');  //向前台写入aaa
//     //res.send('aaa');  //向前台写入aaa
//     res.send({ a: 12, b: 5 });   //向前台写入json数据
//     res.end();
// })
 
// server.listen(8080); 

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


//3000是express挂载的服务器，如果要从3000请求数据得解决和8080的跨域问题