const usernameInput=document.querySelector("#username")
const paragraph=document.querySelector('p')
// usernameInput.addEventListener('click',()=>{
//     console.log("clicked");
// })

// usernameInput.addEventListener('dblclick',()=>{
//     console.log("double clicked");
// })

// paragraph.addEventListener('contextmenu',(e)=>{
//     e.preventDefault()
// console.log("clicked");
// })
let inputValue

// usernameInput.addEventListener('input',(e)=>{
//     console.log(e.target.value);
//     inputValue=e.target.value
//     paragraph.innerText=e.target.value
//     console.log(paragraph);
//     // console.log("inputted");
// })
usernameInput.addEventListener('change',(e)=>{
    console.log(e.target.value);
    inputValue=e.target.value
    // paragraph.innerText=e.target.value
    // console.log(paragraph);
    // console.log("inputted");
})
usernameInput.addEventListener('focus',(e)=>{
    console.log(e);
    inputValue=e.target.value
})