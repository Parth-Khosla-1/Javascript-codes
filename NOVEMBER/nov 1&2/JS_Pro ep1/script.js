const checkbox = document.querySelectorAll(".checkbox")
const input = document.querySelectorAll(".entr_goal")
const message = document.querySelector(".message")
const progress = document.querySelector("progress")


let counter = 0
checkbox.forEach(checkboxbtn => {
    checkboxbtn.addEventListener("click", (e) => {
        let allFilled = true;

        input.forEach(inp => {
            if (inp.value.trim() === "") {
                allFilled = false;
            }
        });

        if (allFilled === false) {
            message.innerHTML = "Enter all the three tasks";
            e.preventDefault()
        }
        else {
            message.innerHTML = "";

            const relatedInput = checkboxbtn.nextElementSibling;
            if (checkboxbtn.checked) {
                counter++;
                relatedInput.style.color = "green";
                relatedInput.style.textDecoration = "line-through";
            } else {
                counter--;
                relatedInput.style.color = "black";
                relatedInput.style.textDecoration = "none";
            }
        }


        progress.value = (counter / 3) * 100;

    });
});

input.forEach(inp => {
    inp.addEventListener("focus", () => {
        message.innerHTML = "";
    })
});
