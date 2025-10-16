const sumArray = (arr: (number | string)[]): number | string => {
    if (arr.every(el => typeof el === 'number')) {
        return (arr as number[]).reduce((acc, n) => acc + n, 0);
    }
    if (arr.every(el => typeof el === 'string')) {
        return (arr as string[]).join('');
    }
    return arr.map(String).join('');
};

const sumArrayElements = <T>(arr: T[]): number => {
    let sum = 0;
    for (const value of arr) {
        const num = Number(value);
        if (!isNaN(num)) {
            sum += num;
        } else {
            console.log(`Елемент "${value}" не є числом, пропускаємо`);
        }
    }
    return sum;
};


const numbers = [10, 20, 30, 40];
const strings = ['5', '15', 'hello', '20'];
const mixed = [10, '20', 30, 'abc', '40', 50];

console.log('Сума чисел:', sumArray(numbers));
console.log('Сума string:', sumArray(strings));
console.log('Сума numbers та strings:', sumArray(mixed));

console.log('\nСума тільки чисел:', sumArrayElements(numbers));
console.log('Сума тільки чисел у string:', sumArrayElements(strings));
console.log('Сума тільки чисел у numbers та strings:', sumArrayElements(mixed));

