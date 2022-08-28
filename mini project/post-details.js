
    //     На странице post-details.html:
    // 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
    // 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
    //


    let url = new URL(location.href);
    let id = url.searchParams.get(`id`);

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(response => response.json())
    .then(postInfo => {
    let div = document.createElement('div');

    for (const infoElement in postInfo) {
    let p = document.createElement(`p`);
    p.innerText = `${infoElement}: ${postInfo[infoElement]}`;
    div.appendChild(p);
    p.classList.add(`post-details`);
}
    document.body.appendChild(div);

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    .then(response => response.json())
    .then(comentPosts => {
    let ul = document.createElement('ul');

    for (const comentPost of comentPosts) {
    let li = document.createElement(`li`);
    li.innerText = comentPost.body;
    ul.appendChild(li);
    li.classList.add(`coment`);
}

    document.body.appendChild(ul);
    ul.classList.add(`coments`);

});
})



