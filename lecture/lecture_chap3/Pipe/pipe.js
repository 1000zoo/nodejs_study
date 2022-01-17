const fs = require('fs');
const zlib = require('zlib');

//파이프로 다양한 스트림을 연결
const readStream = fs.createReadStream('./readme3_.txt', { highWaterMark: 16 });
const writeStream = fs.createWriteStream('./writeme3_.txt');
readStream.pipe(writeStream);


// 파일 복사, zlib: 파일 압축
const readStream_ = fs.createReadStream('./readme3_.txt', { highWaterMark: 16 });
const zlibStream_ = zlib.createGzip();
const writeStream_ = fs.createWriteStream('./writeme3_.txt.gz');
readStream_.pipe(zlibStream_).pipe(writeStream_);