
async function fetchUserData(userId) {
    const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
    return await fetch(url);
}

function processUserData(userData) {
    const processed = {
        fullInfo: `${userData.name} (${userData.username})`,
        location: `${userData.address.city}, ${userData.address.street}`
    };
    console.log(`ID: ${userData.id}`);
    console.log(`Ім'я: ${userData.name}`);
    console.log(`Email: ${userData.email}`);
    console.log(`Місто: ${userData.address.city}`);

    console.log('Повна інформація:', processed.fullInfo, processed.location);
    return processed;
}

function reduceUserData(processed) {
    const number = processed.fullInfo.length + processed.location.length;

    console.log('Ваше щасливе число:', number);
    return processed;
}

(async () => {
    try {
        const response = await fetchUserData(1);
        const data = await response.json();
        const response2 = await processUserData(data);
        const response3 = await reduceUserData(response2);
        return response3;
    } catch (error) {
        console.error("Виникла помилка:", error.message);
        throw error;
    }
})();

