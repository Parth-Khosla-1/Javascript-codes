const container = document.querySelector('#container');

// Create 100 cards
for (let i = 1; i <= 100; i++) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.textContent = `Pokemon ${i}`;
    container.appendChild(card);
}

// const cards= document.querySelectorAll(`#container > div`)

// cards.forEach((card,index) => {
//     if ((index+1) % 2 ===0) card.remove()
// });

document.body.createElement