const addCardBtn = document.querySelector('.card')
const container = document.querySelector('.container')
const input=document.querySelector('input')
const form=document.querySelector('form')


let count = 1

addCardBtn.addEventListener('click', () => {
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = count++
    container.append(newCard)
})

// setInterval(()=>{
//     form.submit()
// },2000)




// setInterval(()=>{
//     input.focus()
//     console.log("input Focused");
// },2000)



// setInterval(()=>{
//     input.blur()
//     console.log("input Blurred");
// },4000)



// const setIntervalId = setInterval(()=>{
//     if(count>999){
//         clearInterval(setIntervalId)
//     }
//     addCardBtn.click()
// },2)