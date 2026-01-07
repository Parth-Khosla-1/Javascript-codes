const button = document.querySelector("button")
const closeIcon = document.querySelector(".close-icon")
const popup = document.querySelector(".popup-container")
const overlay = document.querySelector(".overlay")
const box1 = document.querySelector(".box-1")
const subButton = document.querySelector(".sub-button")


button.addEventListener('click', () => {
    popup.classList.add('popup-open')
    box1.classList.add('vanish-button')
})

closeIcon.addEventListener('click', () => {
    popup.classList.remove('popup-open')
    box1.classList.remove('vanish-button')
})

overlay.addEventListener('click', () => {
    popup.classList.remove('popup-open')
    box1.classList.remove('vanish-button')
})
subButton.addEventListener('click', () => {
    popup.classList.remove('popup-open')
    box1.classList.remove('vanish-button')
})
