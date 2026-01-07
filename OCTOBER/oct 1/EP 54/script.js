// const paragraph=document.querySelector('p')

// console.log(paragraph.innerHTML);

function toggleCustomAttr(el, name) {
    if (el.hasAttribute(name)) {
        // if the attribute exists → remove it
        el.removeAttribute(name);
        el.style.opacity = '0.5';
    } else {
        // if the attribute does not exist → add it
        el.setAttribute(name, "true");
        el.style.opacity = '1';
    }
}
