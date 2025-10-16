const strings = ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++'];

const numbers = [10, 25, 33, 42, 58, 67, 75, 89, 91, 100];

const booleans = [true, false, true, true, false, false, true];

const mixed = [42, 'hello', true, 'good', null, { name: 'Object' }, [1, 2, 3], 567, 'day'];

console.log('Довжина масиву:', strings.length);
console.log('Перший елемент:', strings[0]);
console.log('Останній елемент:', strings[strings.length - 1]);

strings.push('Ruby');
console.log('push:', strings);

strings.unshift('Go');
console.log('unshift:', strings);

strings.pop();
console.log('pop:', strings);

strings.shift();
console.log('shift:', strings);

// ============strings=======================

const filterStrings = strings.filter(num => num.length < 5);
console.log('length < 5:', filterStrings);

const sortedStrings = [...strings].sort();
console.log('\nsort() - за алфавітом:', sortedStrings);

const sortedByLength = [...strings].sort((a, b) => a.length - b.length);
console.log('sort() - за довжиною:', sortedByLength);

const moreLanguages = ['PHP', 'Swift'];
const allLanguages = strings.concat(moreLanguages);
console.log('\nconcat():', allLanguages);

console.log('\nincludes("Java"):', strings.includes('Java'));

const joinedComma = strings.join(', ');
console.log('\njoin(", "):', joinedComma);

const frameworks = ['React', 'Vue', 'Angular'];
const allTechnologies = [...strings, ...frameworks];
console.log('\n[...arr1, ...arr2]:', allTechnologies);

const totalLength = strings.reduce((sum, lang) => sum + lang.length, 0);
console.log('\nreduce() - заг. довжина символів:', totalLength);

console.log('\nПеребір forEach:');
strings.forEach((item, index) => {
    console.log(`[${index}]: ${item}`);
});

const upperStrings = strings.map(str => str.toUpperCase());
console.log('Map (uppercase):', upperStrings);

// ============numbers=======================

const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log('Парні числа:', evenNumbers);

const sortedAsc = [...numbers].sort((a, b) => a - b);
console.log('\nsort() - за зростанням:', sortedAsc);

const sortedDesc = [...numbers].sort((a, b) => b - a);
console.log('sort() - за спаданням:', sortedDesc);

const moreNumbers = [100, 200, 300];
const allNumbers = numbers.concat(moreNumbers);
console.log('\nconcat():', allNumbers);

console.log('\nincludes(23):', numbers.includes(23));

const joinedPlus = numbers.join(' + ');
console.log('\njoin(" + ""):', joinedPlus);

const extraNumbers = [1, 2, 3];
const combinedNumbers = [...numbers, ...extraNumbers];
console.log('\n[...arr1, ...arr2]:', combinedNumbers);

const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log('Сума всіх чисел:', sum);

const average = numbers.reduce((acc, num) => acc + num, 0) / numbers.length;
console.log('reduce() - середнє значення:', average.toFixed(2));

const doubled = numbers.map(num => num * 2);
console.log('Подвоєні числа:', doubled);

console.log('\nПеребір forEach:');
numbers.forEach((num, index) => {
    console.log(`numbers[${index}] = ${num}`);
});

// ============booleans=======================

const trueCount = booleans.filter(bool => bool === true).length;
console.log('Кількість true:', trueCount);

const sortedBooleans = [...booleans].sort();
console.log('\nsort():', sortedBooleans);

const moreBooleans = [true, true, false];
const allBooleans = booleans.concat(moreBooleans);
console.log('\nconcat():', allBooleans);

console.log('\nincludes(true):', booleans.includes(true));

const joinedBooleans = booleans.join(' | ');
console.log('\njoin:', joinedBooleans);

const extraBooleans = [false, false];
const combinedBooleans = [...booleans, ...extraBooleans];
console.log('\n[...arr1, ...arr2]:', combinedBooleans);

const allTrue = booleans.reduce((acc, bool) => acc && bool, true);
console.log('\nreduce() - всі true?:', allTrue);

const inverted = booleans.map(bool => !bool);
console.log('!:', inverted);

console.log('\nПеребір forEach:');
booleans.forEach((bool, index) => {
    console.log(`booleans[${index}] = ${bool}`);
});

// ============any=======================

const filterAny = mixed.filter(el => typeof el === 'number');
console.log('\nOnly numbers:', filterAny);

const sortedAsStrings = [...mixed].sort((a, b) => {
    return String(a).localeCompare(String(b));
});
console.log('\nsort() - як рядки:', sortedAsStrings);

const moreMixed = ['extra', 999, false];
const allMixed = mixed.concat(moreMixed);
console.log('\nconcat():', allMixed);

console.log('includes("Hello"):', mixed.includes('Hello'));
console.log('includes(null):', mixed.includes(null));

const joinedMixed = mixed.join(' | ');
console.log('\njoin(" | "):', joinedMixed);

const extra = [100, 'test'];
const combined = [...mixed, ...extra];
console.log('\n[...arr1, ...arr2]:', combined);

const concatenatedStrings = mixed.reduce((result, item) => {
    return typeof item === 'string' ? result + item + ' ' : result;
}, '').trim();
console.log('reduce() - об\'єднані рядки:', concatenatedStrings);


console.log('\nТипи елементів:');
mixed.forEach((item, index) => {
    console.log(`mixed[${index}] (${typeof item}):`, item);
});

const descriptions = mixed.map(item => {
    return `Тип: ${typeof item}, Значення: ${JSON.stringify(item)}`;
});
console.log('\nОписи елементів:');
descriptions.forEach(desc => console.log(desc));

console.log('Чи є рядок "hello" ?', mixed.includes('hello'));

const sliced = mixed.slice(1, 4);
console.log('Елементи з індексу 1 по 3:', sliced);
