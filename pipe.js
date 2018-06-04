'user strict';

let fs = require('fs');

let rs = fs.createReadStream('./file/stream.txt');
let ws = fs.createWriteStream('./file/pipe.txt');

rs.pipe(ws, { end: false });