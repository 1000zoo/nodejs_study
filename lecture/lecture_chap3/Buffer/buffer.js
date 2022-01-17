const buffer = Buffer.from('change me');
console.log('from(): ', buffer);
console.log('length: ', buffer.length);
console.log('toString(): ', buffer.toString());

const array = [Buffer.from('space '), Buffer.from('space '), Buffer.from('spaceBar')];
const buffer2 = Buffer.concat(array);
console.log('concat(): ', buffer2.toString());

const buffer3 = Buffer.alloc(5);
console.log('alloc(): ', buffer3);