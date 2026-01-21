const hamburgerIcon = document.querySelector(".hamburger-menu-container")
const headerContent = document.querySelector(".header-content")
const closeIcon = document.querySelector(".close-icon")
const nav = document.querySelector('nav')



hamburgerIcon.addEventListener("click", (e) => {
    e.stopPropagation()
    headerContent.classList.add("menu-open")
})

nav.addEventListener('click', (e) => {
    e.stopPropagation()
})

closeIcon.addEventListener("click", (e) => {
    headerContent.classList.remove("menu-open")
})

document.querySelector("body > div > main > footer > h3 > a").addEventListener('click', (e) => {
    document.querySelector("body > div").scrollTo(0, 0)
})

window.addEventListener('click', (e) => {
    headerContent.classList.remove("menu-open")

})