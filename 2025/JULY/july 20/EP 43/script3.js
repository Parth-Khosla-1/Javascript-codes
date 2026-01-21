// const secretPhrases = [
//   '  mission start  ',
//   '',
//   '  agent active ',
//   ' ',
//   'top secret  ',
//   '',
//   ' execute order 66'
// ];

// const formatted = [];
// let count = 0;

// secretPhrases.forEach((str)=>{
//     if(str.trim() !== ""){

//       const a =  str.trim().toUpperCase();
//       formatted.push(a)
//         count++;

//     }
// })

// console.log( `${formatted}` );
// console.log(count);

// const scores = [55, 72, 89, 45, 38, 92, 67];

// const newArray=scores.map((score)=>{return `Score:${score}`})
// console.log(`${newArray}`);

// const cities = ['mumbai', 'delhi', 'bangalore', 'chennai', 'kolkata'];

// const citi=cities.map((city)=>{return `${city.charAt(0).toUpperCase()}${city.slice(1)}`});
// console.log(`${citi}`);

// ✅ Exercise 2: filter() – Filter Even Indexed Items
// 🔹 Task:
// Given an array of fruits:

// js
// Copy
// Edit
// const fruits = ['apple', 'banana', 'cherry', 'mango', 'orange', 'grapes'];
// Use filter() to return a new array containing only those fruits that are at even indexes (0, 2, 4…).

// 🧠 Rules:
// Use both the element and index arguments in filter()

// Final output should be ['apple', 'cherry', 'orange']

// const frut=fruits.filter((fruit,i)=>{
// if(i%2===0){
//     return fruit;
// }
// })

// const arr = [1, 2, 3, 4];

// const result = arr.reduce((acc, curr) => {
//   console.log(acc);  // What does this print?
//   return acc + curr;
// },);

// const words = ['apple', 'orange', 'grapes', 'banana'];

// tvc=words.reduce((acc,word)=>{

//     const char= word.toLowerCase().split('');

//     const vc =char.filter((w)=>'aeiou'.includes(w)).length

// return acc+vc

// },0)

// const nums = [2, 5, 8, 3];

// nums.reduce((acc,num)=>{
//     console.log(acc);
//     return acc+num
// },0
// )

// const nums = [2, 3, 4];

// nums.reduce((acc,num)=>{
//     return acc*num
// },1)

// 🔹 Q3: Find Longest Word
//
// const words = ['pen', 'eraser', 'book', 'notebook','wo'];
// // ➡️ Use reduce() to return the longest word.
// // ✅ Expected output: 'notebook'

// const long=words.reduce((acc,word)=>{
//         return word.length>acc.length?word:acc
// },'')

// const cart = [
//   { item: 'Shirt', price: 1200 },
//   { item: 'Jeans', price: 2500 },
//   { item: 'Shoes', price: 3000 }
// ];

// cart.reduce((acc,item)=>{
//     console.log(item.price);

//     return acc+item.price
// },0)

// 🔹 Q5: Count Total Votes

// const voters = [
//   { name: 'Alice', voted: true },
//   { name: 'Bob', voted: false },
//   { name: 'Charlie', voted: true }
// ];

// ➡️ Use reduce() to count how many people voted.
// ✅ Expected output: 2

// voters.reduce((acc,Votes)=>{
//     if(Votes.voted==true){
//     acc++
//     }
//     console.log(acc);
//     return acc
// },0)

// const letters = ['a', 'b', 'a', 'c', 'b', 'a'];
// letters.reduce((acc,letter)=>{
//       if (acc[letter]) {
//     acc[letter]++
//   } else {
//     acc[letter]=1
//   }

//   return acc;
// },{})

// const students = [
//   { name: 'Ankit', age: 18 },
//   { name: 'Riya', age: 20 },
//   { name: 'Rohan', age: 18 },
//   { name: 'Neha', age: 20 },
// ];

// students.reduce((acc,student)=>{
//      const age= student.age
//     const names= student.name

//       if (acc[age]) {
//     // if the group alrey exists, add to it
//     acc[age].push(names);
//   } else {
//     // if this age group doesn't exist, create it with first name
//     acc[age] = [names];
//   }
//   return acc
// },{})

// last practice

// Q1. Uppercase All Names (map)

// const names = ['john', 'doe', 'alice', 'bob'];
// ➡️ Use map() to return a new array with all names in uppercase.
// ✅ Output: ['JOHN', 'DOE', 'ALICE', 'BOB']

// const names = ['john', 'doe', 'alice', 'bob'];

// const upper = names.map((name) => name.toUpperCase())

// Q2. Filter Numbers Greater Than 10 (filter)

// const numbers = [3, 12, 7, 18, 5, 21];
// ➡️ Use filter() to return only numbers greater than 10.
// ✅ Output: [12, 18, 21]

// const numbers = [3, 12, 7, 18, 5, 21];

// numbers.filter((num)=> num>10)

// Q3. Extract First Letters (map)

// const countries = ['India', 'America', 'Germany', 'France'];
// ➡️ Use map() to return an array of the first letters of each country.
// ✅ Output: ['I', 'A', 'G', 'F']

// const countries = ["India", "America", "Germany", "France"];

// countries.map((country) => country.charAt(0));

// Q4. Filter Names With Letter 'a' (case-insensitive)

// const names = ['Riya', 'Sohan', 'Meera', 'Mihir', 'Rohit'];
// ➡️ Use filter() to return names that contain the letter 'a' (case-insensitive).
// ✅ Output: ['Riya', 'Meera']

// const names = ['Riya', 'Sohan', 'Meera', 'Mihir', 'Rohit'];

// names.filter((name)=> name.toLowerCase().includes('a'))

// Q5. Find Total Length of All Words (reduce)

// const words = ['code', 'practice', 'reduce', 'map', 'filter'];
// ➡️ Use reduce() to calculate the total number of characters across all words.
// ✅ Output: 31

// const words = ['code', 'practice', 'reduce', 'map', 'filter'];

// words.reduce((acc, word) => acc + word.length, 0)

// Q6. Count How Many Passed (reduce with objects)

// const students = [
//   { name: 'Ravi', passed: true },
//   { name: 'Anjali', passed: false },
//   { name: 'Sagar', passed: true },
//   { name: 'Meena', passed: true }
// ];
// ➡️ Use reduce() to count how many students passed.
// ✅ Output: 3

// const students = [
//   { name: 'Ravi', passed: true },
//   { name: 'Anjali', passed: false },
//   { name: 'Sagar', passed: true },
//   { name: 'Meena', passed: true }
// ];

// students.reduce((acc,student)=> {
//     if(student.passed==true){
//         return acc+1
//     }
//     else{
//         return acc
//     }
// },0)

// Q7. Chaining: Capital Names Starting with "S"

// const names = ['saurav', 'ankit', 'shiv', 'rohit', 'sneha'];
// ➡️ Use chaining: filter() to get names starting with 's' (case-insensitive), then map() to capitalize them.

// ✅ Output: ['Saurav', 'Shiv', 'Sneha']

// const names = ["saurav", "ankit", "shiv", "rohit", "sneha"];

// names
//   .filter((name) => name.charAt(0).toLowerCase() == "s")
//   .map((cap) => cap.charAt(0).toUpperCase() + cap.slice(1));

// Q8. Group Items by Category (reduce – object building)

// const items = [
//   { name: 'Shirt', category: 'clothing' },
//   { name: 'Pants', category: 'clothing' },
//   { name: 'Apple', category: 'food' },
//   { name: 'Bread', category: 'food' },
//   { name: 'TV', category: 'electronics' }
// ];
// ➡️ Use reduce() to group items by their category.
// ✅ Output:

// {
//   clothing: ['Shirt', 'Pants'],
//   food: ['Apple', 'Bread'],
//   electronics: ['TV']
// }

// const items = [
//   { name: "Shirt", category: "clothing" },
//   { name: "Pants", category: "clothing" },
//   { name: "Apple", category: "food" },
//   { name: "Bread", category: "food" },
//   { name: "TV", category: "electronics" },
// ];

// items.reduce((acc, item) => {
//   console.log(item.name);

//   const category = item.category;
//   if (!acc[category]) {
//     acc[category] = [];
//   }
//   acc[category].push(item.name);

//   return acc
// }, {});


