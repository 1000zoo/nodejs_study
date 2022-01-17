const fs = require('fs');

const writeStream = fs.createWriteStream('./writeme2.txt');
writeStream.on('finish', () => {
    console.log('done.');
});

writeStream.write('write.\n');
writeStream.write('write again.');
writeStream.end();