import React from 'react';
import { Grid } from '@material-ui/core';


const Login = (props) => {

    let userLoggedIn = [];

    let logInOut = null;

    if (props.token != null) {
        //seperate the token to pull out user info for use
        let userInfo = props.token;
        console.log(userInfo);
        let userSplit = userInfo.split('.')[1];
        console.log(userSplit)
        let decodeUser = atob(userSplit);
        let finalDecodeUser = JSON.parse(decodeUser);
        console.log(finalDecodeUser);
        //set token info to show user name when logged in
        let firstName = finalDecodeUser.FirstName;
        let lastName = finalDecodeUser.LastName;
        let userNameLogin = "Welcome " + firstName + " " + lastName + ".";

         userLoggedIn = <p> {userNameLogin}</p>

        //jsx for user logout button
        logInOut = (<div>
        <form onSubmit={(e) => props.unsetToken(null)} className="loginForm">
                <span>{userLoggedIn}</span>
                <Grid container direction='column'>
                    <Grid item><input type="submit" value="Click to log out" /></Grid>
                </Grid>
            </form>
        </div>);

        //else statement to show user login form when no token avaliable
    } else {
        logInOut = (<div><div><h3>{userLoggedIn}</h3></div>
            <form onSubmit={(e) => props.setToken(e)} className="loginForm">
                <span>User Login</span>
                <Grid container direction='column'>
                    <Grid item><input type="text" placeholder="userid" name="userid" required /></Grid>
                    <Grid item><input type="password" placeholder="password" name="password" required /></Grid>
                    <Grid item><input type="submit" value="Click to Login" /></Grid>
                </Grid>
            </form></div>)
    }

        //return user login form or logout button
    return <div>
        {logInOut}
    </div>


}

export default Login;