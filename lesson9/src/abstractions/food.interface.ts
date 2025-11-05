export interface IDish {
    getName(): string;
    getCalories(): number;
    getPrice(): number;
    getIngredients(): string[];
    prepare(): string;
    serve(): string;
    getDescription(): string;
}

export interface IDessert extends IDish {
    getSweetness(): number;
    getTemperature(): 'cold' | 'room' | 'warm';
    hasGluten(): boolean;
}

export interface IFreezable {
    getFreezingTime(): number;
    getMeltingSpeed(): number;
    canBeRefrozen(): boolean;
}

export interface IDietInfo {
    isVegan(): boolean;
    isGlutenFree(): boolean;
    isLactoseFree(): boolean;
    getAllergens(): string[];
}

export interface IDecorable {
    addDecoration(decoration: string): void;
    getDecorations(): string[];
    removeDecoration(decoration: string): void;
}
