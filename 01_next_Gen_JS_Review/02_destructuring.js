// DESTRUCTURING

// Destructuring allows us to easily extract array elements or
// object properties and store them in variables.

// This sounds the same as the spread operator, but it is not.
// The spread operator pulls out/extracts ALL of the array elements
// and object properties.
// Destructurng, on the other hand, lets us pull out/extract SINGLE/INDIVIDUAL
// array elements and object properties to store them in variables.


// // DESCTRUCTURNG: For Arrays

// [a,b] = ['Hello', 'Max']
// console.log(a) //Hello
// console.log(b) //Max



// // DESTRUCTURING: For Objects

// {name} = {name: 'Max', age: 28}
// console.log(name) //'Max'
// console.log(age) //undefined




// ARRAY DESTRUCTURING

const numbers = [1,2,3];

[num1, num2] = numbers;
console.log(num1, num2); // 1 & 2

[n1, , n3] = numbers;
console.log(n1, n3); // 1 & 3
