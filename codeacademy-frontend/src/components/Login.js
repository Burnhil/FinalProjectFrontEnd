import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Grid, CardMedia, GridList } from '@material-ui/core';

const Login = (props) => {
    return <form onSubmit={props.handleLogin} className="loginForm">
        <span>User Login</span>
        <Grid container direction='column'>
        <Grid item><input type="text" placeholder="username" name="username" required /></Grid>
        
        <Grid item><input type="password" placeholder="password" name="password" required /></Grid>
        
        <Grid item><input type="submit" value="Click to Login" /></Grid>
        
        </Grid>
    </form>;
}

export default Login;