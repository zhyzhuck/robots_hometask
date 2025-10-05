async function getData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const json = await response.json();
    console.log(json);

}


(async () => {
    console.log('');
    const response = await getData();
    console.log(response);
    console.log('after start');
})();
