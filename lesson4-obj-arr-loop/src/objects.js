const apartmant = {};
apartmant.id = '111111';
apartmant['type'] = 'apartment';
apartmant['publishedDate'] = '2024-10-01';
apartmant.price = {
    amount: 85000,
    currency: 'USD'
};
apartmant.characteristics = {
    totalArea: 50,
    livingArea: 35,
    kitchenArea: 10,
    rooms: 2,
    bedrooms: [20, 15],
    bathrooms: 1,
    balconies: 1
};

console.log(apartmant);
console.log(JSON.stringify(apartmant));

const copyApartmant = apartmant;
copyApartmant.type = 'house';
console.log(copyApartmant, apartmant);


const levelCopyApartmant = {...apartmant};
levelCopyApartmant.id = '222222';
levelCopyApartmant.price.amount = 185000;
console.log(levelCopyApartmant, copyApartmant, apartmant);

const deepCopy = structuredClone(apartmant);
const deepCopyWithDbConv = JSON.parse(JSON.stringify(apartmant));
deepCopy.id = '33333';
deepCopy.type = 'double_house';
deepCopy.price.amount = 285000;

console.log(apartmant, deepCopy, deepCopyWithDbConv);


const objKeys = Object.keys(apartmant);
const objValues = Object.values(apartmant);
const objEntries = Object.entries(apartmant);
const keysInside = Object.keys(apartmant.characteristics);
console.log('objKeys=', objKeys, '\nobjValues=', objValues, '\nobjEntries=', objEntries);
console.log('keysInside=', keysInside);


const deepCopyWhithMethods = structuredClone(apartmant);

deepCopyWhithMethods.method = function() {
    console.log(this.type + ' cost ' + this.price.amount + ' ' + this.price.currency );
};
deepCopyWhithMethods.method();

function objConstructor(name, props) {
    this.name = name;
    this.props = props;
};

const newObjByConstructor = new objConstructor('villa', {id: '232323', price: 450000, currency: 'EUR' });
console.log(newObjByConstructor);
