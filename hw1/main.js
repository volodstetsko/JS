
<!-- - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.-->
let a;
a = 'hello';
let b;
b = 'owu';
let c;
c = 'com';
let d;
d = 'ua';
let one;
one = 1;
let des;
des = 10;
let minus;
minus = -999;
let two;
two = 123;
let pi;
pi = 3.14;
let twoseven;
twoseven = 2.7;
let duo;
duo = 16;
let tr;
tr = true;
let fal;
fal = false;

<!--Вивести кожну змінну за допомогою: console.log , alert, document.write-->
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(one);
console.log(des);
console.log(minus);
console.log(two);
console.log(pi);
console.log(twoseven);
console.log(duo);
console.log(tr);
console.log(fal);

alert(a);
alert(b);
alert(c);
alert(d);
alert(one);
alert(des);
alert(minus);
alert(two);
alert(pi);
alert(twoseven);
alert(duo);
alert(tr);
alert(fal);


document.write(a + "<br/>");
document.write(b + "<br/>");
document.write(c + "<br/>");
document.write(d + "<br/>");
document.write(one + "<br/>");
document.write(des + "<br/>");
document.write(minus);
document.write(two);
document.write(pi);
document.write(twoseven);
document.write(duo + "<br/>");
document.write(tr + "<br/>");
document.write(fal);

<!-- - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)-->

let firstName;
let middleName;
let lastName;
firstName = 'Володимир';
middleName = 'Богданович';
lastName = 'Стецькович';
let person = firstName + ' ' + middleName + ' ' + lastName;
console.log(person);


<!-- - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.-->
<!--let a = 100; let b = '100'; let c = true;-->
let q = 100;
let w = '100';
let e = true;
console.log(typeof q, q);
console.log(typeof w, w);
console.log(typeof e, e);

<!-- - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль-->
let z = prompt("Ваше ім'я");
let x = prompt("По батькові");
let s = + prompt("Скільки Вам років");
console.log(z, x, s);
