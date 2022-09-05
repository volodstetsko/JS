// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
//

// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
//
// }
//
// let users = [];
// users [0] = new User (25, `nik`, `nikolo`, `fgh@kjlk`, 236584);
// users [1] = new User (11, `neo`, `neopolo`, `gghr@kjlk`, 526464);
// users [2] = new User (54, `nuk`, `nukkolo`, `iyu@kjlk`, 000412);
// users [3] = new User (85, `bak`, `bakkolo`, `uytr@kjlk`, 752745);
// users [4] = new User (74, `der`, `derkolo`, `wert@kjlk`, 852145);
// users [5] = new User (51, `boy`, `boykolo`, `ujjted@kjlk`, 122658);
// users [6] = new User (57, `boy`, `bolllkolo`, `ujjted@kjlk`, 1852658);
// users [7] = new User (59, `roy`, `roikolo`, `tyujuj@kjlk`, 852963);
// users [8] = new User (35, `jak`, `jakkolo`, `ghjth@kjlk`, 987456);
// users [9] = new User (76, `dyk`, `dykkolo`, `lijhty@kjlk`, 365874);
//
// console.log(users);


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

// let filter = users.filter(user => user.id % 2 === 0);
// console.log(filter);
//
// //
// // - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
// let sort = users.sort((u1,u2) => (u1.id - u2.id));
// console.log(sort);

//
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

// class Client {
//     constructor(id, name, surname , email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.emai = email;
//         this.phone = phone;
//         this.order = order;
//
//     }
// }
//
// let clients = [];
//
// let client1 = new Client (25, `nik`, `nikolo`, `fgh@kjlk`, 236584,[1,5,69,84,5]);
// let client2 = new Client (11, `neo`, `neopolo`, `gghr@kjlk`, 526464,[1,5]);
// let client3 = new Client (54, `nuk`, `nukkolo`, `iyu@kjlk`, 000412,[5,6,85,4.5]);
// let client4 = new Client (85, `bak`, `bakkolo`, `uytr@kjlk`, 752745,[5,6,8]);
// let client5 = new Client (74, `der`, `derkolo`, `wert@kjlk`, 852145,[58,5,8,9,8,3]);
// let client6 = new Client (51, `boy`, `boykolo`, `ujjted@kjlk`, 122658,[1]);
// let client7 = new Client (57, `boy`, `bolllkolo`, `ujjted@kjlk`, 1852658,[]);
// let client8 = new Client (59, `roy`, `roikolo`, `tyujuj@kjlk`, 852963,[8,5,4,7,8,9,5,2,1,0]);
// let client9 = new Client (35, `jak`, `jakkolo`, `ghjth@kjlk`, 987456,[5,6,8,5,4,63]);
// let client10 = new Client (76, `dyk`, `dykkolo`, `lijhty@kjlk`, 365874,[85,4,5,2,1,47,5]);
//
// clients.push(client1,client2,client3,client4,client5,client6,client7,client8,client9,client10);
//
// console.log(clients);
//
//
// // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// //
//
// let sort = clients.sort((a, b) => a.order.length - b.order.length);
// console.log(sort);

//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//

// function Car(model,producer,year,maxSpeed,engine){
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engine = engine;
//
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     }
//
//     this.inf0 = function () {
//         for (const item in this) {
//             if (typeof this[item] !== 'function') {
//                 console.log(`${item} -- ${this[item]}`);
//             }
//         }
//     }
//
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed += newSpeed;
//     }
//
//     this.changeYear = function (newValue) {
//         this.year += newValue;
//     }
//
//     this.addDriver = function (driver) {
//         this.driver = driver;
//     }
//
// }
//
// let car = new Car('Kia','Korea',2000,200,2.6);
//
// console.log(car);
// car.drive();
// car.inf0();
// car.increaseMaxSpeed(50);
// car.changeYear(5);
// car.addDriver({name: "Vasya", age: 22});
// console.log(car);

//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//

class Car{
    constructor(model, producer,year, maxSpeed,engine) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engine = engine;
    }
    drive(){
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }

    inf0(){
        for (const item in this) {
            if (typeof this[item] !== 'function') {
                console.log(`${item} -- ${this[item]}`);
            }
        }
    }

    increaseMaxSpeed(newSpeed){
        this.maxSpeed = this.maxSpeed + newSpeed;//  this.maxSpeed += newSpeed
    }

    changeYear(newValue){
        this.year += newValue;
    }

    addDriver(driver){
        this.driver = driver;
    }

}

let car = new Car('Kia','Korea',2000,200,2.6);

let objDriver = {
    name : 'Petro',
    age: 44
}

console.log(car);
car.drive();
car.inf0();
car.increaseMaxSpeed(100);
car.changeYear(10);
car.addDriver(objDriver);
console.log(car);


//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Cinderella{

    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

let cinderella1 = new Cinderella('Alina',22,35);
let cinderella2 = new Cinderella('Alina',22,36);
let cinderella3 = new Cinderella('Alina',22,37);
let cinderella4 = new Cinderella('Alina',22,38);
let cinderella5 = new Cinderella('Alina',22,34);

let array = [cinderella1,cinderella2,cinderella3,cinderella4,cinderella5];

class Prince extends Cinderella{
    constructor(name, age, findFootSize) {
        super(name,age);
        this.findFootSize = findFootSize;
    }
}

let prince = new Prince('Vasya', 22, 37);

let find = (array, prince) => {
    for (const item of array) {
        if (prince.findFootSize === item.footSize) {
            return `My Cinderella is ${item.name}`
        }
    }
}

console.log(find(array, prince));

let cinderella = array.find(value => prince.findFootSize === value.footSize);
console.log(cinderella);