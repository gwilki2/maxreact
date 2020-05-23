import React from 'react';
import './Person.css';
import withClass from '../../hoc/withClass';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';

class Person extends React.Component {

    constructor(props){
        super(props);
        this.inputElementRef =React.createRef();
    }

    componentDidMount(){
        this.inputElementRef.current.focus();
        //this.inputElement.focus();
    }

    static contextType= AuthContext;

    render(){
        return (
            <React.Fragment>
                {this.context.authenticated ? <p>Authenticated</p> : <p>Please log in</p>}
                
                <p onClick={this.props.click}>I'm {this.props.name} and I'm {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input 
                    type="text" 
                    onChange={this.props.changed}
                    value={this.props.name}
                    //ref={inputEl => {this.inputElement=inputEl}}
                    ref={this.inputElementRef}
                />
            </React.Fragment>
            
        );
    }
};

Person.propTypes= {
    click: PropTypes.func, 
    name: PropTypes.string, 
    age: PropTypes.number, 
    changed: PropTypes.func
};

export default withClass(Person, 'Person');