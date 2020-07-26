import React, { Component } from 'react';
import UserDB from '../containers/UserDB.js';
import UserId from '../containers/UserId.js';
import CreateUser from '../containers/CreateUser.js';
import UserUpdate from '../containers/UserUpdate.js';
import DeleteUser from '../containers/DeleteUser.js';
import LinkUserProvider from '../containers/LinkUserProvider.js';
import UserResetPassword from '../containers/UserResetPassword.js';
import DisableUserAccount from '../containers/DisableUserAccount.js';
import AddProviderInfo from '../containers/AddProviderInfo.js';
import UpdateProvider from '../containers/UpdateProvider.js';
import DeleteProvider from '../containers/DeleteProvider.js';
import LinkProviderService from '../containers/LinkProviderService.js';
import AddServicesOffered from '../containers/AddServicesOffered.js';
import DeleteServicesOffered from '../containers/DeleteServicesOffered.js';
import GetAllBedTransactions from '../containers/GetAllBedTransactions.js';
import GetAllBedTransactionsById from '../containers/GetAllBedTransactionsById.js';
import GetAllProviderUser from '../containers/GetAllProviderUser.js';
import GetProviderUserById from '../containers/GetProviderUserById.js';

import UpdateProviderBedTransaction from '../containers/UpdateProviderBedTransaction.js';
import GetProvidersServicesOfferedInfo from '../containers/GetProvidersServicesOfferedInfo.js';


class User extends Component {


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
        //console.log(`this is inside users with token = ${this.props.token}`)
        //console.log(this.props.token);
        let authorizedUser = this.parseJWT(this.props.token);
        //console.log(authorizedUser);
        //console.log(authorizedUser.UserType)
        let userRights = authorizedUser.UserType;
        console.log(userRights);


        let userRightJSX = [];

        // //verify userType to show user only components to modify
        if (authorizedUser.UserType === "Admin") {
            userRightJSX = <div>
                <CreateUser />
                <UserUpdate />
                <DeleteUser /> 
                <UserResetPassword />
                <DisableUserAccount />

                <h3>Provider and Service Offered Options</h3>
                <AddProviderInfo />
                <LinkUserProvider />
                <UpdateProvider />
                <DeleteProvider />               
                <AddServicesOffered />
                <LinkProviderService />
                <DeleteServicesOffered />
                <UpdateProviderBedTransaction />
                

                <h3>Reporting Features</h3>
                <UserDB />
                <UserId />
                <GetProvidersServicesOfferedInfo />   
                <GetAllBedTransactions />              
                <GetAllBedTransactionsById />
                <GetAllProviderUser />
                <GetProviderUserById />
                
            </div>
        } else {
            userRightJSX = <div className="userAccess">
                <AddServicesOffered />
                <LinkProviderService />
                <UpdateProvider />
                <UpdateProviderBedTransaction /> 
                <GetProvidersServicesOfferedInfo />
            </div>
            
        }


        return <div><h3>User Access Page</h3>{userRightJSX}</div>;
    }
}

export default User;