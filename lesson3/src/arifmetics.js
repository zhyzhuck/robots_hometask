let num1 = 10;
const num2 = 3;

const str1 = '5';
const str2 = '20';

const bool1 = true;
const bool2 = false;

// number
console.log('num1 + num2 =', num1 + num2);
console.log('num1 - num2 =', num1 - num2);
console.log('num1 * num2 =', num1 * num2);
console.log('num1 / num2 =', num1 / num2);
console.log('num1 % num2 =', num1 % num2);
console.log('num1 ** num2 =', num1 ** num2);
console.log('-num1 =', -num1);

console.log('num1 = ', num1);
num1 -= num1;
console.log('num1 -= num1 ', num1);
num1 = 34;
num1 += num1;
console.log('num1 += num1 ', num1);
num1 *= num1;
console.log('num1 *= num1 ', num1);
num1 /= num1;
console.log('num1 /= num1 ', num1);
num1 %= num1;
console.log('num1 %= num1 ', num1);
num1 **= num1;
console.log('num1 **= num1 ', num1);

// string
console.log('str1 + str2 =', str1 + str2);
console.log('str1 * 2 =', str1 * 2);
console.log('str2 - 5 =', str2 - 5);
console.log('str1 % str2 =', str1 % str2);

// boolean
console.log('bool1 + bool2 =', bool1 + bool2);
console.log('num1 + bool1 =', num1 + bool1);
console.log('num2 * bool2 =', num2 * bool2);

// mixed
console.log('num1 + str1 =', num1 + str1);
console.log('num2 - str1 =', num2 - str1);
console.log('bool1 + str2 =', bool1 + str2);
console.log('bool1 + num1 =', bool1 + str2);
console.log('{} + {} =', {} + {});
console.log('[] + [] =', [] + []);
console.log('{a:1} + {b: 3} =', {a:1} + {b: 3});
const rt = [1, 2] + [3, 5, true, 'false'];
console.log(rt, 'typeof', typeof rt, Number(rt));

num1 =  12;
console.log('++num1 =', ++num1);
console.log('num1++ =', num1++);
console.log('num1 після num1++ =', num1);
console.log('--num1 =', --num1);
console.log('num1-- =', num1--);
console.log('num1 після num1-- =', num1);

num1 = 27;

console.log('Math.sqrt() =', Math.sqrt(num1));
console.log('Math.abs() =', Math.abs(-num1));

num1 = num1 / 0.67;

console.log('Math.floor() =', Math.floor(num1));
console.log('Math.ceil() =', Math.ceil(num1));
console.log('Math.round() =', Math.round(num1));

num1 = 5;
const num3 = 12;

console.log('Math.pow(a, b) =', Math.pow(num1, num2));
console.log('Math.max(a, b, c) =', Math.max(num1, num2, num3));
console.log('Math.min(a, b, c) =', Math.min(num1, num2, num3));
console.log('Math.random() =', Math.random());
