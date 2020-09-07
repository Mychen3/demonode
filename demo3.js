// 绑定事件 .on()
// 监听事件 .emit()

// 引入
var _events=require('events');
// 实例化
var event = new _events.EventEmitter()

// 绑定事件 这里的事件名完全就是一个标识
//  它其实就是绑定一个回调函数
event.on('code',function () {
    console.log('事件已经被触发');
})
    event.on('code2',function () {
        console.log('code2事件已经被触发');
    })

// 触发事件
 event.emit('code');

// 延迟俩秒触发
setTimeout(function () {
    event.emit('code2')
},2000)

