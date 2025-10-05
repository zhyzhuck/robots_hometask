console.log('From 0 to 10, step 1');

console.log('\nfor(){}');
for (let q = 0; q <= 9; q++ ) {
    console.log(q);
};

console.log('\nfor (const value of(in) values) {}');
const array1 = Array.from({ length: 10 }, (_, i) => i);
for (const value of array1) {
    console.log(value);
}

console.log('\nwhile(){}');
let i = 0;
while ( i <= 9 ) {
    console.log( i);
    i++;
};

console.log('\ndo {} while()');
let a = 0;
do {
    console.log(a);
    a++;
} while (a <= 9 );

console.log('\nFrom 100 to 0, step 10');

console.log('\nfor(){}');
for (let q = 100; q >= 0; q -= 10) {
    console.log(q);
};

console.log('\nfor (const value of(in) values) {}');
const array2 = Array.from({ length: 11 }, (_, i  ) => 100 - i * 10);
for (const index of array2) {
    console.log(index);
};


console.log('\nwhile(){}');
let j = 100;
while ( j >= 0 ) {
    console.log(j);
    j -= 10;
};

console.log('\ndo {} while()');
let b = 100;
do {
    console.log(b);
    b -= 10;
} while (b >= 0 );
