import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Grid, CardMedia } from '@material-ui/core';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Home from './Home.js';
import AboutUs from './Search.js';
import Login from './Login.js';


const Navigation = () => {

    return <div>

        <AppBar position="static">
            <Toolbar className="toolBar">
                <Grid className="logo"><img src={require("../pictures/logodemo.jpg")} alt="testing" width="150" height="125"></img></Grid>
                <Grid container justify="flex-end" spacing={10}>
                    <Grid item ><Link to="/" className="toolBar">Home</Link> </Grid>
                    <Grid item ><Link to="/search" className="toolBar">Search</Link> </Grid>
                    <Grid item ><Link to="/login" className="toolBar">Login</Link> </Grid>
                </Grid>
            </Toolbar>

        </AppBar>
        <Route exact path="/" component={Home} />
        <Route path="/search" component={AboutUs} />
        <Route path="/login" component={Login} />

    </div>

}

export default Navigation;