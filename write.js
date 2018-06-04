'use strict'

let fs = require('fs');

// fs.readFile('./file/readme.txt', 'utf-8', function( error, data ) {
//   console.log(data);
// })

let data = 'write somthing';
fs.writeFile('./file/write.txt', data, function (err) { 
  if(err) {
    console.log(err)
  } else {
    console.log('ok')
  }
 })