import React from 'react';
import './App.css';

function App() {
  // return (
  //   <div className="App">
  //     <h1>Hi, I'm a React App</h1>
  //   </div>
  // );

  // Let's delve a little deeper to understand what JSX is
  // The code above is compiled to the following code:
  return React.createElement(
    'div', null,
    React.createElement(
      'h1', null, 'Hi, I\'m a React App!!!'
    )
  );
  // React.createElement(args) can take an infinite number number of arguments.

}

export default App;
