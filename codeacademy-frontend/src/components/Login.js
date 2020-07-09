import React from 'react';

const Login = (props) => {
    return <form onSubmit={props.handleLogin}>
        <span>The Login Form</span>
        <input type="text" placeholder="username" name="username" required />
        <input type="password" placeholder="password" name="password" required />
        <input type="submit" value="Click to Login" />
    </form>;
}

export default Login;