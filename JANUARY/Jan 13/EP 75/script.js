// fetch('https://6wrlmkp9u2.execute-api.us-east-1.amazonaws.com/?sleep=2000')
// .then(response => response.json())
// .then(data => {
//   console.log(data);
// })// fetch('https://dummyjson.com/products')
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((err) => {
//     console.log(err);
//   })

fetch('https://dummyjsons.com/products/add', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    title: 'BMW Pencil',
    category: 'Stationary'
    /* other product data */
  })
})
.then(res => res.json())
.then(console.log)
.catch((err) => {
  console.log(err);
})
            