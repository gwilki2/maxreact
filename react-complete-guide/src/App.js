import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state= {
    persons: [
      {name: 'Max', age: 28, id: 'skdfj'}, 
      {name: 'Manu', age: 56, id: 'kdk'}, 
      {name: 'Steph', age: 43, id: 'asdf'}
    ], 
    someOtherState: 'test', 
    showPersons: false
  }

  switchNameHandler = (newName) => {
    console.log('Was clicked');
    this.setState({
      persons: [
        {name: newName, age: 28}, 
        {name: 'Manu', age: 56}, 
        {name: 'Steph', age: 42}
      ]
    })
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});

  }
  nameChangedHandler= (e, id) => {
    const persons = [...this.state.persons]
    const index=persons.findIndex(p => p.id === id)
    persons[index].name = e.target.value;
    
    this.setState({
      persons: persons
    })

  }

  togglePersonsHandler = () => {
    console.log(this.state.showPersons)
    this.setState((prevState)=> ({showPersons: !prevState.showPersons}));
    console.log(this.state.showPersons)
  }

  render() {

    const style = {
      backgroundColor: 'white', 
      font: 'inherit', 
      border: '1px solid blue', 
      padding: '8px', 
      cursor: 'pointer'

    };
    let persons=null;

    if (this.state.showPersons){
      persons=(
        <div>
          {
            this.state.persons.map((person, index) => {
              return (
                <Person 
                  key={person.id}
                  name={person.name} 
                  age={person.age} 
                  click={this.deletePersonHandler.bind(this, index)}
                  changed={(event)=> {this.nameChangedHandler(event, person.id);}}
                >
                  My Hobbies: Racing
                </Person>
              );
            })
          }
        </div>
      );

    }
    

    return (
      <div className="App">
        <h1>Hi, I'm a react App</h1>
        <p>this is really working!</p>
        <button 
          onClick={this.togglePersonsHandler}
          style={style}
        >
          Toggle Persons
        </button>
        {persons}
        </div>
    );
  }
}

export default App;
