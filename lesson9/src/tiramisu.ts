import { Dessert } from './deserts';
import { IDecorable } from './abstractions/food.interface';

export class Tiramisu extends Dessert implements IDecorable {
    private coffeeLayers: number;
    private mascarponeAmount: number;
    private decorations: string[] = [];

    public constructor(
        name: string,
        calories: number,
        price: number,
        ingredients: string[],
        sweetness: number,
        coffeeLayers: number,
        mascarponeAmount: number
    ) {
        super(name, calories, price, ingredients, sweetness, 'cold', true, {
            isVegan: false,
            isGlutenFree: false,
            isLactoseFree: false,
            allergens: ['Яйця', 'Молоко', 'Глютен']
        });
        this.coffeeLayers = coffeeLayers;
        this.mascarponeAmount = mascarponeAmount;
    }

    public addDecoration(decoration: string): void {
        if (!this.decorations.includes(decoration)) {
            this.decorations.push(decoration);
            console.log(` Додано: ${decoration}`);
        }
    }

    public getDecorations(): string[] {
        return [...this.decorations];
    }

    public removeDecoration(decoration: string): void {
        const index = this.decorations.indexOf(decoration);
        if (index > -1) {
            this.decorations.splice(index, 1);
        }
    }

    protected onPrepare(): string {
        return `Приготування ${this.name}:
    1. Заварювання міцної кави
    2. Приготування маскарпоне крему (${this.mascarponeAmount}г)
    3. Змочування печива савоярді в каві
    4. Шарування: ${this.coffeeLayers} шарів
    5. Охолодження 4-6 годин
    6. Посипання какао`;
    }

    protected getServingSuggestion(): string {
        return 'охолодженим, посипаним какао-порошком';
    }

    public getDescription(): string {
        return `
    Назва:           ${this.name}
    Калорії:         ${this.calories} ккал${' '}
    Ціна:            ${this.price} грн${' '}
    Шарів:           ${this.coffeeLayers}${' '}
    Маскарпоне:      ${this.mascarponeAmount}г${' '}
    Солодкість:      ${this.sweetness}/10${' '}
    Алергени:        ${this.allergens.join(', ')}${' '}
    `.trim();
    }
}
