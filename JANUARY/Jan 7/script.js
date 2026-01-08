const image = document.querySelector('img')
const button = document.querySelector('button')

fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => response.json())
    .then((json) => {
        console.log("got the data");
        console.log(json.message);
        image.src=json.message
    })
button.addEventListener('click',(e)=>{
    fetch('https://dog.ceo/api/breeds/image/random')
        .then((response) => response.json())
        .then((json) => {
            console.log("got the data");
            console.log(json.message);
            image.src=json.message
        })
    })