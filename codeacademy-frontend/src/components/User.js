import React, { Component } from 'react';
import UserDB from '../containers/UserDB.js'
import UserId from '../containers/UserId.js'
import CreateUser from '../containers/CreateUser.js'

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
        return decodedAuthDataJSON;

    }

    render() {
        // console.log(`this is inside users with token = ${this.props.token}`)
        // console.log(this.props.token);
        // let authorizedUser = this.parseJWT(this.props.token);
        // console.log(authorizedUser);
        // console.log(authorizedUser.UserType)

        // //verify userType to show user only components to modify
        // if(authorizedUser.UserType === "Admin"){

        // }else{

        // }


        return <div><h1>User access below:</h1>
            <UserDB />
            <UserId />
            <CreateUser />
        </div>;
    }
}

export default User;