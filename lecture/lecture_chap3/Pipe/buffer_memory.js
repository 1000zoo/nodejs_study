const fs = require('fs');
console.log('before: ', process.memoryUsage().rss);

const datal = fs.readFileSync('./big.txt');
fs.writeFileSync('./big2.txt', datal);
console.log('buffer: ', process.memoryUsage().rss);

//buffer방식으로 복사