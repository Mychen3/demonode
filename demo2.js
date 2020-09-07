// 这是一个基于回调非堵塞文件读取的例子
 var _fs=require('fs');

// 基于回调的异步函数  非阻塞是不需要按顺序的
_fs.readFile('./file/text.txt',function (err,_data) {

    if (err) return err;
    
    console.log(_data.toString());
})
console.log('---------')
console.log('js代码已经执行结束')
