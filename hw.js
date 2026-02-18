document.addEventListener("DOMContentLoaded", function(){

// задача 1

let str = 'abcde';
console.log("задача 1");
console.log(str[0]);
console.log(str[1]);
console.log(str[4]);


// задача 2

let a = parseInt(prompt("введите первое число:"));
let b = parseInt(prompt("введите второе число"));


console.log("задача 2:");
console.log(a > 0 || b > 0);


// задача 3

let age = parseInt(prompt("введите ваш возраст"));
console.log("задача 3:")
if (age >=18){
    console.log("совершеннолетний");
}
else {
    console.log("несовершеннолетний");
}





})