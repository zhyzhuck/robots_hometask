function throwError(response) {
    if (response.ok) return;
    throw new Error(`Помилка отримання данних ${response.status}`);
}

async function fetchWithFallback() {
    const primaryUrl = 'https://jsonplaceholder.typicode.com/nonexistent'; // неіснуючий ресурс
    const fallbackUrl = 'https://jsonplaceholder.typicode.com/todos/3'; // існуючий ресурс

    try {
        const response = await fetch(primaryUrl);
        throwError(response);
        const data1 = await response.json();
        console.log('Дані', data1);
    } catch (error) {
        console.warn('Перший лінк не відповідає:', error.message);
        console.log('Спроба достучатися до наступного лінку...');

        try {
            const response2 = await fetch(fallbackUrl);

            if (!response2.ok) {
                throw new Error('Помилка отримання данних №2');
            }

            const data2 = await response2.json();
            console.log('Дані №2:', data2);
        } catch {
            throw new Error('Обидва промахнулися');
        }
    }
}

fetchWithFallback().catch((err) => console.error('Помилка', err.message));
