const checkBoxList = document.querySelectorAll('.custom-checkbox')
const inputfields = document.querySelectorAll('.goal-input')
const errorLabel = document.querySelector('.error-label')
const progressValue = document.querySelector('.progress-value')
const progressLabel = document.querySelector('.progress-label')


const allQuotes = [
    'Raise the bar by completing your goals!',
    'Well begun is half done!',
    'Just a step away, keep going!',
    'Whoa! You just completed all the goals, time for chill :D',
]



// const allGoals = JSON.parse(localStorage.getItem('allGoals')) || {
//      first: {
//     name: '',
//     completed: false,
//   },
//   second: {
//     name: '',
//     completed: false,
//   },
//   third: {
//     name: '',
//     completed: false,
//   },
// }

const allGoals = JSON.parse(localStorage.getItem('allGoals')) || {}

let completedGoalsCount = Object.values(allGoals).filter((goal) => goal.completed).length
progressValue.style.width = `${completedGoalsCount / inputfields.length * 100}%`
progressValue.firstElementChild.innerText = `${completedGoalsCount}/${inputfields.length} completed`


checkBoxList.forEach((checkbox) => {
    checkbox.addEventListener('click', (e) => {

        const allGoalsAdded = [...inputfields].every((input) => {
            return input.value
        })
        if (allGoalsAdded) {
            checkbox.parentElement.classList.toggle('completed')
            const inputId = checkbox.nextElementSibling.id
            allGoals[inputId].completed = !allGoals[inputId].completed
            completedGoalsCount = Object.values(allGoals).filter((goal) => goal.completed).length
            progressLabel.innerText = allQuotes[completedGoalsCount]
            progressValue.style.width = `${completedGoalsCount / inputfields.length * 100}%`
            progressValue.firstElementChild.innerText = `${completedGoalsCount}/${inputfields.length} completed`
            localStorage.setItem('allGoals', JSON.stringify(allGoals))

        }
        else {
            errorLabel.parentElement.classList.add('show-error')
        }
    })
})

inputfields.forEach((input) => {
    if (allGoals[input.id]) {
        input.value = allGoals[input.id].name

        if (allGoals[input.id].completed) {
            input.parentElement.classList.add('completed')
        }
    }

    input.addEventListener('focus', () => {
        errorLabel.parentElement.classList.remove('show-error')
    })

    input.addEventListener('input', (e) => {
        if (allGoals[input.id] && allGoals[input.id].completed) {
            e.target.value = allGoals[input.id].name
            return
        }
        if (allGoals[input.id]) {
            allGoals[input.id].name = input.value
        } else {
            (allGoals[input.id]) = {
                name: input.value,
                completed: false
            }
        }
        console.log(allGoals);
        localStorage.setItem('allGoals', JSON.stringify(allGoals))
    })
})