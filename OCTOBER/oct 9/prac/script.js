const h1 = document.querySelector('h1')
const container = document.querySelector(".container")
const allBoxes = document.querySelectorAll(".clickMe");
const button = document.querySelector(".Btn")



function clickW2() {
    console.log('clicked with 2')
}
allBoxes[1].onclick = clickW2;

allBoxes[2].addEventListener("click", () => console.log("clicked with 3"));




const h2 = document.querySelector("h2")
h2.addEventListener('dblclick', () => {
    console.log('Double_clicked')
})




const input = document.querySelector("input");
input.addEventListener('input', () => {
    console.log('something is written')
})




button.addEventListener('click', () => {
    console.log(' Clicked ')
})
button.addEventListener('click', () => {
    console.log(' AND THIS WILL BE LOGGED ONCE ONLY ')
}, { once: true });


button.addEventListener('click', () => {
    button.style.backgroundColor = 'pink'
})

button.addEventListener('dblclick', () => {
    button.style.width = '200px'
    button.style.height = '200px'
}, { once: true });

function sayHi() {
    console.log("Hello!");
    button.removeEventListener("click", sayHi); // removes itself
}
button.addEventListener("click", sayHi);





const card = document.querySelector(".card")

card.addEventListener('click', () => {
    console.log(' Card Clicked ')
})

card.addEventListener('dblclick', () => {
    console.log(' Card Double-Clicked ')
})

card.addEventListener('contextmenu', (event) => {
    event.preventDefault(); // stops the default right-click menu
    console.log(' Card Right-Clicked ')
})
