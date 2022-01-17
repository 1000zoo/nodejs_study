const fs = require('fs').promises;

fs.writeFile('./writeme.txt', 'write something.')
    .then(()  =>  {
        return fs.readFile('./writeme.txt');
    })
    .then((data) => {
        console.log(data.toString());
    })
    .catch((err) => {
        throw err;
    });