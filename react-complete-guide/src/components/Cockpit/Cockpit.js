import React, { useEffect, useRef, useContext } from 'react';
import Radium from 'radium';
import AuthContext from '../../context/auth-context';


const Cockpit = props => {


    const toggleBtnRef = useRef(null);

    const authContext = useContext(AuthContext)

    useEffect(() => {
        console.log('cockpit\'s use affect');
        toggleBtnRef.current.click();
    },[])


    const style = {
        backgroundColor: 'green', 
        color: 'white',
        font: 'inherit', 
        border: '1px solid blue', 
        padding: '8px', 
        cursor: 'pointer',
        ':hover':  {
            backgroundColor: 'lightgreen',
            color:'black'
        }
    };


    if (props.showPersons){
        style.backgroundColor ="red";
        style[':hover'] = {backgroundColor: 'salmon', color:'black'};

    }

    let classes= [];

    if (props.personsLength<=2) {classes.push('red');}
    if (props.personsLength<=1) {classes.push('bold');}


    return (
        <div>
            <h1>{props.title}</h1>
            <p className={classes.join(' ')}>
                this is really working!
            </p>
            <button 
                onClick={props.clicked}
                style={style}
                ref={toggleBtnRef}
                key="togglebtn"
            >
                Toggle Persons
            </button>
            <button 
                onClick={authContext.login} 
                key="loginbtn" 
                style={style} 
            >
                Log In
            </button>
            
        </div>
    );

}

export default React.memo(Radium(Cockpit));