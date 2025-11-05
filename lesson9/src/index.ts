import { Tiramisu } from './tiramisu';
import { IceCream } from './icecream';
import { IDish } from './abstractions/food.interface';
import { MenuService } from './menu';

const tiramisu = new Tiramisu('Класичне Тірамісу', 380, 280, ['Маскарпоне', 'Савоярді', 'Кава', 'Яйця', 'Цукор', 'Какао'], 7, 4, 500);

const vanillaIceCream = new IceCream('Ванільне морозиво', 250, 45, ['Молоко', 'Вершки', 'Цукор', 'Ваніль'], 6, 'Ваніль', 3, 4, 6, {
    isVegan: false,
    isGlutenFree: true,
    isLactoseFree: false,
    allergens: ['Молоко']
});

const strawberryIceCream = new IceCream('Полуничне морозиво', 220, 50, ['Молоко', 'Вершки', 'Полуниця', 'Цукор'], 7, 'Полуниця', 2, 4, 7, {
    isVegan: false,
    isGlutenFree: true,
    isLactoseFree: false,
    allergens: ['Молоко']
});

console.log('\nEncapsulation');
console.log(`Назва торта: ${tiramisu.getName()}`);
console.log(`Калорії: ${strawberryIceCream.getCalories()}`);

console.log('\nInheritance');
const allDesserts: IDish[] = [vanillaIceCream, strawberryIceCream, tiramisu];
allDesserts.forEach((dessert) => {
    console.log(`- ${dessert.getName()} (${dessert.getPrice()} грн)`);
});

console.log('\nPolymorphism');
console.log(tiramisu.prepare());
console.log(vanillaIceCream.prepare());


MenuService.displayDish(tiramisu);
MenuService.displayDish(vanillaIceCream);

MenuService.prepareDish(vanillaIceCream);
MenuService.prepareDish(tiramisu);
MenuService.prepareDish(strawberryIceCream);

MenuService.analyzeDessert(tiramisu);
MenuService.analyzeDessert(vanillaIceCream);

MenuService.freeze(vanillaIceCream);

MenuService.decorate(tiramisu, ['Шоколадна стружка', 'Полуниця', "М'ятний лист"]);
MenuService.decorate(vanillaIceCream, ['Шоколадний сироп', 'Горішки', 'Взбиті вершки']);

MenuService.checkDiet(tiramisu);
MenuService.checkDiet(vanillaIceCream);

MenuService.comparePrices(tiramisu, vanillaIceCream);


const menu: IDish[] = [vanillaIceCream, strawberryIceCream, tiramisu];

MenuService.calculateTotal(menu);

menu.forEach((dish) => {
    console.log(`${dish.getName()}: ${dish.serve()}`);
});

const decorables = [strawberryIceCream, vanillaIceCream, tiramisu];
decorables.forEach((item) => {
    if ('getDecorations' in item) {
        const decorations = item.getDecorations();
        console.log(`${item.getName()}: ${decorations.length > 0 ? decorations.join(', ') : 'без декору'}`);
    }
});


