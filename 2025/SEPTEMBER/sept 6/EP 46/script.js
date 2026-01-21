function multiply(a, b = 1) {
  return a * b
}

function rollADie(numberOfSides = 6) {return Math.floor(Math.random() * numberOfSides) + 1}

function greet(name = "Guest", greeting = "Hello") {return `${greeting}, ${name}!`} 

function range(start = 0, end = start + 5) { return { start, end }; }

function show({ name = "Anonymous", age = 18 }={}) {
  console.log(name, age);
}
show();