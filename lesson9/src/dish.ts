import { IDish } from './abstractions/food.interface';

export abstract class Dish implements IDish {
    protected name: string;
    protected calories: number;
    protected price: number;
    protected ingredients: string[];
    protected preparedAt: Date | null = null;

    public constructor(name: string, calories: number, price: number, ingredients: string[]) {
        this.name = name;
        this.calories = calories;
        this.price = price;
        this.ingredients = ingredients;
    }

    public getName(): string {
        return this.name;
    }

    public getCalories(): number {
        return this.calories;
    }

    public getPrice(): number {
        return this.price;
    }

    public getIngredients(): string[] {
        return [...this.ingredients];
    }

    public prepare(): string {
        if (this.preparedAt) {
            return `${this.name} вже приготовано`;
        }

        const result = this.onPrepare();
        this.preparedAt = new Date();
        return result;
    }

    public serve(): string {
        if (!this.preparedAt) {
            return `${this.name} ще не приготовано! Спочатку викличте prepare()`;
        }
        return this.onServe();
    }

    protected abstract onPrepare(): string;
    protected abstract onServe(): string;
    public abstract getDescription(): string;

    protected getBasicInfo(): string {
        return `${this.name} (${this.calories} ккал, ${this.price} грн)`;
    }

    public isPrepared(): boolean {
        return this.preparedAt !== null;
    }
}
