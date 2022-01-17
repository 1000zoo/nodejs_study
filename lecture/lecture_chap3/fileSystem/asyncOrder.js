//같은 파일을 실행할 때 동기보다 효율적이다.
//순서도 지키면서 동시에 백그라운드로 들어간다.

const fs = require('fs');
fs.readFile('./readMe.txt', (err, data) => {
    if(err){
        throw err;
    }
    console.log('1번', data.toString());

    fs.readFile('./readMe.txt', (err, data) => {
        if(err){
            throw err;
        }
        console.log('2번', data.toString());
    
        fs.readFile('./readMe.txt', (err, data) => {
            if(err){
                throw err;
            }
            console.log('3번', data.toString());
            fs.readFile('./readMe.txt', (err, data) => {
                if(err){
                    throw err;
                }
                console.log('4번', data.toString());
            });
        });
    });
});