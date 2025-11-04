export abstract class Animal {
    protected id: number;
    protected name: string;
    protected species: string;

    public constructor(id: number, name: string, species: string) {
        this.id = id;
        this.name = name;
        this.species = species;
    }

    public abstract makeSound(): string;
    public abstract getInfo(): string;

    public getId(): number {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    public getSpecies(): string {
        return this.species;
    }
}

export abstract class Pet extends Animal {
    protected owner: string;
    protected age: number;

    public constructor(id: number, name: string, species: string, owner: string, age: number) {
        super(id, name, species);
        this.owner = owner;
        this.age = age;
    }

    public abstract care(): string;

    public getOwner(): string {
        return this.owner;
    }

    public getAge(): number {
        return this.age;
    }
}

export class DogPet extends Pet {
    private breed: string;
    private trainedCommands: string[];

    public constructor(
        id: number,
        name: string,
        owner: string,
        age: number,
        breed: string,
        trainedCommands: string[] = []
    ) {
        super(id, name, 'Dog', owner, age);
        this.breed = breed;
        this.trainedCommands = trainedCommands;
    }

    public makeSound(): string {
        return ' Гав-гав!';
    }

    public getInfo(): string {
        return `Собака ${this.name} (${this.breed}), вік: ${this.age} років, власник: ${this.owner}`;
    }

    public care(): string {
        return `Вигуляйте ${this.name}, погодуйте та пограйтеся з ним!`;
    }

    public teachCommand(command: string): void {
        if (!this.trainedCommands.includes(command)) {
            this.trainedCommands.push(command);
            console.log(`${this.name} навчився команді: ${command}`);
        } else {
            console.log(`${this.name} вже знає цю команду`);
        }
    }

    public executeCommand(command: string): string {
        if (this.trainedCommands.includes(command)) {
            return `${this.name} виконує команду: ${command}!`;
        }
        return `${this.name} не знає команди: ${command}`;
    }

    public getTrainedCommands(): string[] {
        return this.trainedCommands;
    }

    public displayInfo(): void {
        console.log(` 
    Ім'я:        ${this.name.padEnd(47)}
    Порода:      ${this.breed.padEnd(47)}
    Вік:         ${this.age} років${' '.repeat(42)}
    Власник:     ${this.owner.padEnd(47)}
    Команди:     ${this.trainedCommands.length} навчених${' '.repeat(37)}
    Звук:        ${this.makeSound().padEnd(47)}
    Догляд:      ${this.care().substring(0, 47).padEnd(47)}
    `);
    }
}

export interface IVeterinaryService {
    vaccinate(pet: Pet): void;
    checkup(pet: Pet): string;
    getServiceCost(pet: Pet): number;
}

export class VeterinaryClinic implements IVeterinaryService {
    private name: string;
    private patients: Pet[] = [];

    public constructor(name: string) {
        this.name = name;
    }

    public vaccinate(pet: Pet): void {
        console.log(`${pet.getName()} вакциновано у клініці ${this.name}`);
        this.addPatient(pet);
    }

    public checkup(pet: Pet): string {
        this.addPatient(pet);
        const status = pet.getAge() < 7 ? 'здоровий' : 'потребує регулярних оглядів';
        return `${pet.getName()} обстежено. Стан: ${status}`;
    }

    public getServiceCost(pet: Pet): number {
        const baseCost = 500;
        const ageFactor = pet.getAge() > 10 ? 1.5 : 1;
        return baseCost * ageFactor;
    }

    private addPatient(pet: Pet): void {
        if (!this.patients.find((p) => p.getId() === pet.getId())) {
            this.patients.push(pet);
        }
    }

    public getPatientCount(): number {
        return this.patients.length;
    }

    public displayClinicInfo(): void {
        console.log(`ВЕТЕРИНАРНА КЛІНІКА ${this.name} Пацієнтів: ${this.patients.length.toString()}`);
    }
}
