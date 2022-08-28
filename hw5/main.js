// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// let areaRectangle = (a, b) => a * b;
// console.log(areaRectangle(10, 20));

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function areaCircle (r){
//  let res = 3.14 * r * r;
//  return res;
// }
//
// let A = areaCircle(5);
// console.log(A);

// let areaCircle = r => 3.14 * r * r;
// console.log(areaCircle(10));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// let areaCylinder = (h, r) => 3.14 * r * r * 2 + 2 * 3.14 * r * h;
// console.log(areaCylinder(30, 15));

// - створити функцію яка приймає масив та виводить кожен його елемент

// function arrayPrint (...arr) {
//     for (let arrElem of arr){
//     console.log(arrElem);
//             }
// }
//     arrayPrint(1,25,548,54,`array`)


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function pWrite (text) {
//     document.write(`<p> ${text} </p>`);
// }
//
// pWrite(`Hello`)

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function liWrite (Text) {
//     document.write(`<ul>
//         <li> ${Text}</li>
//         <li> ${Text}</li>
//         <li> ${Text}</li>
//     </ul>`)
// }
// liWrite(`Hello`)


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function liWrite2 (text, li) {
//     document.write(`<ul>`);
//         for (i = 0; i < li; i++) {
//             document.write(`<li> ${text} </li>`);
//         }
//     document.write(`</ul>`);
// }
// liWrite2(`HELLO`,10)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let arr = [125, `text`, true];
// function ulArrays (array) {
//     document.write(`<ul>`);
//     for (let item of array) {
//         document.write(`<li> ${item} </li>`);
//     }
//     document.write(`</ul>`);
// }
//
// ulArrays(arr);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let users =
// [
//     {
//         id: 1215,
//         name: `vasya`,
//         age: 45
//     },
//     {
//         id: 2255,
//         name: `vitya`,
//         age: 54
//     },
//     {
//         id: 3584,
//         name: `vova`,
//         age: 25
//     },
//     {
//         id: 6549,
//         name: `roma`,
//         age: 18
//     }
// ];
// function usersWrite (array) {
// for (const user of array) {
//     for (const key in user) {
//         document.write(`<div> ${key} ${user[key]} </div>`);
//     }
//         document.write(`-------------------`)
//
// }
// }
//
// usersWrite(users);


// - створити функцію яка повертає найменьше число з масиву

// function minArray(...arr) {
//     let min = arr[0];
//     for (let item of arr) {
//         if (min > item) {
//             min = item
//         }
//     }
//     return min;
// }
// console.log(minArray(155, -25, 35, 0, 23, -100));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// debugger;

// let array = [5, 8, 10];
//
// function sumNum(arr) {
//     let sum = 0;
//     for (let item of arr) {
//         sum += item;
//     }
//     return sum
// }
// console.log(sumNum(array));
