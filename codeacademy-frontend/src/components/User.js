import React, { Component } from 'react';

class User extends Component {
    constructor(props) {
        super(props);
    }

    parseJWT = (token) => {
        //grab the middle part of the token.
        let authData = token.split('.')[1];
        // JWTs are base64 encoded, so decode it.
        let decodedAuthData = atob(authData);
        // the decoded data should be a JSON object, so parse it as such.
        let decodedAuthDataJSON = JSON.parse(decodedAuthData);
        console.log(decodedAuthDataJSON);

    }

    render() {
        console.log(`this is inside users with token = ${this.props.token}`)
        console.log(this.props.token)
        return <h1>Start of user page</h1>;
    }
}

export default User;