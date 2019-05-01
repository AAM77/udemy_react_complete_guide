import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person.js';
//We can use any name we want to represent the imported data
//But, the convention is to use the same name as the file
//we are importing with a capitalized first letter
//We could make it all lower case, but lower case keywords in JSX
//are generally reserved for representing html elements.

const App = props => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: 'Max', age: '28' },
      { name: 'Manu', age: '29' },
      { name: 'Stephanie', age: '26' }
    ]
  });

  const switchNameHandler = () => {
    //console.log('Was clicked');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian'
    setPersonsState({
      persons: [
        { name: 'Maximilian', age: '28' },
        { name: 'Manu', age: '29' },
        { name: 'Stephanie', age: '27' }
      ]
    });
  };

  // the more elegant way is to make multiple calls to useState
  // for multiple properties
  const [otherState, setOtherState] = useState('some other value');

  console.log(personsState, otherState);

  // One important difference here (functional component) vs.
  // the class component we had before, is that when we change
  // our setPersonsState, the content is NO LONGER merged.
  // It gets REPLACED, instead.

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={ personsState.persons[0].name }
        age={ personsState.persons[0].age }
      />

      <Person
        name={ personsState.persons[1].name }
        age={ personsState.persons[1].age }>
          My Hobbies: Racing
      </Person>

      <Person
        name={ personsState.persons[2].name }
        age={ personsState.persons[2].age }
      />
    </div>

    // Components are great because we can reuse large amounts
    // of repetitive code with easy


    // <h1>This is another heading</h1>
    // generally, we cannot (and should not) put another element
    // below the above code.
    // It is convention to have only one root element per component
    // everything else gets nested in this one root element that we return
  );
}

export default App;



// // Let's delve a little deeper to understand what JSX is
// // The code above is compiled to the following code:
// return React.createElement(
//   'div', {className: 'App'},
//   React.createElement(
//     'h1', null, 'Hi, I\'m a React App!!!'
//   )
// );
// // React.createElement(args) can take an infinite number number of arguments.
// // Writing the code with React.createElement(args) would be
// // very cumbersome, however, so the syntactive sugar in JSX is necessary



// state = {
//   persons: [
//     { name: 'Max', age: '28' },
//     { name: 'Manu', age: '29' },
//     { name: 'Stephanie', age: '26' }
//   ],
//   otherState: 'some other value'
// }
//
// switchNameHandler = () => {
//   //console.log('Was clicked');
//   // DON'T DO THIS: this.state.persons[0].name = 'Maximilian'
//   this.setState({
//     persons: [
//       { name: 'Maximilian', age: '28' },
//       { name: 'Manu', age: '29' },
//       { name: 'Stephanie', age: '27' }
//     ]
//   } )
//   // setState will not override the entire state.
//   // instead, it will merge the changes for the property
//   // we are altering, while leaving all other properties
//   // (like 'otherState') unchanged (i.e. it doesn't touch
//   // those other properties)
// }
