'use strict';

let fs = require('fs');
let rs = fs.createReadStream('./file/stream.txt', 'utf-8');

rs.on('data', function (chunk) {
  // console.log(data);
  console.log(chunk)
})

rs.on('end', function() {
  console.log('end')
})

rs.on('error', function(err) {
  console.log(err)
})

// let wsl = fs.createWriteStream('./file/stream.txt', 'utf-8');

// setTimeout(() => {
//   wsl.write('使用stream写入文本数据\n');
// },500)
// setTimeout( ()=> {
//   wsl.write('stream end');
//   wsl.end();
// },1000)