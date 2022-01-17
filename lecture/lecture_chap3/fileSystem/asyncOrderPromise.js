const fs = require('fs');

async function main(){
    let data = fs.readFileSync('./readme.txt');
    console.log('1', data.toString());
    data = fs.readFileSync('./readme.txt');
    console.log('2', data.toString());
    data = fs.readFileSync('./readme.txt');
    console.log('3', data.toString());
    data = fs.readFileSync('./readme.txt');
    console.log('4', data.toString());
}
main();