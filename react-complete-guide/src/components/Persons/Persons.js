import React from 'react';
import Person from './Person/Person'


class Persons extends React.PureComponent{
    


    // shouldComponentUpdate(nextProps, nextState){
    //     console.log("person.js shouldcomp update");
    //     return (nextProps.persons !== this.props.persons
    //         || nextProps.changed !== this.props.changed
    //         || nextProps.clicked !== this.props.clicked
    //     );
    // }

    getSnapshotBeforeUpdate(prevProps, prevState){
        return {message: 'Snapshot'};
    }

    componentDidUpdate(prevProps, prevState, snapShot){
        console.log ("this.componentDidCatch")
    }

    render = () => {
        
        return this.props.persons.map((person, index) => {
        
            return (
                <Person 
                    key={person.id}
                    name={person.name} 
                    age={person.age} 
                    click={this.props.clicked.bind(this, index)}
                    changed={(event)=> {this.props.changed(event, person.id);}}
                >
                    My Hobbies: Racing
                </Person>
            );
        });
    }
}

export default Persons;