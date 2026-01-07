// // Given const nums = [1,2,3,4] use map to return an array with each value doubled.

// nums = [1,2,3,4]
// dubNums=nums.map((num) => {
//     console.log(num*2)
//     return num*2
// })




// // const names = ['alice','bob','charlie'] — create array of capitalized names ('Alice', ...).

// names =  ['alice','bob','charlie'] 
// capNames=names.map((name) => {
//     console.log(name.toUpperCase())
//     return name.toUpperCase()
// })




// const booleans = [true, false, true] — map to numbers 1/0.

//  const booleans = [true, false, true]
//  Nums=booleans.map((boolean) => {
//    console.log(Number(boolean))
//     return Number(boolean)
// })




// const strings = ['1','2','3'] — map to actual numbers (type conversion).

// const strings = ['1','2','3'] 
//  Nums_str=strings.map((string) => {
//    console.log(Number(string))
//     return Number(string)
// })




// const users = [{id:1,name:'A'},{id:2,name:'B'}] — map to array of ids: [1,2].

// const users = [{id:1,name:'A'},{id:2,name:'B'}] 
// arr_user=users.map((user) => {
//    console.log(user.id);
//    return user.id
// })




// const tempsC = [0, 20, 30] — map to Fahrenheit (C * 9/5) + 32.

// const temps = [0, 20, 30]
// faren = temps.map(temp => { (temp * 9 / 5) + 3          2 })




// const words = [' hi ', 'bye '] — map to trimmed strings and length: produce [{text:'hi', len:2}, ...].

// const words = [' hi ', ' bye ']
// trimStr = words.map((word) => {
//     trimed = word.trim()
//     len = trimed.length
//     console.log(`text: ${trimed} len: ${len}`);
// })




// For ['a','b','c'], use map to create ['1: a','2: b','3: c'] (1-based index).


// letters=['a','b','c']
// arr=[]
// lett= letters.map((letter,index) => {
// str=String(index+1+":"+letter)
// arr.push(str)
// })
//  console.log(arr);




// const letters = ['a', 'b', 'c'];
// const arr = letters.map((letter, index) => `${index + 1}: ${letter}`);
// console.log(arr);







// REDUCE





// arr1=[1,2,3,4,5,6,7,8]

// let mul=arr1.reduce((acc,crr)=>{return acc*crr})

// console.log(mul);


// const sumAll = (...nums) => nums.reduce((s, n) => s + n, 0);
// const sumNumbers = (...vals) =>
//   vals.reduce((s, v) => s + (Number.isFinite(v) ? v : 0), 0);


const sumAll= (...nums)=> nums.reduce((acc,crr)=> acc+crr ,0)
console.log(sumAll(1,2,3,4,5,6,6,7)); 
// console.log(sumAll);