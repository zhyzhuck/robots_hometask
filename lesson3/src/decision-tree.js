const score = 20;
const attendance = 28;
const homework = 6;

let result = '';

if (score >= 90 && attendance >= 90 && homework >= 8) {
    result = 'Відмінно! Студент отримує А (12 балів)';
} else if (score >= 80 && attendance >= 85 && homework >= 7) {
    result = 'Дуже добре! Студент отримує B (10-11 балів)';
} else if (score >= 70 && (attendance >= 75 || homework >= 6)) {
    result = 'Добре! Студент отримує C (8-9 балів)';
} else if (score >= 60 && attendance >= 60) {
    result = 'Задовільно. Студент отримує D (6-7 балів)';
} else if (score < 60 || attendance < 50 || homework < 4) {
    result = 'Незадовільно. Студент отримує F (1-5 балів)';
    if (score < 60 && attendance < 50 && homework < 4) {
        result += ' Критично: низькі показники у всіх категоріях!';
    } else if (score < 60) {
        result += ' Проблема: недостатньо балів на іспитах';
    } else if (attendance < 50) {
        result += ' Проблема: низька відвідуваність занять';
    } else if (homework < 4) {
        result += ' Проблема: недостатньо виконаних домашніх завдань';
    }
} else {
    result = ' Потребує додаткової оцінки';
}

console.log(result);


