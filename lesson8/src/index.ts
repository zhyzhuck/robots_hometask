import { Dog, IDog } from './models/index';
import { DogSummary } from './implementation/dog-summary';
import { DogPet, VeterinaryClinic } from './abstraction/abstraction';

async function getApiObjectsData(): Promise<IDog[]> {
    const response = await fetch('https://api.thedogapi.com/v1/breeds');
    const json = await response.json();
    return json as IDog[];
}

async function getApiObjectsDataAsObjectWithClass(): Promise<Dog[]> {
    const response = await fetch('https://api.thedogapi.com/v1/breeds');
    const json = await response.json();
    return (json as IDog[]).map((row) => new Dog(row));
}

(async () => {
    console.log('\n\n--- Статистика ---');
    const allBreeds = await getApiObjectsData();
    console.log(`Всього порід в базі: ${allBreeds.length}`);

    const allBreedsClass = await getApiObjectsDataAsObjectWithClass();

    allBreedsClass.forEach((apiObject) => console.log(apiObject.getSummary()));

    const largeBreeds = allBreedsClass.filter((dog) => dog.isLargeBreed());
    console.log(`Великих порід: ${largeBreeds.length}`);

    const avgWeight = allBreedsClass.reduce((sum, dog) => sum + dog.getAverageWeight(), 0) / allBreeds.length;
    console.log(`Середня вага всіх порід: ${avgWeight.toFixed(1)} кг`);

    const summary = new DogSummary(allBreedsClass[0]);
    summary.displaySummary();

    console.log('\n--- Короткі дані всіх порід ---');
    allBreedsClass.forEach((dog, index) => {
        const dogSummary = new DogSummary(dog);
        console.log(`\n${index + 1}. ${dog.name}`);
        console.log(`   Розмір: ${dogSummary.size}, Походження: ${dogSummary.origin}`);
        console.log(`   Середня вага: ${dog.getAverageWeight().toFixed(1)} кг`);
        console.log(`   Велика порода: ${dog.isLargeBreed() ? 'Так' : 'Ні'}`);
    });
})();
// ------------------------------------------------------------------------------

const myDog = new DogPet(1, 'Рекс', 'Іван Петренко', 3, 'Німецька вівчарка', [
    'Сидіти',
    'Лежати'
]);
const anotherDog = new DogPet(2, 'Болт', 'Петро Петренко', 7, 'Бульдог', [
    'Їсти',
    'Апорт'
]);

myDog.displayInfo();
anotherDog.displayInfo();

console.log('\nНавчання нових команд:');
myDog.teachCommand('Дай лапу');
myDog.teachCommand('Апорт');
myDog.teachCommand('Сидіти');

console.log('\nВиконання команд:');
console.log(myDog.executeCommand('Сидіти'));
console.log(myDog.executeCommand('Дай лапу'));
console.log(myDog.executeCommand('Кульбіт'));

console.log('\n\n--- Ветеринарна клініка ---');
const clinic = new VeterinaryClinic('Ветклініка "Здоровий хвіст"');

clinic.displayClinicInfo();

console.log('\nОбслуговування тварин:');
clinic.vaccinate(myDog);
console.log(clinic.checkup(myDog));
console.log(`Вартість послуг: ${clinic.getServiceCost(myDog)} грн`);

clinic.vaccinate(anotherDog);
console.log(clinic.checkup(anotherDog));

console.log(`Вартість послуг: ${clinic.getServiceCost(anotherDog)} грн`);


console.log('\nОновлена інформація про клініку:');
clinic.displayClinicInfo();

