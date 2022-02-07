const express = require("express");
const path = require("path")
const morgan = require('morgan');
const cookieParser = require('cookie-parser')

const app = express();

app.set('port', process.env.PORT || 3000);

// app.use((req, res, next) => {
//     console.log('모든 요청에 실행.');
//     // throw new Error('error');
//     next();
// })

app.use(morgan('dev'));
app.use(cookieParser('myPassword'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static())

app.use('/category', (req, res, next) => {
    console.log('category!');
    next();
})

app.get('/', (req, res) => {
    req.cookies;
    req.signedCookies;
    res.cookie('name', encodeURIComponent(name), {
        expires: new Date(),
        httpOnly: true,
        path: '/',
    })
    res.clearCookie('name', encodeURIComponent(name), {
        httpOnly: true,
        path: '/',
    })
    res.sendFile(path.join(__dirname, './index.html'));
    // res.send('hello!!');
});

app.post('/', (req, res) => {
    res.send('hello express');
});

app.get('/category/:name', (req, res) => {
    res.send(`hello ${req.params.name}`);
})

app.get('/about', (req, res) => {
    res.send('hello express!!');
});

app.use((req, res, next) => {
    res.status(404).send('404');
});

app.use((err, req, res, next) => {
    console.error(err);
    res.status(200).send('ERROR');
});

app.listen(3000, () => {
    console.log('익스프레스 서버 실행');
});