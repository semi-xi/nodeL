'use strict';

let http = require('http');
let url = require('url');
let path = require('path');
let workDir = path.resolve('.');
let server = http.createServer( function (request, response) { 
  // console.log(request)
  console.log(`${ request.method }  :${ request.url }`);

  response.writeHead(200, { 'Content-type': 'text/html' });

  response.end('<h1>Hello word!</h1>');
 } )

 server.listen(8080);

 console.log('Server is runing at http://127.0.0.1:8080');


// let filePath = path.join( workDir, 'index', 'index.html' );
// console.log(workDir)