const https = require('https');
const fs = require('fs');

https.createServer({
    cert : fs.readFileSync('도메인 인증서 경로'),   //인증기관에서 인증서를 받아서
    key : fs.readFileSync('도메인 비밀키 경로'),    //파일경로 입력, 서버 시작 전이라 sync를 사용해도 됨
    ca : [                                      //lets encrypts 에서 받을 수 있음.
        fs.readFileSync('상위 인증서 경로'),
        fs.readFileSync('상위 인증서 경로'),
    ],
}, (req, res) => {
    res.writeHead(200, { 'Content-Type' : 'text/html; charset=utf-8'});
    res.write('<h1?Hello Node!</h1>');
    res.end('<p>Hello Server!</p>');
})
    .listen(443, () => {                        //https에서는 443포트 사용
        console.log('443번 포트에서 서버 대기중');
    })