const h1 = document.querySelector('h1')
const card = document.querySelector('.card')
const container = document.querySelector('.container')
const button1 = document.querySelector('.button1-style')
const button2 = document.querySelector('.button2-style')
const para=document.querySelector('.button1-style>p')
const scrollWheel=document.querySelector('.scroll-wheel')
let count = 0



// button1.addEventListener('mousemove',()=>{
//    para.innerText=count++
// })
// button2.addEventListener('click',()=>{
//     count=0
//     para.innerText=count
// })


scrollWheel.addEventListener('scroll',()=>{
   console.log('scroll Fired');
})
scrollWheel.addEventListener('wheel',()=>{
    console.log('wheel Fired');
})


