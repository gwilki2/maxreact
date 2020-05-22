import React from 'react';
import Person from './Person/Person'


const Persons = props => props.persons.map((person, index) => {
    return (
        <Person 
            key={person.id}
            name={person.name} 
            age={person.age} 
            click={props.clicked.bind(this, index)}
            changed={(event)=> {props.changed(event, person.id);}}
        >
            My Hobbies: Racing
        </Person>
    );
});

export default Persons;