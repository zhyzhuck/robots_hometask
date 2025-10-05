fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => {
        console.log(response, response.ok, response.status);
        return response.json();
    })
    .then(json => console.log(json))
    .catch(e => console.log(e));
