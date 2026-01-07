const h1=document.querySelector('h1')
const container=document.querySelector(".container")

function sayhii(){
    console.log("mujhe mat chuo 😨")
}

// h1.onclick=sayhii


const card=document.querySelector(".card")
let count= 1
function add_card(){
    const cloneCard = card.cloneNode(true)
    cloneCard.innerText=count++
    container.append(cloneCard)
}

card.addEventListener('click',add_card)
//    const cloneCard= document.createElement("div")
//    cloneCard.classList.add("card")
//    container.append(cloneCard)