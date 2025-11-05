import { Dessert } from './deserts';
import { IDecorable, IFreezable } from './abstractions/food.interface';

export class IceCream extends Dessert implements IFreezable, IDecorable {
    private flavor: string;
    private scoops: number;
    private freezingTime: number;
    private meltingSpeed: number;
    private toppings: string[] = [];

    public constructor(
        name: string,
        calories: number,
        price: number,
        ingredients: string[],
        sweetness: number,
        flavor: string,
        scoops: number,
        freezingTime: number,
        meltingSpeed: number,
        dietInfo: {
            isVegan: boolean;
            isGlutenFree: boolean;
            isLactoseFree: boolean;
            allergens: string[];
        }
    ) {
        super(name, calories, price, ingredients, sweetness, 'cold', false, dietInfo);
        this.flavor = flavor;
        this.scoops = scoops;
        this.freezingTime = freezingTime;
        this.meltingSpeed = meltingSpeed;
    }

    public getFreezingTime(): number {
        return this.freezingTime;
    }

    public getMeltingSpeed(): number {
        return this.meltingSpeed;
    }

    public canBeRefrozen(): boolean {
        return false;
    }

    public addDecoration(topping: string): void {
        if (!this.toppings.includes(topping)) {
            this.toppings.push(topping);
            console.log(`Додано топінг: ${topping}`);
        }
    }

    public getDecorations(): string[] {
        return [...this.toppings];
    }

    public removeDecoration(topping: string): void {
        const index = this.toppings.indexOf(topping);
        if (index > -1) {
            this.toppings.splice(index, 1);
            console.log(` Видалено топінг: ${topping}`);
        }
    }

    protected onPrepare(): string {
        return ` Приготування ${this.name}:
    1. Змішування інгредієнтів: ${this.ingredients.join(', ')}
    2. Додавання смаку: ${this.flavor}
    3. Заморожування протягом ${this.freezingTime} годин
    4. Формування ${this.scoops} кульок }`;
    }

    protected getServingSuggestion(): string {
        return this.toppings.length > 0 ? `з топінгами: ${this.toppings.join(', ')}` : 'звичайний';
    }

    public getDescription(): string {
        return `
    Назва:           ${this.name}
    Калорії:         ${this.calories} ккал${' '}
    Ціна:            ${this.price} грн${' '}
    Смак:            ${this.flavor}
    Кульок:          ${this.scoops}${' '}
    Солодкість:      ${this.sweetness}/10 (${this.getSweetnessDescription()})${' '}
    Топінги:         ${this.toppings.length > 0 ? this.toppings.join(', ') : 'без топінгів'}${' '}
    Швидкість танення: ${this.meltingSpeed}/10${' '}    `;
    }

    public getFlavor(): string {
        return this.flavor;
    }

    public getScoops(): number {
        return this.scoops;
    }
}
