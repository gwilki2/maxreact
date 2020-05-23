import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../components/hoc/withClass';
import AuthContext from '../context/auth-context';


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
    showPersons: false, 
    changeCounter: 0, 
    authenticated: false
  }

  static getDerivedStateFromProps(props, state){

    console.log('[app.js] getderivedstatefromprops', props);
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
    
    this.setState((prevState, props) => ({
      persons: persons, 
      changeCounter: prevState.changed +1
    }))

  }

  togglePersonsHandler = () => {
    console.log(this.state.showPersons)
    this.setState((prevState)=> ({showPersons: !prevState.showPersons}));
    console.log(this.state.showPersons)
  }

  loginHandler = () => {
    this.setState({authenticated: true});

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
            isAuthenticated={this.state.authenticated}
          />
        </div>
      );
    }
    


    return (
        <React.Fragment>
          <AuthContext.Provider value={{authenticated: this.state.authenticated, login: this.loginHandler, mykey:`loginbtn${Math.floor(Math.random()*1000)}`}}>
            <Cockpit 
              title = {this.props.appTitle}
              personsLength={this.state.persons.length} 
              showPersons={this.state.showPersons}
              clicked={this.togglePersonsHandler}
            />
            {persons}
          </AuthContext.Provider>
        </React.Fragment>
    );
  }
}

export default withClass(App, 'App');
