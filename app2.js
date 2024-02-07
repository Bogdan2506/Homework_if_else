// Известны два расстояния. Одно в километрах, другое - в футах (1 фут = 0,305м). Какое расстояние меньше?


let firstDistance = parseInt(prompt("ВВедіть відстань в кілометрах:"));
let secondDistance = parseInt(prompt("Введіть відстань в футах:"));

let secondDistanceFut = (secondDistance * 0.305 / 1000);




if (firstDistance < secondDistanceFut) {
    result = ("Відстань у кілометрах менше.");
} else if (firstDistance > secondDistanceFut) {
    result = ("Відстань у футах менше.");
} else {
    result = ("Відстані однакові.");
}
alert(result);



// if (firstDistance > secondDistanceFut) {
//     result = `First distance:${firstDistance}km is bigger than Second distance ${secondDistanceFut}FUT `;
// } else if (firstDistance < secondDistanceFut) {
//     result = `Second distance:${secondDistanceFut} FUT is bigger than First distance ${firstDistance}km `;
// } else {
//     result = `The dictance are equal`;
// }

// alert(result);