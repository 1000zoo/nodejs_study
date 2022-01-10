const condition = false;
const promise = new Promise((resolve, reject) => {
    if(condition){
        resolve('성공');
    } else{
        reject('실패');
    }
});
promise
.then((messeage) => {
    console.log(messeage);
})
.catch((error) => {
    console.error(error);
})