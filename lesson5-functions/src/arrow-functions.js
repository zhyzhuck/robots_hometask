const sumArray= (arr) => {
    let sum = 0;
    for (let el of arr ) {
        sum += el;
    }
    return sum;
}

const numbers = [10, 20, 30, 40];
const strings = ["5", "15", "hello", "20"];

console.log("Сума чисел:", sumArray(numbers));
console.log("Сума рядків:", sumArray(strings));