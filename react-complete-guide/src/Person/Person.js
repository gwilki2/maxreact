import React from 'react';
import './Person.css';

const Person = (props) => {
    return (
        <div className="Person">
            {
                //(props.name && props.age) 
                //&& 
                <div>
                    <p onClick={props.click}>I'm {props.name} and I'm {props.age} years old!</p>
                    <p>{props.children}</p>
                    <input 
                        type="text" 
                        onChange={props.changed}
                        value={props.name}
                    />
                </div>
            }
        </div>
            
        
    );
};

export default Person;