//spread operatr: used to split up array elements OR object propertie
//Ex.
// const newArray = [...oldArray, 1, 2]
// const newObject = { ...oldObject, newProp:5 }

//rest operator: the same syntax as the spread operator, but used differently.
// The rest operator is used to merge a list of function arguments into an array
//Ex.

// function sortArgs(...args) {
//   return args.sort()
// }


//SPREAD OPERATOR

const numbers = [1,2,3];
const newNumbers = [...numbers, 4];

console.log(newNumbers);

const person = {
  name: 'Max'
};

const newPerson = {
  ...person,
  age: 28
}

console.log(newPerson);



//REST OPERATOR

const filter = (...args) => {
  return args.filter(el => el === 1);
}

console.log(filter(1, 2, 3)[0]);
