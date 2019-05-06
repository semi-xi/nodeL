const WebSocket = require('ws')

// 创建socket 服务器
// 引用Server类:
const WebSocketServer = WebSocket.Server;

// 实例化:
const wss = new WebSocketServer({
    port: 3000
});

wss.on('connection', function (ws) {
  console.log(`[SERVER] connection()`);
  ws.on('message', function (message) {
      console.log(`[SERVER] Received: ${message}`);
      ws.send(`ECHO: ${message}`, (err) => {
          if (err) {
              console.log(`[SERVER] error: ${err}`);
          }
      });
  })
});


 // client 测试代码 可以在浏览器直接打开
// 打开一个 web socket
// let ws = new WebSocket('ws://localhost:3000/test');
                
// ws.onopen = function()
// {
//    // Web Socket 已连接上，使用 send() 方法发送数据
//    ws.send("发送数据");
//    alert("数据发送中...");
// };
 
// ws.onmessage = function (evt) 
// { 
//    var received_msg = evt.data;
//    console.log(evt)
// };
 
// ws.onclose = function()
// { 
//    // 关闭 websocket
//    alert("连接已关闭..."); 
// };