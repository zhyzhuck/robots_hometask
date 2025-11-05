import { IDish, IDessert, IFreezable, IDecorable, IDietInfo } from './abstractions/food.interface';

export class MenuService {
    public static displayDish(dish: IDish): void {
        console.log('\n' + dish.getDescription());
    }

    public static prepareDish(dish: IDish): void {
        console.log(`\nПриготування ${dish.getName()}...`);
        console.log(dish.prepare());
        console.log(dish.serve());
    }

    public static analyzeDessert(dessert: IDessert): void {
        console.log(`\n Аналіз десерту: ${dessert.getName()}`);
        console.log(`Солодкість: ${dessert.getSweetness()}/10`);
        console.log(`Температура: ${dessert.getTemperature()}`);
        console.log(`Містить глютен: ${dessert.hasGluten() ? 'Так' : 'Ні'}`);
        console.log(`Калорії: ${dessert.getCalories()} ккал`);
    }


    public static freeze(item: IFreezable & IDish): void {
        console.log(`\n Заморожування ${item.getName()}...`);
        console.log(`Час заморожування: ${item.getFreezingTime()} годин`);
        console.log(`Швидкість танення: ${item.getMeltingSpeed()}/10`);
    }

    public static decorate(item: IDecorable & IDish, decorations: string[]): void {
        console.log(`\n Декорування ${item.getName()}...`);
        decorations.forEach((decoration) => {
            item.addDecoration(decoration);
        });
        console.log(`Всього декорацій: ${item.getDecorations().length}`);
    }

    public static checkDiet(item: IDietInfo & IDish): void {
        console.log(`\n Дієтична інформація для ${item.getName()}:`);
        console.log(` Веганське: ${item.isVegan() ? 'Так' : ' Ні'}`);
        console.log(`Без глютену: ${item.isGlutenFree() ? ' Так' : 'Ні'}`);
        console.log(`Без лактози: ${item.isLactoseFree() ? 'Так' : ' Ні'}`);
        const allergens = item.getAllergens();
        console.log(`Алергени: ${allergens.length > 0 ? allergens.join(', ') : 'Немає'}`);
    }

    public static comparePrices(dish1: IDish, dish2: IDish): void {
        console.log('\nПорівняння цін:');
        console.log(`${dish1.getName()}: ${dish1.getPrice()} грн`);
        console.log(`${dish2.getName()}: ${dish2.getPrice()} грн`);

        const cheaper = dish1.getPrice() < dish2.getPrice() ? dish1 : dish2;
        console.log(`Дешевше: ${cheaper.getName()}`);
    }

    public static calculateTotal(dishes: IDish[]): void {
        const total = dishes.reduce((sum, dish) => sum + dish.getPrice(), 0);
        const totalCalories = dishes.reduce((sum, dish) => sum + dish.getCalories(), 0);

        console.log('\n Разом до сплати:');
        console.log(`Вартість: ${total} грн)`);     console.log(`Калорії: ${totalCalories} ккал`);
    }
    // // Функція для фільтрації по калоріях
    // static filterByCalories(dishes: IDish[], maxCalories: number): IDish[] {
    //     return dishes.filter((dish) => dish.getCalories() <= maxCalories);
    // }
    // // Функція для пошуку найсолодшого десерту
    // static findSweetest(desserts: IDessert[]): IDessert | null {
    //     if (desserts.length === 0) return null;
    //     return desserts.reduce((sweetest, current) => (current.getSweetness() > sweetest.getSweetness() ? current : sweetest));
    // }
}
