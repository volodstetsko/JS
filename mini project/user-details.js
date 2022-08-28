    //
    // На странице user-details.html:
    // 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
    // 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
    // (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
    //     6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.
    //

    let url = new URL(location.href);
    let id = url.searchParams.get(`id`);


    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response => response.json())
    .then(info => {
    let div = document.createElement('div');
    div.classList.add(`user-details`);

    for (const infoElement in info) {
          if (typeof info[infoElement] === 'object') {
              let h4 = document.createElement(`h4`);
              h4.innerText = `${infoElement}:`;
              div.appendChild(h4);
              h4.classList.add(`details`);

            for (const infoElement2 in info[infoElement]) {
                if (typeof info[infoElement][infoElement2] === 'object') {
                    let p = document.createElement(`p`);
                    p.innerText = `${infoElement2}:`;
                    h4.appendChild(p);

                    for (const infoElement3 in info[infoElement][infoElement2]) {
                        let p = document.createElement(`p`);
                        p.innerText = `${infoElement3}: ${info[infoElement][infoElement2][infoElement3]}`;
                        h4.appendChild(p)
                    }

                } else {
                let p = document.createElement(`p`);
                p.innerText = `${infoElement2}: ${info[infoElement][infoElement2]}`;
                h4.appendChild(p)
                }
            }
            }

        else {
    let h4 = document.createElement(`h4`);
    h4.innerText = `${infoElement}: ${info[infoElement]}`;
    div.appendChild(h4);
    h4.classList.add(`details`);
        }
    }

    let button = document.createElement(`button`);
    button.innerText = `post of current user`;
    button.onclick = function (){

    fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
    .then(response => response.json())
    .then(posts => {
    let ul = document.createElement('ul');

    for (const post of posts) {
    let li = document.createElement(`li`);
    li.innerText = post.title;
    ul.appendChild(li);
    li.classList.add(`post`);

    let a = document.createElement(`a`);
    a.href = `post-details.html?id=${post.id}`;
    a.innerText = `post-details`;
    li.appendChild(a);
    }

    document.body.appendChild(ul);
    ul.classList.add(`posts`);

    });
    }
    div.appendChild(button);
    button.classList.add(`button`);

    document.body.appendChild(div);
});

