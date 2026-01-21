const div = document.querySelector(".output");

document.addEventListener('keydown', (e) => {
    const value = e.key;

    // Ignore these keys
    if (value === 'Alt' || value === 'Shift' || value === 'Control') return;

    if (value === 'Backspace') {
        // Remove last character
        div.textContent = div.textContent.slice(0, -1);
    } else if (value === 'Enter') {
        // Add new line
        div.innerHTML += '<br>';
    } else {
        // Append key
        div.textContent += value;
    }

    console.log(value);
});
