// 这是一个同步读取文件的例子

var _fs = require('fs');
//
var data=_fs.readFileSync('./file/text.txt');

console.log(data.toString());
console.log('---------')
console.log('js代码已经执行结束')
// 这种情况同步就形成了堵塞
