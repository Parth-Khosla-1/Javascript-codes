const container = document.querySelector(".container")


// for (let i = 1; i <= 100; i++) {
//     const newPara=document.createElement('p')

//     const newDiv=document.createElement('div')
//     container.append(newDiv)

//     const createdImg=document.createElement('img')
//     createdImg.src= `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
//     container.querySelector(`div:nth-child(${i})`).append(createdImg)
//     container.querySelector(`div:nth-child(${i})`).classList.add('img-container')

//     container.querySelector(`div:nth-child(${i})`).append(newPara)

//     newPara.innerText=i
// }



// This is preferred just because the react libraries use this method

for (let i = 1; i <= 100; i++) {
const imgContainer=document.createElement('div')
imgContainer.classList.add('img-container')

const newImg=document.createElement('img')
newImg.src=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`

const newPara=document.createElement('p')
newPara.innerText=i

imgContainer.append(newImg,newPara)
container.append(imgContainer)    
}





// for (let i = 1; i <= 100; i++) {
//     const imgContainer = document.createElement('div')
//     imgContainer.classList.add('img-container')

//     const myHtml = `<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png">
//        <p>${i}</p>`

//     imgContainer.innerHTML=myHtml
//     container.append(imgContainer)
// }






// let myHTML = ``

// for (let i = 1; i <= 100; i++) {
//   myHTML += `
//     <div class="img-container">
//         <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png">
//         <p>${i}</p>
//     </div>
//     `
// }
// container.innerHTML = myHTML