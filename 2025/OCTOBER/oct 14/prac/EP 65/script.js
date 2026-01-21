const list = document.getElementById('list');

// populate 100 list items
let html = '';
for (let i = 1; i <= 100; i++) {
  html += `<li>Item ${i}</li>`;
}
list.innerHTML = html;

// add one event listener to UL (event delegation)
list.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    console.log(`You clicked on ${e.target.textContent}`);
    e.target.style.backgroundColor = 'yellow';
  }
});
