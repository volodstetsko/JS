// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let arrays = [215, 358, 'text', 'name', 1984, true, [1,5,9,10], -9854, 'firsname', {age:55}];

console.log(arrays[0]);
console.log(arrays[1]);
console.log(arrays[2]);
console.log(arrays[3]);
console.log(arrays[4]);
console.log(arrays[5]);
console.log(arrays[6]);
console.log(arrays[7]);
console.log(arrays[8], arrays[9]);


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

    // let book1 = {
    //     title: 'Invited list',
    //     pageCount:351,
    //     genre: 'detective',
    // }
    //
    // let book2 = {
    //     title: 'metro 2023',
    //     pageCount:453,
    //     genre: 'fantastic',
    // }
    //
    // let book3 = {
    //     title: 'double',
    //     pageCount:255,
    //     genre: 'action',
    // }

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age

let book1 = {
    title: 'Invited list',
    pageCount: 351,
    genre: 'detective',
    autors: [
        {name: 'Petro', age: 57},
    ]
};

let book2 = {
    title: 'metro 2023',
    pageCount: 453,
    genre: 'fantastic',
    autors: [
        {name: 'Dima', age: 35},
    ]
};

let book3 = {
    title: 'double',
    pageCount: 255,
    genre: 'action',
    autors: [
        {name: 'Anna', age: 42},
    ]
};

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users = [
    {
        name: 'Anton',
        username: 'Petrov',
        password: 'Dfghfhrtyh85'
    },

    {
        name: 'Ivan',
        username: 'Savin',
        password: 'fdghG545'
    },

    {
        name: 'Fedir',
        username: 'Bisrov',
        password: 'xcvdh25E'
    },

    {
        name: 'Kolya',
        username: 'Kopatych',
        password: 'qwert12345Y'
    },

    {
        name: 'Vovan',
        username: 'Kislov',
        password: '2165;kjW'
    },

    {
        name: 'Malta',
        username: 'Lunych',
        password: '5254;lL'
    },

    {
        name: 'Anna',
        username: 'Berta',
        password: 'ujytfresx'
    },

    {
        name: 'Geka',
        username: 'Dym',
        password: '8456549'
    },

    {
        name: 'Kosmos',
        username: 'Papiros',
        password: 'yugyrdsry552'
    },

    {
        name: 'Didzo',
        username: 'Salat',
        password: '123456789P'
    },
]

    console.log(users[0].password);
    console.log(users[1].password);
    console.log(users[2].password);
    console.log(users[3].password);
    console.log(users[4].password);
    console.log(users[5]['password']);
    console.log(users[6]['password']);
    console.log(users[7]['password']);
    console.log(users[8]['password']);
    console.log(users[9]['password']);
