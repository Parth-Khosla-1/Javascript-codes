const h1 = document.querySelector('h1')
const container = document.querySelector(".container")


// const newImg=container.querySelector('img')
// for (let i = 2; i <= 100; i++) {
//     const clonedImg=newImg.cloneNode()
//     clonedImg.src= `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
//     container.appendChild(clonedImg)
// }

const paragraph = document.createElement('p')
// paragraph.innerText = 'Hello'
// paragraph.classList.add('my-para')

// container.append(paragraph)

// container.appendChild(h1)


// container.appendChild(h1)
// container.appendChild(h1.cloneNode(true))


for (let i = 1; i <= 100; i++) {
    const createdImg=document.createElement('img')
    createdImg.src= `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
    container.appendChild(createdImg)
    
}