const h1 = document.querySelector('h1')
const paragraph = document.querySelector('p')

// console.log(paragraph.innerHTML);

// paragraph.innerHTML = '<h4>Hiii</h4>'

const A = document.querySelectorAll('a')

// for (let i = 0; i < A.length; i++) {
//     A[i].style.color="red"
// }

function applyGreenLinks(el){
    for(e of el){
        e.classList.add("green-link")
    }
}

function toggleVisibility(selector){
    selector.classList.toggle('hidden')
}