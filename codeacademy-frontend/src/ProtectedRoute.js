import React from 'react';
import { Redirect, Route } from 'react-router-dom';


const ProtectedRoute = ({component: Component, ...rest}) => {
    // console.log(`this is rest ${rest}`);
    // console.log(rest);
    return(
        
        <Route
        {...rest}
        render={(props) => checkAuth(rest.token) 
            ? <Component {...props} />
            : <Redirect to="/login"/>}
        />
    );
}

const checkAuth = (theJWT) => {
    //console.log(`this is checkAuth from protected route = ${theJWT}`)
    //console.log(theJWT);
    if(theJWT != null) {
        return true;
    } else {
        return false;
    }

}

export default ProtectedRoute;