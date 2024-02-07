// Дано трехзначное число. 
// Верно ли, что все его цифры одинаковые? 
// Есть ли среди его цифр одинаковые?

let number = parseInt(prompt("Введіть тризначне  число: "));
if (number > 999) {
    alert("Ви ввели більше трьох цифр.");
} else if (number < 10) {
    alert("Ви ввели одну цифру");
}

// let number = 123;
let num3 = number % 10;
let num2 = parseInt((number % 100) / 10);
let num1 = parseInt((number % 1000) / 100);

if (num1 === num2 && num2 === num3 && num1 === num3) {
    alert(`Всі цифри цього числа однакові`);
} else {
    alert(`Цифри цього числа різні`);
}

if (num1 === num2) {
    alert(`є онакові числа`);
} else if (num2 === num3) {
    alert(`є онакові числа`);
} else if (num1 === num3) {
    alert(`є онакові числа`);
} else {
    alert(`немає одакових цифр`);
}