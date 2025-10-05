function throwError(resourse) {
    throw new Error(`Error ${resourse}`);
}

function send() {
    console.log('take your head');
    const response = throwError('https://google.com');
    console.log(response);
}

send();

