import React from 'react';
// we are not importing the { Component } because we are not using
// or creating a component here. We are creating a function.

const person = () => {
  return <p>I'm a person!</p>
}

export default person;
// this exports the 'person' constant that holds the function
// we can now start using this functional component in other parts of our
// project.
