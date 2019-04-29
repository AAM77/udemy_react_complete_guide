// REFERENCE & PRIMITIVE TYPES


/////////////////////////////////////////////////////
// PRIMITIVE TYPES // numbers, strings, & booleans //
/////////////////////////////////////////////////////

const number = 1; // A primitive type
const num2 = number; // Has copied the value of number primitive type

console.log(num2);



///////////////////////////////////////////
// REFERENCE TYPES // (objects & arrays) //
///////////////////////////////////////////

const person = {
  name: 'Max'
};

// here, person, the object, is stored in memory
// const person stores a 'pointer' to that object in memory

const secondPerson = person;
// here, the pointer that points to the object in memory is what gets copied, NOT the actual object.


person.name = 'Manu';

// here, we would expect the secondPerson to still be named 'Max',
// but this is not what happens.
// This is because const secondPerson is only copying the POINTER to the object,
// It does not store a copy of the actual object or the values of its properties
// Therefore, when we change the property 'person.name' using the original pointer,
// we change the original object's property's value and, since the
// 'secondPerson' variable is just a copy of the original pointer ('person'),
// and NOT of the object itself, it points to the SAME object that 'person'
// pointed to.

// Therefore, since 'person' and 'secondPerson' are copies of a pointer to the
// same object, it doesn't matter which of them we use to change the
// object's property value(s). Using one to change the object will still cause
// the object's property to have the new value when we reference it with the
// pointers' copy.

console.log(secondPerson);

// THE SAME CONCEPT APPLIES TO ARRAYS!

const array_name1 = ['a', 'b', 'c'];

// the array ['a', 'b', 'c'] gets stored in memory.
// the variable 'array_name1' is a pointer to the aforementioned array


const array_name2 = array_name1;

// array_name2 is a copy of the pointer 'array_name1,' which points to
// the stored array ['a', 'b', 'c'];

console.log(array_name2);

// Now, let's modify the array ['a', 'b', 'c'] using the pointer 'array_name1'

array_name1.push('d')

console.log(array_name1);

// Let's make note here that we modified the array using the pointer
// 'array_name1' and console logged out the array using the same pointer.

// Now, let's console.log it using array_name2, which we have not touched yet.

console.log(array_name2);

// Check it out! We console logged the SAME MODIFIED array.
// This is because they both 'point to' (reference) the same
// spot in memory where the array gets stored.
// 'array_name1' and 'array_name2' also take up space in the memory, but
// only as POINTERS (road signs) that reference (point to) the actual
// array / object.


//////////////////////////////////////////////////////////////////////////////////
// HOW TO PROPERLY CREATE A COPY OF AN ARRAY OR OBJECT: Use the Spread Operator //
//////////////////////////////////////////////////////////////////////////////////

const thirdPerson = {
  ...person
}
// this created a new object and COPIED the properties of the object
// that 'person' points to. It also creates and stores a pointer
// 'thirdPerson' that points to this new object with copied properties

thirdPerson.name = 'Hannah';

console.log(person); // name: 'Manu"
console.log(thirdPerson); // name: "Hannah"

// Here, the 'person' console logs out the name 'Maru'
// and 'thirdPerson' console logs out the modified name: 'Hannah'

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

const array_name3 = [...array_name1]
// this created a new array and COPIED the elements of the array
// that 'array_name1' points to. It also creates and stores a pointer
// 'array_name3' that points to this new array with copied elements

array_name3.push('e');

console.log(array_name1); // ['a', 'b', 'c', 'd']
console.log(array_name3); // ['a', 'b', 'c', 'd', 'e']

// Here, 'array_name1' console logs out the array ['a', 'b', 'c', 'd']
// and 'array_name3' console logs out the array ['a', 'b', 'c', 'd', 'e']

// Therefore, we used the spread operator to successfully COPY properties
// & elements into a new object & array and store them in memory.
