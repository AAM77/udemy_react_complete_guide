import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {

  state = {
    persons: [
      { id: 1, name: 'Max', age: '28' },
      { id: 2, name: 'Manu', age: '29' },
      { id: 3, name: 'Stephanie', age: '26' }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
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

    // without a key propery in the mapped components,
    // react re-renders the ENTIRE list!
    // With the key property present, react can efficiently
    // evaluate which elements changed and which did not.
    // This way, it only re-renders the elements that DID change.
    // This is FAR more efficient.

    // !!NOTE!!: Using 'index' to assign a key is only good to remove
    // the error. It DOES NOT help react efficiently locate and
    // render the correct components. Therefore, it renders
    // everything again.
    // add unique IDs to the data objects instead!

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map( (person, index) => {
            return(
              <Person
                key={ person.id }
                name={ person.name }
                age={ person.age }
                click={() => this.deletePersonHandler(index)}
                changed={(event) => this.nameChangedHandler(event, person.id)}
              />
            )
          })}
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    )
  }
}

export default App;
// here, we created a property called 'click'
// and assigned it the method via
// this.switchNamedHandler
// This will allow us to call is in Person.js
