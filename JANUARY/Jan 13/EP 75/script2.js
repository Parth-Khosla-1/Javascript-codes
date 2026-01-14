fetch('https://dummyjson.com/users')
    .then((res1) => res1.json())
    .then((usersData) => {
        console.log(usersData)
        return fetch(`https://dummyjson.com/posts/user/${usersData.users[0].id}`)
    }).then((res2) => res2.json())
    .then((postsData) => {
        console.log(postsData)
        return fetch(`https://dummyjson.com/comments/post/${postsData.posts[0].id}`)
    }).then((res3) => res3.json())
    .then((commentsData) => {
        console.log(commentsData)
        return fetch(`https://dummyjson.com/users/${commentsData.comments[0].user.id}`)
    }).then((res4) => res4.json())
    .then((userData) => {
        console.log(userData)
    })