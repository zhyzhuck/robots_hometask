const a = 224;
const b = '47';
const notEl = undefined;

//--logical AND--
console.log(a > b && b >= 45);
console.log(a < b && b >= 45);


//--logical OR--
console.log(a > b || b >= 45);
console.log(a < b || b >= 45);
console.log(a > b || b < 45);
console.log((a > b || b < 45) && true);

//--logical NOT--
console.log(!(a > b));
console.log(!(a < b));

const el = notEl ?? 'another burger';
console.log(el);
