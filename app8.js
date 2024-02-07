// Определить, является ли заданное шестизначное число зеркальным? (123321, 147741)

let number = parseInt(prompt("Введіть шестизначне число: "));


let digit6 = number % 10;
let digit5 = parseInt(number / 10) % 10;
let digit4 = parseInt(number / 100) % 10;
let digit3 = parseInt(number / 1000) % 10;
let digit2 = parseInt(number / 10000) % 10;
let digit1 = parseInt(number / 100000) % 10;


if (digit1 === digit6 && digit2 === digit5 && digit3 === digit4) {
    alert("Задане число є зеркальним.");
} else {
    alert("Задане число не є зеркальним.");
}