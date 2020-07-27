import React from 'react';
import { AppBar, Toolbar,Grid} from '@material-ui/core';
import { Link, Route } from 'react-router-dom';
import Home from './Home.js';
import Search from './Search.js';
import Login from '../containers/Login.js';
import User from '../containers/User.js'
import ProtectedRoute from '../containers/ProtectedRoute.js';


const Navigation = () => {

    return <div>

        <AppBar position="static">
            <Toolbar className="toolBar">
                <Grid className="logo"><img src={require("../pictures/logodemo.jpg")} alt="testing" width="150" height="125"></img></Grid>
                <Grid container justify="flex-end" spacing={10}>
                    <Grid item ><Link to="/" className="toolBar">Home</Link> </Grid>
                    <Grid item ><Link to="/locations" className="toolBar">See Locations</Link> </Grid>
                    <Grid item ><Link to="/user" className="toolBar">User</Link> </Grid>
                    <Grid item ><Link to="/login" className="toolBar">Login</Link> </Grid>
                    
                </Grid>
            </Toolbar>

        </AppBar>
        <Route exact path="/" component={Home} />
        <Route path="/locations" component={Search} />
        <Route path="/login" component={Login} />
        <ProtectedRoute path="/user" component={User} />

    </div>

}

export default Navigation;