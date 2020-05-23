import React from 'react';

const AuthContext = React.createContext({
    authenticated: false, 
    login: () => {}, 
    mykey:'loginbtn'
});

export default AuthContext;