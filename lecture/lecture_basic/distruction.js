const example = {a : 123, b : {c : 135, d : 146}}
const a = example.a;
const d = example.b.d;
console.log(a, d);
console.log(example.a, example.b.d);

// const{a, b : { d }} = example;
// console.log(a);
// console.log(b);

arr = [1,2,3,4,5]
const [x, y, , ,z] = arr;
console.log(x);
console.log(y, z);