document.addEventListener("DOMContentLoaded", function(){

// задача 1 проверка возраста

    const age = prompt("введите ваш возраст:");
if (age < 65) {
    console.log("вам ещё рано на пенсию");
} else {
    console.log("поздравляем с пенсионным возрастом!");
}

// задача 2 сравнение чисел

const num1 = prompt("введите первое число:");
const num2 = prompt("введите второе число:");

if (num1 > num2) {
    console.log("первое число больше");
} else if (num1 < num2) {
    console.log("второе число больше");
} else {
    console.log("числа равны");
}

// задача 3 определение четности

const number = prompt("введите число:");
if (number % 2 === 0) {
    console.log("это чётное число");
} else {
    console.log("это нечётное число");
}

// задача 4 простое сравнение

const num3 = prompt("введите число:");
if (num3 > 100) {
    console.log("большое число");
} else if (num3 < 100) {
    console.log("маленькое число");
} else {
    console.log("точно 100!");
}

// задача 5 проверка логина и пароля

const login = prompt("введите логин:");
const password = prompt("введите пароль:");
if (login === "admin" && password === "12345") {
    console.log("добро пожаловать!");
} else {
    console.log("неверный логин или пароль");
}

// задача 6 проверка года

const year = prompt("введите год:");

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log("это високосный год");
} else {
    console.log("это не високосный год");
}


// задача 7 угадай число


const secretNumber = 9;
const userGuess = prompt("угадайте число от 1 до 10:");

if (userGuess == secretNumber) {
    console.log("вы угадали!");
} else {
    console.log("попробуйте ещё раз!");
}


})