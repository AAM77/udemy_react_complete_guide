import React from 'react';

import './Person.css';

const person = (props) => {
  return (
    <div className="Person">
      <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name}/>
    </div>
  )
}

// here we want to trigger a change when we
// click on the paragraph, but there is an issue:
// we don't have access to the clickHandler method because.
// it is in a different file/different class
// FORTUNATELY, there is a way to pass it as a property


export default person;
