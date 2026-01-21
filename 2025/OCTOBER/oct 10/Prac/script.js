// const paragraph = document.querySelector('.mirror')
// const usernameInput = document.querySelector("#username")

// const inputele = document.querySelector('.focusOrBlur')

// inputele.addEventListener('focus',()=>{
//     document.body.className="focus"
// })
// inputele.addEventListener('blur',()=>{
//     document.body.className="blur"
// })

const inputEle = document.querySelector('.focusOrBlur');

inputEle.addEventListener('focus', (event) => {
  event.target.parentElement.classList.add('focus');
  event.target.parentElement.classList.remove('blur');
});

inputEle.addEventListener('blur', (event) => {
  event.target.parentElement.classList.add('blur');
  event.target.parentElement.classList.remove('focus');
});
