// Дано двузначное число. Определить, какая из его цифр больше: первая или вторая?

let number = parseInt(prompt("Введіть двозначне число: "));
if (number > 99) {
    alert("Ви ввели більше двох цифр.");
} else if (number < 10) {
    alert(" ви ввели одну цифру");
}

// let number = 12;
let num2 = number % 10;
let num1 = parseInt((number % 100) / 10);


if (num1 > num2) {
    alert(`Перша цифра: ${num1} більша за другу:${num2}`);
} else if (num1 < num2) {
    alert(`Друга цифра: ${num2} більша за першу цифру: ${num1}`);
} else(
    alert('Цифри рівні')
);