//blocking
//서버 초기화 작업을 할 때
const fs = require('fs');

let data = fs.readFileSync('./readMe.txt');
console.log('1', data.toString());
data = fs.readFileSync('./readMe.txt');
console.log('2', data.toString());
data = fs.readFileSync('./readMe.txt');
console.log('3', data.toString());
data = fs.readFileSync('./readMe.txt');
console.log('4', data.toString());