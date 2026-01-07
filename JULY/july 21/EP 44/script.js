const evenNumbers = [0, 2, 10, 4, 61, 8]


// const result = evenNumbers.some((num, i) => {
//     if(num % 2 === 1) {
//         console.log(i);
//     }
//     return num % 2 === 1
// })

const result = evenNumbers.every((num) => {
    // debugger
    return num % 2 === 0
})





// const roles = ['guest', 'editor', 'admin', 'subscriber'];

// roles.some((role)=>role==='admin')

// const prices = [25, 100, 59, 1];

// prices.every((price)=>price>0)

// const answers = [true, true, true, true];

// answers.every((answer)=>answer===true)


// const messages = ["Hi", "Hello", "", "What's up"];


// messages.some((message)=>message==='')


// const password = "SecurePassword123";



// [...password].every((pass)=>{
//         return pass!==' '
// })

// const usernames = ['john', 'adam', 'Ravi', 'emma'];
 
// usernames.some((username)=> username.charAt(0)>='A'&&username.charAt(0)<='Z')