function makeHttpRequest(method, url,callback) {
  const xhr = new XMLHttpRequest()
  xhr.responseType = 'json'
  callback(xhr.response)

  xhr.open(method, url)
  xhr.send()

  
}


// makeHttpRequest('GET', 'https://dummyjson.com/users')
// .then((usersData) => makeHttpRequest('GET', `https://dummyjson.com/posts/user/${usersData.users[0].id}`))
// .then((postsData) => makeHttpRequest('GET', `https://dummyjson.com/comments/post/${postsData.posts[0].id}`))
// .then((commentsData) => makeHttpRequest('GET', `https://dummyjson.com/users/${commentsData.comments[0].user.id}`))
// .then((userData) => console.log(userData))
// .catch((err) => console.log(err)) 


makeHttpRequest('GET', 'https://dummyjson.com/users', (Data) => {
  makeHttpRequest('GET', `https://dummyjson.com/posts/user/${usersData.users[0].id}`, (Data) => {
      makeHttpRequest('GET', `https://dummyjson.com/comments/post/${postsData.posts[0].id}`, (Data) => {
          makeHttpRequest('GET', `https://dummyjson.com/users/${commentsData.comments[0].user.id}`, (Data) => {
        console.log(Data);
      });
    });
  });
})