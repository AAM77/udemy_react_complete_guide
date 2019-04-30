import React from 'react';
import './App.css';
import Person from './Person/Person.js';
//We can use any name we want to represent the imported data
//But, the convention is to use the same name as the file
//we are importing with a capitalized first letter
//We could make it all lower case, but lower case keywords in JSX
//are generally reserved for representing html elements.

function App() {
  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <Person name="Max" age="28" />
      <Person name="Manu" age="29" >Hobbie: Racing</Person>
      <Person name="Stephanie" age="26"/>
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
