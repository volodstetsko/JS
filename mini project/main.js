// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули
//

    let mainDiv = document.createElement('div');
    mainDiv.classList.add(`wrap`);
    document.body.appendChild(mainDiv);

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => users.forEach(user => {

        let div = document.createElement('div');
        div.innerText = `${user.id}  --  ${user.name}`;

        let a = document.createElement(`a`);
        a.href = `user-details.html?id=${user.id}`;
        a.innerText = `user-details`;
        div.appendChild(a);

        mainDiv.appendChild(div);
        div.classList.add(`user`);


    }));

