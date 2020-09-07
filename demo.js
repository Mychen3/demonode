// 引入一个模块
var _http=require('http');

// console.log(re)


_http.createServer(function (request,response) {
     // http 头部的信息
    // 状态码: 200
    // 内容的类型 text/html/xml/plain....
   response.writeHead(200,{'Content-Type':'text/html;charset=UTF-8'});

   // 向客户端发送数据
   response.end('<h1>第一个http服务</h1>');

// 端口号
}).listen(5250);

console.log('5250,已经创建')
