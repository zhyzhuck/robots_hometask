import { Dog } from 'src/models';
import { IDogSummary } from 'src/models';

export class DogSummary implements IDogSummary {
    public id: number;
    public name: string;
    public origin: string;
    public temperament: string;
    public lifeSpan: string;
    public size: string;
    public characteristics: string[];

    public constructor(dog: Dog) {
        this.id = dog.id;
        this.name = dog.name;
        this.origin = dog.origin || 'Невідомо';
        this.temperament = dog.temperament || 'Не вказано';
        this.lifeSpan = dog.life_span;

        const avgWeight = dog.getAverageWeight();
        if (avgWeight < 10) {
            this.size = 'Маленька';
        } else if (avgWeight < 25) {
            this.size = 'Середня';
        } else {
            this.size = 'Велика';
        }

        this.characteristics = [];

        if (dog.breed_group) {
            this.characteristics.push(`Група: ${dog.breed_group}`);
        }

        if (dog.bred_for) {
            this.characteristics.push(`Призначення: ${dog.bred_for}`);
        }

        if (dog.isLargeBreed()) {
            this.characteristics.push('Велика порода');
        }

        const temperamentList = dog.getTemperamentList();
        if (temperamentList.length > 0) {
            this.characteristics.push(`Риси: ${temperamentList.slice(0, 3).join(', ')}`);
        }
    }

    public displaySummary(): void {
        console.log(`
    ${this.name}
    Походження: ${this.origin}
    Розмір: ${this.size}
    Тривалість життя: ${this.lifeSpan}
    Темперамент: ${this.temperament.substring(0, 42)}
    Характеристики:`);

        this.characteristics.forEach((char, index) => {
            console.log(` ${(index + 1).toString()}. ${char}`);
        });
    }

    public toJSON(): string {
        return JSON.stringify(this, null, 2);
    }
}
