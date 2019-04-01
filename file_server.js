'user strict';

let fs = require('fs');
let url = require('url');
let path = require('path');
let http = require('http');
// let express = require('express');

let root = path.resolve(process.argv[2] || '.'); // 命令行参数

console.log(`root path ${ root }`);
// fs.readdir('./', (error, files) => {
//   console.log(files)
// })
let server = http.createServer( function (request, response) { 
  
  let pathname = url.parse(request.url).pathname;
  let filepath = path.join(root, pathname);
  console.log(url.parse(request.url))
  fs.stat( filepath, function (err, stats) { 
    if(!err && stats.isFile()) {
      console.log(`200 ${ request.url }`);
      response.writeHead(200);

      fs.createReadStream(filepath).pipe(response);
    } else {
      console.log( `404 ${ request.url }` );

      response.writeHead(402);
      response.end('404 Not Found')
    }
  })
})

server.listen(8080);
console.log('Server is runing at http://127.0.0.1:8080');