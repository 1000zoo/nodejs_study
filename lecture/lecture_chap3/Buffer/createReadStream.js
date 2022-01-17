const fs = require('fs');
const readStream = fs.createReadStream('./readme3.txt', {highWaterMark: 16});
const data = [];

readStream.on('data', (chunk) => {
    data.push(chunk);
    console.log('data: ', chunk, chunk.length);
});
readStream.on('end', () => {
    console.log('end: ', Buffer.concat(data).toString());
});
readStream.on('error', (err) => {
    console.log('error: ', err);
})

//순서대로 온다.
//메모리를 아낄 수 있다. 한 번에 조금씩 잘라서 보내기 때문
//highwatermark 가 없으면 버퍼방식과 결과가 똑같음