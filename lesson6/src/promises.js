function fetchUserData(userId) {
    const url = `https://jsonplaceholder.typicode.com/users/${userId}`;

    return fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            console.log(`ID: ${data.id}`);
            console.log(`Ім'я: ${data.name}`);
            console.log(`Email: ${data.email}`);
            console.log(`Місто: ${data.address.city}`);
            return data;
        })
        .catch((error) => {
            console.error('Помилка при отриманні даних:', error.message);
            throw error;
        });
}

function processUserData(userData) {
    const processed = {
        fullInfo: `${userData.name} (${userData.username})`,
        location: `${userData.address.city}, ${userData.address.street}`
    };
    console.log('Повна інформація:', processed.fullInfo, processed.location);
    return processed;
}

function reduceUserData(processed) {
    const number = processed.fullInfo.length + processed.location.length;

    console.log('Ваше щасливе число:', number);
    return processed;
}

fetchUserData(1)
    .then((userData) => {
        return processUserData(userData);
    })
    .then((data) => reduceUserData(data))
    .catch((error) => {
        console.error('\nВиникла помилка:', error.message);
    });

console.log('\n=== Паралельні запити ===');
Promise.all([
    fetch('https://jsonplaceholder.typicode.com/users/1').then((r) => r.json()),
    fetch('https://jsonplaceholder.typicode.com/users/2').then((r) => r.json()),
    fetch('https://jsonplaceholder.typicode.com/users/3').then((r) => r.json())
])
    .then((users) => {
        console.log('\nОтримано користувачів:', users.length);
        users.forEach((user) => {
            console.log(`- ${user.name} (${user.email})`);
        });
    })
    .catch((error) => {
        console.error('Помилка паралельних запитів:', error);
    });
