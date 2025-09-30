const now = new Date();
const a = now.getHours();

console.log('Now ' + a + ' hours of day. Its time to'  );

switch (a) {
    case 5:
        console.log('sleep');
        break;
    case 7:
        console.log('get up! Good morning');
        break;
    case 9:
        console.log('work');
        break;
    case 18:
        console.log('go home');
        break;
    case 19:
        console.log('spend your time whith family');
        break;
    case 21:
        console.log('go to bed');
        break;
    default:
        console.log('enjoy your life whithout clock');
}

const b = 'string';
switch (b) {
    case 'string':
        console.log('b === string');
        break;
    case 'number':
        console.log('b === number');
        break;
    default:
        console.log('non of the conditions above');
}
