export class Course {
    _name;
    company;
    _price;
    numLessons;

    constructor(name, company, price, numLessons) {
        this._name = name;
        this.company = company;
        this._price = price;
        this.numLessons = numLessons;
    }

    set name(value) {
        this._name = value.toLocaleLowerCase();
    }

    get name() {
        return this._name.toLocaleUpperCase();
    }

    set price(value) {
        if (typeof value !== 'number' || value <= 0) {
            throw new Error('Price must be a positive number');
        }
        this._price = value;
    }

    get price() {
        return this._price + ' UAH';
    }

    get pricePerOneLesson() {
        const cost = (this._price / this.numLessons).toFixed(2);
        return  cost + ' UAH';
    }

    logInfo() {
        console.log(
            `${this.name} by company ${this.company.toUpperCase()} | Total: ${this.price}, per lesson: ${this.pricePerOneLesson}`
        );
    }
}
