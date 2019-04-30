import React from 'react';
// we are not importing the { Component } because we are not using
// or creating a component here. We are creating a function.

const person = (props) => {
  return <p>I'm {props.name} and I am {props.age} years old!</p>
}

//we can pass dynamic content to JSX lines by placing the code
//for generating the dynamic content in beween curly braces.
//generally, though, we cannot add multi-line code in JSX.
//rather, we can only pass single/one line expressions.

export default person;
// this exports the 'person' constant that holds the function
// we can now start using this functional component in other parts of our
// project.


// NOTE:
// This type of component is called a 'functional' or 'presentational' component.
// This is because it is 'stateless'

// This differs from a class based component, which is 'stateful'
