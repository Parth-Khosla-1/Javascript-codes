async function makeAsyncRequest() {
  const url = 'https://dummyjson.com/test?delay=2000'
  const response = await fetch(url)
//   console.log(response);
  const data = await response.json()
//   console.log(data);
  return data
}

makeAsyncRequest().then((data) => {
    console.log(data);
})