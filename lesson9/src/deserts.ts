import { Dish } from './dish';
import { IDessert, IDietInfo } from './abstractions/food.interface';

export abstract class Dessert extends Dish implements IDessert, IDietInfo {
    protected sweetness: number;
    protected temperature: 'cold' | 'room' | 'warm';
    protected hasGlutenContent: boolean;
    protected isVeganDessert: boolean;
    protected isGlutenFreeDessert: boolean;
    protected isLactoseFreeDessert: boolean;
    protected allergens: string[];

    public constructor(
        name: string,
        calories: number,
        price: number,
        ingredients: string[],
        sweetness: number,
        temperature: 'cold' | 'room' | 'warm',
        hasGluten: boolean,
        dietInfo: {
            isVegan: boolean;
            isGlutenFree: boolean;
            isLactoseFree: boolean;
            allergens: string[];
        }
    ) {
        super(name, calories, price, ingredients);
        this.sweetness = Math.max(1, Math.min(10, sweetness));
        this.temperature = temperature;
        this.hasGlutenContent = hasGluten;
        this.isVeganDessert = dietInfo.isVegan;
        this.isGlutenFreeDessert = dietInfo.isGlutenFree;
        this.isLactoseFreeDessert = dietInfo.isLactoseFree;
        this.allergens = dietInfo.allergens;
    }

    public getSweetness(): number {
        return this.sweetness;
    }

    public getTemperature(): 'cold' | 'room' | 'warm' {
        return this.temperature;
    }

    public hasGluten(): boolean {
        return this.hasGlutenContent;
    }

    public isVegan(): boolean {
        return this.isVeganDessert;
    }

    public isGlutenFree(): boolean {
        return this.isGlutenFreeDessert;
    }

    public isLactoseFree(): boolean {
        return this.isLactoseFreeDessert;
    }

    public getAllergens(): string[] {
        return [...this.allergens];
    }

    protected onServe(): string {
        return `${this.name} подається з ${this.getServingSuggestion()}`;
    }

    protected abstract getServingSuggestion(): string;

    protected getSweetnessDescription(): string {
        if (this.sweetness <= 3) return 'помірно солодкий';
        if (this.sweetness <= 6) return 'солодкий';
        if (this.sweetness <= 8) return 'дуже солодкий';
        return 'надзвичайно солодкий';
    }
}
