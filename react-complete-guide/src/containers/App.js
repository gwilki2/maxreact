import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  constructor(props){
    super(props);
    console.log('app.js constructor called');
  }

  state= {
    persons: [
      {name: 'Max', age: 28, id: 'skdfj'}, 
      {name: 'Manu', age: 56, id: 'kdk'}, 
      {name: 'Steph', age: 43, id: 'asdf'}
    ], 
    someOtherState: 'test', 
    showPersons: false
  }

  static getDerivedStateFromProps(props, state){

    console.log('getderivedstatefromprops', props);
    return state;
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

    
    let persons=null;

    if (this.state.showPersons){
      persons=(
        <div>
          <Persons 
            persons={this.state.persons} 
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
          />
        </div>
      );
    }
    


    return (
        <div className="App">
          <Cockpit 
            title = {this.props.appTitle}
            persons={this.state.persons} 
            showPersons={this.state.showPersons}
            clicked={this.togglePersonsHandler} 
          />
          {persons}
        </div>
    );
  }
}

export default App;
