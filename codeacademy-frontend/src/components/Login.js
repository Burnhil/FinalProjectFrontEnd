import React from 'react';
import { Grid } from '@material-ui/core';


const Login = (props) => {
    if(props.token != null){
        console.log(props.token)

    }

    return <form onSubmit={(e) => props.setToken(e)} className="loginForm">
        <span>User Login</span>
        <Grid container direction='column'>
        <Grid item><input type="text" placeholder="userid" name="userid" required /></Grid>
        
        <Grid item><input type="password" placeholder="password" name="password" required /></Grid>
        
        <Grid item><input type="submit" value="Click to Login" /></Grid>
        
        </Grid>
    </form>;
}

export default Login;