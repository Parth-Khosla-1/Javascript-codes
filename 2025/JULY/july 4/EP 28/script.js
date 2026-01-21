
// // Function Definition
// function introduceMe(username, profession, age) {
//     // console.log(typeof username);
//     // console.log(typeof profession);
//     // console.log(typeof age);
//     console.log('Hi,');
//     console.log(`My name is ${username || 'Procodrr'}.`);
//     console.log(`I am a ${profession}`);
//     console.log(`I am ${age} years old.`); 
// }

// // //                  Function Call
// // const returnValue = introduceMe()

// // introduceMe('Anurag', 'Software Engineer', 25)
// // introduceMe('Akash', 'Mechanical Engineer', 27)


function intro(username='procodrr'){
    console.log(`hi i am ${username}`);
    console.log("i am 19 years old");
    console.log("i study CS");
    return "30";
}

// const returnValue=intro();

intro(99)
intro()
intro('Baljeet')
intro('Popu')
