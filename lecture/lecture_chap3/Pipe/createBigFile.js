const fs = require('fs');
const file = fs.createWriteStream('./big.txt');

for(let i = 0; i <= 10; i++){
    file.write('Making a Big File!!\n');
}
file.end();