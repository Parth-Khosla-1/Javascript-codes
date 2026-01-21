// const fruits = ["banana", "apple", "peach", "mango", "grapes"];

// // for(let i = 0; i < fruits.length; i++) {
// //     console.log(fruits[i]);
// // }

// // console.log('*************************');

// // for(const fruit of fruits) {
// //     console.log(fruit);
// // }

// // const user = 'Anurag Singh'

// // for(const letter of user) {
// //     console.log(letter);
// // }

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   eyeColor: "blue",
//   city: "Bangalore",
// };

// // for(const key in person) {
// //     console.log(key, ': ' ,person[key]);
// // }

// const personKeys = Object.keys(person);
// const personValues = Object.values(person);
// const personEntries = Object.entries(person);
// // for (const key of personKeys) {
// //     console.log(person[key]);
// // }

















//PRACTICE
















// const Man = {
// name: "Aditi",
// age: 21,
// city: "Pune"
// }

// for (const key in Man) {
//     console.log(`${key} -> ${Man[key]}`);
// }

// const scores = {
//   math: 95,
//   english: 88,
//   history: 76,
//   pe: 100
// };

// for (const key in scores) {
// if(scores[key]>90){
//     console.log(`${key} : ${scores[key]}`);
// }
// }

// const movie = {
//   title: "Inception",
//   director: "Christopher Nolan",
//   year: 2010
// };

// for (const key in movie) {
//  console.log(`key : ${key}, Value : ${movie[key]}`);
// }

// const scores = {
//   Alice: 85,
//   Bob: 92,
//   Charlie: 78
// };

// const values = Object.values(scores);

// for (const score of values) {
//     console.log(score);
// }

// const countryCodes = {
//   India: "+91",
//   USA: "+1",
//   UK: "+44"
// };

// const cc = Object.entries(countryCodes);
// for (const [entry1,entry2] of cc) {

//   console.log(`Country: ${entry1}, Code: ${entry2}`);
// }

// const employees = {
//   John: { salary: 50000 },
//   Jane: { salary: 60000 },
//   Jim: { salary: 55000 }
// };

// for (const emp in employees) {
// console.log(object);
// }

// const mixedData = {
//   name: "Alice",
//   age: 30,
//   salary: 50000,
//   isAdmin: false,
// };

// for (const mix in mixedData) {
//   if (typeof mixedData[mix] === "number") {
//     console.log(mixedData[mix]);
//   }
// }

// const students = [
//   { name: "Amit", grade: "A" },
//   { name: "Priya", grade: "B" },
//   { name: "Karan", grade: "C" },
// ];
// for (const student of students) {
//   console.log(`${student.name} got grade ${student.grade}`);
// }



// const results = {
//   Riya: 91,
//   Amit: 76,
//   Zara: 95,
//   Kunal: 82,
//   Meena: 99
// };

// for (const key in results) {
// if(results[key]>90)
// {
//   console.log(key);
// }
// }

// const posts = {
//   post1: { likes: 120 },
//   post2: { likes: 90 },
//   post3: { likes: 250 }
// };

// const post= Object.values(posts)

// console.log(post);
// for (const num of post) {
//   console.log(num.likes);
// }


// for (const key of post){

//   console.log(posts[key].likes);

// }

// const phoneBook = {
//   "Rahul": "9876543210",
//   "Neha": "9123456780",
//   "Ajay": "9090909090"
// };

// const pb =Object.entries(phoneBook)

// for (const [ent1,ent2] of pb) {
//   console.log(`${ent1}'s phone number is ${ent2}`);
// }

// const data = {
//   id: 101,
//   name: "Alpha",
//   status: "active",
//   balance: 5000,
//   description: "Main user"
// };

// for (const key in data) {
//   if (typeof data[key] === "string") {
//     console.log(data[key]);
//   }
// }

// const numbers = [14, 27, 32, 41, 66, 79, 80];

// ✅ Your task:
// 1. Use for...of loop.
// 2. Print only even numbers.

// for (const evenNum of numbers) {
//   if (evenNum%2==0) {
//     console.log(evenNum);
//   }
// }

// const orders = [
//   { id: 101, items: ["Pen", "Notebook"] },
//   { id: 102, items: ["Pencil", "Eraser", "Sharpener"] },
//   { id: 103, items: ["Marker"] }
// ];

// for (const element of orders) {
//   console.log(`Order ${element.id} contains ${element.items}`);
// }

// const library = {
//   "Book1": {
//     title: "The Alchemist",
//     author: "Paulo Coelho",
//     genres: ["Adventure", "Spiritual", "Fiction"]
//   },
//   "Book2": {
//     title: "1984",
//     author: "George Orwell",
//     genres: ["Dystopian", "Science Fiction"]
//   },
//   "Book3": {
//     title: "Sapiens",
//     author: "Yuval Noah Harari",
//     genres: ["History", "Anthropology", "Non-fiction"]
//   }
// };


// for (const key in library) {
//   console.log(`The book '${library[key].title}' by ${library[key].author} belongs to genres: ${library[key].genres.join(", ")}`);
// }


// fruits=['mango','kela','strawberry','apple']
// fruits.forEach((lun)=>{
//   console.log(lun);
// })