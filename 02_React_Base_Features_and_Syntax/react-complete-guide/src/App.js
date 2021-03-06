import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {

  state = {
    persons: [
      { name: 'Max', age: '28' },
      { name: 'Manu', age: '29' },
      { name: 'Stephanie', age: '26' }
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: '28' },
        { name: 'Manu', age: '29' },
        { name: 'Stephanie', age: '27' }
      ]
    });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: '28' },
        { name: event.target.value, age: '29' },
        { name: 'Stephanie', age: '27' }
      ]
    });
  }

  // in-line styles are scoped to this element/component
  // use in-line styles when you want to scope it to only one element/Component
  // use css files when you want global styling or an entire component
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button
          style={style}
          onClick={() => this.switchNameHandler('Maximilian')}>Switch Name</button>
        <Person
          name={ this.state.persons[0].name }
          age={ this.state.persons[0].age }
        />

        <Person
          name={ this.state.persons[1].name }
          age={ this.state.persons[1].age }
          click={this.switchNameHandler.bind(this, 'Max')}
          changed={this.nameChangedHandler}>My Hobbies: Racing
        </Person>

        <Person
          name={ this.state.persons[2].name }
          age={ this.state.persons[2].age }
        />
      </div>
    )
  }
}

export default App;
// here, we created a property called 'click'
// and assigned it the method via
// this.switchNamedHandler
// This will allow us to call is in Person.js
