import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Grid, CardMedia } from '@material-ui/core';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Home from './Home.js';
import AboutUs from './AboutUs.js';
import Login from './Login.js';


const Navigation = () => {

    return <div>
        
        <AppBar position="static">
            <Toolbar className="toolBar">
            
                    <Grid container justify="center"  spacing={5}>
                    <Grid><CardMedia ><img src="./demo.jpg" alt="testing" width="50" height="50"></img></CardMedia></Grid>
                    <Grid item ><Link to="/" className="toolBar">Home</Link> </Grid> 
                    <Grid item ><Link to="/about-us" className="toolBar">About Us</Link> </Grid>
                    <Grid item ><Link to="/login" className="toolBar">Login</Link> </Grid>
                    </Grid>
            </Toolbar>
  
        </AppBar>
        <Route exact path="/" component={Home} />
            <Route path="/about-us" component={AboutUs} />
            <Route path="/login" component={Login} />

    </div>

}

export default Navigation;