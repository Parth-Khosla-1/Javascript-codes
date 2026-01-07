// Given const colors = ['red','green','yellow'], use array destructuring to create c1, c2, c3. console.log(c2) should print the second color.

// const colors = ['red','green','yellow']
// let [c1,c2,c3]=colors
// console.log(c1);
// console.log(c2);
// console.log(c3);




// Using the same colors array, extract only the third value into a variable named third (skip the first two) and log it.

// const colors = ['red','green','yellow']
// let [,,third]=colors
// console.log(third);




// Given const user = { name: 'Anurag', age: 25 }, destructure to get name and age and log them.

// const user = { naam: 'Anurag', age: 25 }
// let{naam,age}=user
// console.log(naam);
// console.log(age);


// Write a function intro that accepts a user object and logs Hello <name>, your age is <age> — use parameter destructuring inside the function signature.

// user={
//     naam:"Parth",
//     age:19
// }
// function intro({naam,age}){
//     console.log("name:",naam);
//     console.log("age:",age);
// }
// intro(user)




// From const user = { name: 'Anurag', age: 25 }, destructure the name property into a new variable username (i.e., rename while destructuring).

// user = { name: 'Anurag', age: 25 }
// let{name:username}=user

// console.log(username);




// Given const user = { name: 'Ana', address: { city: 'Bangalore', state: 'KA' } }, extract city directly into a city variable using one destructuring statement (no intermediate address variable).

// const user = { name: 'Ana', address: { city: 'Bangalore', state: 'KA' } }

// let{address:{city}}=user
// console.log(city);




// Demonstrate default values: destructure const colors = ['red','green'] into [a,b,c='blue'] and log c. Also destructure an object with missing property and provide default (example: job = 'unknown').

// const colors = ['red','green']
// function takeValue1([a,b,c="blue"]){
//     console.log(c);
// }
// takeValue1(colors)

// const naukri  ={job: 'unknown'}
// function takeValue2({job="software developer"}={}){
//     console.log(job);
// }
// takeValue2(naukri)




// Use array rest destructuring: from [1,2,3,4,5] extract the first element to first and the rest into rest. Log rest.

// function foo([first, ...rest]) {
//   console.log(first); // 1
//   console.log(rest);  // [2, 3, 4, 5]
// }

// foo([1,2,3,4,5]);




// Use object-style destructuring to pick the fourth element of an array: from const arr = ['a','b','c','d','e'] extract the fourth element into fourth using const { __ }: arr-style syntax (i.e., treat the array as an object).
// const arr = ['a', 'b', 'c', 'd', 'e']
// let {3:fourth}=arr
// console.log(fourth);




// Swap two variables a and b without using a temporary variable, using destructuring.

// let a = 0; **************
// let b = 99; ************** 
// [a, b] = [b, a]; ********** 
// console.log(a, b); *********




// Given const obj = { a:1, b:2, c:3, d:4 }, destructure so you get a, b, and an object others containing the remaining properties. Log others.

// const obj = { a: 1, b: 2, c: 3, d: 4 }
// function putAll({a,b,...others}){
//     console.log(a);
//     console.log(b);
//     console.log(others);
    
// }

// putAll(obj)

// show({ name: 'Ria' }); // name: Ria city: undefined
// show({ name: 'Ria', address: { city: 'Mumbai' } });


// Write a function show that safely accepts an argument which might be undefined and destructures { name, address: { city } = {} } with defaults so the function never throws if called with undefined. Log name and city.

// function show ({ name, address: { city } = {} }={}){
//     console.log("name:",name,"city:",city);
// }
// // show(); // name: undefined city: undefined
// // show({ name: 'Ria' }); // name: Ria city: undefined
// // show({ name: 'Ria', address: { city: 'Mumbai' } }); // name: Ria city: Mumbai
