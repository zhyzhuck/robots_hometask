
import { Course } from './models/course.js';

const course_QATS = new Course('QA_TS_Automation', 'robot_dreams', 33000, 28);
const course_English = new Course('English', 'Teacher', 4400, 8);

const qa_course = {
    _name: 'QA_Automation',
    _company: 'r_d',
    _price: 30000,
    _numLessons: 28,
    _duration: 120,
    props: {
        type_lesson: 'online',
        online: true,
        offline: false,
        participants: 63,
        hometask: true
    },

    get name() {
        return this._name.toLocaleUpperCase() + ' by company ' + this._company.toLocaleUpperCase();
    },

    set price(value) {
        this._price *= value;
    },

    get price() {
        return this._price;
    },

    logInfo() {
        console.log(
            `${this._name} by company ${this._company.toUpperCase()} | Total: ${this.price}`
        );
    }

};

course_QATS.logInfo();
console.log('one lesson:', course_QATS.pricePerOneLesson);
console.log('price for course:', course_QATS.price);

course_English.logInfo();
console.log('one lesson:', course_QATS.pricePerOneLesson);
console.log('price for course:', course_QATS.price);

console.log(qa_course.name);
qa_course.logInfo();

qa_course.price = 200;
qa_course.logInfo();
