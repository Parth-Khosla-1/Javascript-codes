// You have two arrays:
// const fruits = ["apple", "banana"];
// const moreFruits = ["mango", "orange"];
// Combine them into one array using the spread operator.

// const fruits = ["apple", "banana"];
// const moreFruits = ["mango", "orange"];
// const combined=[...fruits,...moreFruits]




// Convert this string into an array of characters using spread:
// const word = "JAVASCRIPT";

// const word = "JAVASCRIPT";
// const newarr=[...word]




// You have an object:
// const person = { name: "Alice", age: 22 };

// const person = { name: "Alice", age: 22 };
// const newarr={...person,city: "Delhi"}




// Create an array:
// const numbers = [1, 2, 3];
// Make a new array that starts with 0, then spreads numbers, then ends with 4 and 5.

// const numbers = [1, 2, 3];
// const newarr=[0,...numbers,4,5]




// You have an array:
// const nums = [10, 20, 30, 40, 50];
// Use spread to pass all values of nums into a function Math.max() and find the largest number.

// const nums = [10, 20, 30, 40, 50];
// function MAX(){
//   console.log( Math.max(...nums)); 
// }
// MAX()



// You have two nested objects:
// const user = {
//   name: "Bob",
//   address: { city: "Mumbai", pin: 400001 }
// };
// const extraInfo = { age: 30 };
// Use spread to merge user and extraInfo.
// Then change the city to "Pune" in the merged object.
// Observe carefully: does the original user.address.city also change? Why?

// const user = {
//   name: "Bob",
//   address: { city: "Mumbai", pin: 400001 }
// };
// const extraInfo = { age: 30 };

// const combinedobj={...user,...extraInfo}

// combinedobj.address.city="pune"
