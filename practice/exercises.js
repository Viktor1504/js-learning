'use strict'

//triangle in console
const lines = 5;
let result = '';

for (let i = 0; i <= lines; i++) {
    result += ' '.repeat(lines - i) + '*'.repeat(2 * i + 1) + '\n';
}

console.log(result);

// Место для первой задачи
function sayHello(name) {
    return 'Привет, ' + name + '!';
}

console.log(sayHello('Victor'))

// Место для второй задачи
function returnNeighboringNumbers(num) {
    return [num - 1, num, num + 1];
}

console.log(returnNeighboringNumbers(5));

// Место для третьей задачи
function getMathResult(a, b) {
    if (typeof b !== 'number' || b <= 0) {
        return a;
    }

    let result = a;
    for (let i = 1; i < b; i++) {
        result += '---' + (a * (i + 1));
    }
    return result;
}

console.log(getMathResult(5, 8));

const logg = '12.2px';
console.log(parseInt(logg));

function calculateVolumeAndArea(length) {
    if (typeof (length) !== 'number' || length < 0 || !Number.isInteger(length)) {
        return "При вычислении произошла ошибка";
    }

    let volume = 0, area = 0;

    volume = length * length * length;
    area = 6 * (length * length);

    return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
}

console.log(calculateVolumeAndArea(5));

function getCoupeNumber(seatNumber) {
    if (typeof seatNumber !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)) {
        return 'Ошибка. Проверьте правильность введенного номера места';
    }
    if (seatNumber === 0 || seatNumber > 36) {
        return 'Таких мест в вагоне не существует';
    }
    return Math.ceil(seatNumber / 4);
}

console.log(getCoupeNumber(1));

console.log(`



`)

function getTimeFromMinutes(num) {
    if (typeof num !== 'number' || !Number.isInteger(num) || num < 0) {
        return "Ошибка, проверьте данные";
    }
    const hour = Math.floor(num / 60);
    const minutes = num % 60;

    let hourWord = 'часов';
    let minuteWord = 'минут';

    if (hour === 1 || (hour > 20 && hour % 10 === 1)) {
        hourWord = 'час';
    } else if ((hour >= 2 && hour <= 4) || (hour > 21 && (hour % 10 === 2 || hour % 10 === 3 || hour % 10 === 4))) {
        hourWord = 'часа';
    }

    if (minutes === 1 || (minutes > 20 && minutes % 10 === 1)) {
        minuteWord = 'минута';
    } else if ((minutes >= 2 && minutes <= 4) || (minutes > 21 && (minutes % 10 === 2 || minutes % 10 === 3 || minutes % 10 === 4))) {
        minuteWord = 'минуты';
    }

    return `Это ${hour} ${hourWord} и ${minutes} ${minuteWord}`
}

console.log(getTimeFromMinutes(770));

console.log(`



`)

function findMaxNumber(num1, num2, num3, num4) {
    let arr = [num1, num2, num3, num4];
    for (let arrKey of arr) {
        if (arr.length < 4 || typeof arrKey !== 'number') {
            return 0;
        }
    }
    return Math.max(num1, num2, num3, num4);
}

console.log(findMaxNumber(1, 5, 6.6, 11));

//Fibonacci function
function fib(n) {
    // Проверяем, является ли переданный аргумент положительным целым числом
    if (n < 1 || !Number.isInteger(n)) {
        return '';
    }

    // Инициализируем массив для хранения чисел Фибоначчи
    const fibSequence = [];

    // Вычисляем числа Фибоначчи
    for (let i = 0; i < n; i++) {
        if (i === 0) {
            fibSequence.push(0);
        } else if (i === 1) {
            fibSequence.push(1);
        } else {
            const nextFib = fibSequence[i - 1] + fibSequence[i - 2];
            fibSequence.push(nextFib);
        }
    }

    // Преобразуем массив чисел в строку, разделяя пробелами
    return fibSequence.join(' ');
}

// Пример использования
console.log(`Fibonacci ${fib(4)}`);


console.log(`


--------------Objects-------------
`)

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function (plan) {
        const lang = plan.skills.languages.join(' ').toUpperCase();
        return `Мне ${plan.age} и я владею языками: ${lang}`;
    }
};

console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

function showExperience(plan) {
    return plan['skills']['exp'];
}

console.log(showExperience(personalPlanPeter));

function showProgrammingLangs(plan) {
    let str = '';
    let programmingLangs = plan.skills.programmingLangs;

    if (Object.keys(programmingLangs).length > 0) {
        for (const key in programmingLangs) {
            str += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
        }
        return str;
    }
    return str;
}

console.log(showProgrammingLangs(personalPlanPeter));

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    if (arr.length > 0) {
        return `Семья состоит из: ${arr.join(' ')}`;
    }
    return 'Семья пуста';
}

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    arr.forEach(city => {
        console.log(city.toLowerCase());
    });
}

console.log(showFamily(family));
console.log();
standardizeStrings(favoriteCities);
console.log();

const someString = 'This is some strange string';

function reverse(str) {
    if (typeof str != 'string') {
        return 'Ошибка!';
    }
    return str.split('').reverse().join('');
}

console.log(reverse(someString));
console.log();

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    let str = arr.length === 0 ? 'Нет доступных валют' : 'Доступные валюты:\n';
    arr.forEach(elem => {
        if (elem !== missingCurr) {
            str += `${elem}\n`;
        }
    });
    return str;
}

console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY'));

const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
}

function isBudgetEnough(data) {
    let v = 0;
    data.shops.forEach(item => {
        v += item.width * item.length * data.height;
    });
    return v * data.moneyPer1m3 <= data.budget ? 'Бюджета достаточно' : 'Бюджета недостаточно';
}

console.log(isBudgetEnough(shoppingMallData));

console.log();

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi'];

function sortStudentsByGroups(arr) {
    arr.sort();
    let allArr = [];
    const lengthArr = Math.floor(arr.length / 3) * 3;
    for (let i = 0; i < lengthArr; i += 3) {
        allArr.push(arr.slice(i, i + 3));
    }
    arr.length % 3 === 0 ? allArr.push('Оставшиеся студенты: -') : allArr.push(`Оставшиеся студенты: ${arr.slice(lengthArr).join(', ')}`);
    return allArr;
}

console.log(sortStudentsByGroups(students));