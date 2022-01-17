const crypto = require('crypto');

const pass = 'pass';
const salt = 'salt';
const start = Date.now();

crypto.pbkdf2(pass, salt, 1_000_000, 128, 'sha512', () => {
    console.log('1', Date.now() - start);
})
crypto.pbkdf2(pass, salt, 1_000_000, 128, 'sha512', () => {
    console.log('2', Date.now() - start);
})
crypto.pbkdf2(pass, salt, 1_000_000, 128, 'sha512', () => {
    console.log('3', Date.now() - start);
})
crypto.pbkdf2(pass, salt, 1_000_000, 128, 'sha512', () => {
    console.log('4', Date.now() - start);
})
crypto.pbkdf2(pass, salt, 1_000_000, 128, 'sha512', () => {
    console.log('5', Date.now() - start);
})
crypto.pbkdf2(pass, salt, 1_000_000, 128, 'sha512', () => {
    console.log('6', Date.now() - start);
})
crypto.pbkdf2(pass, salt, 1_000_000, 128, 'sha512', () => {
    console.log('7', Date.now() - start);
})
crypto.pbkdf2(pass, salt, 1_000_000, 128, 'sha512', () => {
    console.log('8', Date.now() - start);
})

//실행해보면 4개씩 실행되는 것을 알 수 있다.
//코어 개수에 맞게 설정할 수 있다.
//터미털에
//window: SET UV_THREADPOOL_SIZE=원하는수
//mac, linux: UV_THREADPOOL_SIZE=원하는수
//입력