import React from 'react';
import { Redirect, Route } from 'react-router-dom';

//note the ... operator is called the spread operator,  It expands the given object into individual paramenters
const ProtectedRoute = ({component: Component, ...rest}) => {
    return(
        <Route
        {...rest}
        render={(props) => checkAuth() //if checkAuth() returns true, render the passsed in component, else render the Redirect
            ? <Component {...props} />
            : <Redirect to="/login"/>}
        />
    );
}

const checkAuth = () => {
    // returns true or false, based on successful authentication
    //in this example, a successful authentications would be that state.JWT has an actual token
    //for testing just for now, just return a bool value
    return false;
}

export default ProtectedRoute;