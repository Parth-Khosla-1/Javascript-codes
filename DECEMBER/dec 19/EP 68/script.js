const nameElement = document.querySelector(".name-tag")
const nameInput = document.querySelector(".name")
const ageElement = document.querySelector(".age-tag")
const ageInput = document.querySelector(".age")


// nameElement.innerText = localStorage.getItem("name")

// nameInput.addEventListener("input", (e) => {
//     // localStorage.name = e.target.value
//     localStorage.setItem("name", e.target.value)
//     nameElement.innerText = localStorage.name
// })



// ageElement.innerText = localStorage.getItem("age")

// ageInput.addEventListener("input", (e) => {
//     // localStorage.age = e.target.value
//     localStorage.setItem("age", e.target.value)
//     ageElement.innerText = localStorage.age
// })


const myData=JSON.parse(localStorage.getItem('myData')) || {}


if(myData.name){
    nameElement.innerText=myData.name
}
if(myData.age){
    ageElement.innerText=myData.age
}
 
nameInput.addEventListener("input",(e)=>{
    myData.name=e.target.value
    localStorage.setItem("myData",JSON.stringify(myData))
    nameElement.innerText = e.target.value
})

ageInput.addEventListener("input",(e)=>{
    myData.age=e.target.value
    localStorage.setItem("myData",JSON.stringify(myData))
    ageElement.innerText = e.target.value
})
