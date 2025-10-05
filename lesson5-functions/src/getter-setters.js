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
        return this._name.toLocaleUpperCase() + ' by company' + this._company.toLocaleUpperCase()
    },

    set price(value) {
        this._price *= value;
    }
}

class course {
    #name;
    company;
    _price: 500,
    _numLessons: 1,
    _duration: 1,

    get name() {
        return this._name.toLocaleUpperCase() + ' by company' + this._company.toLocaleUpperCase()
    };

    get price() {
        return this._price + 'grn'
    };


    set price(value) {
        this._price *= value;
    };
    logInfo() {
        console.log(this.#name, )
    };
}