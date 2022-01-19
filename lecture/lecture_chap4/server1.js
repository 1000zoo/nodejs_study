const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset-utf-8'}); //html임을 인지하지 못하는 브라우저 경우
    res.write('<h1>Hello Node!</h1>');
    res.write('<p>Hello server</p>');
    res.end('<p>Hello 1000zoo</p>');
})
    .listen(8080);
server.on('listening', () => {
    console.log('8080번 포트에서 서버 대기 중입니다.');
});
server.on('error', (error) => {
    console.error(error);
})
// const server_ = http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/html; charset-utf-8'}); //html임을 인지하지 못하는 브라우저 경우
//     res.write('<h1>Hello Node!</h1>');
//     res.write('<p>Hello server</p>');
//     res.end('<p>Hello 1000zoo</p>');
// })
//     .listen(8081);