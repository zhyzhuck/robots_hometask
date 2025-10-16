function sumArrayValues(arr: (number | string)[]): number | string{
    if (arr.every(el => typeof el === 'number')) {
        return (arr as number[]).reduce((acc, n) => acc + n, 0);
    }
    if (arr.every(el => typeof el === 'string')) {
        return (arr as string[]).join('');
    }
    return arr.map(String).join('');
};

function sumArrayElement<T>(arr: T[]): number{
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


const numbers1: number[] = [10, 20, 30, 40];
const strings1: string[] = ['5', '15', 'hello', '20'];
const mixed1: (number | string)[] = [10, '20', 30, 'abc', '40', 50];

console.log('Сума чисел:', sumArrayValues(numbers1));
console.log('Сума string:', sumArrayValues(strings1));
console.log('Сума numbers та strings:', sumArrayValues(mixed1));

console.log('\nСума тільки чисел:', sumArrayElement(numbers1));
console.log('Сума тільки чисел у string:', sumArrayElement(strings1));
console.log('Сума тільки чисел у numbers та strings:', sumArrayElement(mixed1));


