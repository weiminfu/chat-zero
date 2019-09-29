const express = require('express');
const app = express();
// 设置静态文件夹
app.use(express.static(__dirname));
// 监听3000端口
app.listen(3000,function () {
	console.log('已成功监听3000端口服务')
});

// =============================================

// 开始创建一个websocket服务
const Server = require('ws').Server;
// 这里是设置服务器的端口号，和上面的3000端口不用一致
const ws = new Server({ port: 9999 });

// 监听服务端和客户端的连接情况
ws.on('connection', function(socket) {
	// 监听客户端发来的消息
	socket.on('message', function(msg1) {
		console.log(`客户端说： ${msg1}`);   // 这个就是客户端发来的消息
		// 来而不往非礼也，服务端也可以发消息给客户端
		let msg2='你好，我是来自服务器的信息！';
		socket.send(`服务端说： ${msg2}`);
	});
});