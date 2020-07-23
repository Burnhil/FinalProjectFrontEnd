
//delete provider info
export const theDeleteProviderInfo = (eventObj, theToken) => {
    console.log("we are inside delete provider info");
    let token = theToken;
    console.log(token);
    eventObj.preventDefault();

    let providerIdToDelete = eventObj.target.providerid.value;

    let deleteProviderEndpoint = "http://localhost:3000/providers/" + providerIdToDelete;

       //create fetch to call delete user endpoint in database
    return (dispatch) => {
        fetch(deleteProviderEndpoint, {
            method: 'delete',
            headers: {
                'Authorization': "Bearer " + token, // this is how you pass the JWT to an endpoint needing authoriztion.
            },
        })
            .then(response => response.json())
            .then(deleteProvider => {
                console.log(deleteProvider); 
                //info coming back was message: and deletedUserDoc set deletedUserDoc to deleteUser.deletedUserDoc
                const action = {
                    type: "SET_DELETEPROVIDERINFO",
                    value: deleteProvider.deletedProviderDoc,
                }
                dispatch(action);
            });
    }

}



// update provider info
export const theUpdateProviderInfo = (eventObj, theToken) => {
    console.log("we are inside update provider info");
    let token = theToken;
    console.log(token);
    eventObj.preventDefault();

    //set object to contain credentials
    let credentials = {

    }

    if(eventObj.target.providerid.value !== 'null'){
        credentials.OrganizationName = eventObj.target.organizationname.value
    }
    if(eventObj.target.providerid.value !== 'null'){
        credentials.Email = eventObj.target.email.value
    }
    if(eventObj.target.providerid.value !== 'null'){
        credentials.WebsiteInfo = eventObj.target.websiteinfo.value
    }
    if(eventObj.target.providerid.value !== 'null'){
        credentials.PhoneNumber = eventObj.target.phonenumber.value
    }
    if(eventObj.target.providerid.value !== 'null'){
        credentials.Address = eventObj.target.address.value
    }
    if(eventObj.target.providerid.value !== 'null'){
        credentials.City = eventObj.target.city.value
    }
    if(eventObj.target.providerid.value !== 'null'){
        credentials.State = eventObj.target.state.value
    }
    if(eventObj.target.providerid.value !== 'null'){
        credentials.County = eventObj.target.county.value
    }

    console.log(credentials)

    //set userid to add to url
    let providerIdToChange = eventObj.target.providerid.value;

    let updateEndpointURL = "http://localhost:3000/providers/" + providerIdToChange;
    //console.log(updateEndpointURL)

    //create fetch to call update provider endpoint in database
    return (dispatch) => {
        fetch(updateEndpointURL, {
            method: 'put',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + token, // this is how you pass the JWT to an endpoint needing authoriztion.
            },
            body: JSON.stringify(credentials),
        })
            .then(response => response.json())
            .then(updateProvider => {
                console.log(updateProvider); 
                //info coming back to update provider
                const action = {
                    type: "SET_UPDATEPROVIDERINFO",
                    value: updateProvider.message,
                }
                dispatch(action);
            });

    }

}



// add provider info
export const theAddProviderInfo = (eventObj, theToken) => {
    
    let token = theToken;
    //console.log(token);
    eventObj.preventDefault();

    //create object for add provider information
    let credentials = {
        OrganizationName: eventObj.target.organizationname.value,
        Email: eventObj.target.email.value,
        WebsiteInfo: eventObj.target.websiteinfo.value,
        PhoneNumber: eventObj.target.phonenumber.value,
        Address: eventObj.target.address.value,
        City: eventObj.target.city.value,
        State: eventObj.target.state.value,
        County: eventObj.target.county.value,
    }

    return (dispatch) => {
        
        fetch("http://localhost:3000/providers", {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + token, // this is how you pass the JWT to an endpoint needing authoriztion.
            },
            body: JSON.stringify(credentials),
        })
            .then(response => response.json())
            .then(createProvider => {
                //console.log(createProvider);
                //set state for addproviderinfo
                const action = {
                    type: "SET_ADDPROVIDERINFO",
                    value: createProvider.newProvider,
                }
                dispatch(action);
            });

    }

}


//disable user account
export const theDisableUserAccount = (eventObj, theToken) => {
    let token = theToken;
    //console.log(token);
    eventObj.preventDefault();

    //set url endpoint with :userid
    let theUser = eventObj.target.userid.value;
    let updateEndpointURL = "http://localhost:3000/users/disableuser/" + theUser;

    //call endpoint to change disable from true to false
    return (dispatch) => {
        fetch(updateEndpointURL, {
            method: 'put',
            headers: {
                'Authorization': "Bearer " + token, // this is how you pass the JWT to an endpoint needing authoriztion.
            },
        })
            .then(response => response.json())
            .then(disableUser => {
                //console.log(disableUser); 
                //save to state
                const action = {
                    type: "SET_DISABLEUSERACCOUNT",
                    value: disableUser.disableUserDoc,
                }
                dispatch(action);
            });

    }

}

//reset password for user
export const theResetPassword = (eventObj, theToken) => {
    console.log("we are inside reset password");
    let token = theToken;
    console.log(token);
    eventObj.preventDefault();

    let credentials = {
        UserPassword: eventObj.target.newpassword.value,
    }

    let theUser = eventObj.target.userid.value;
    let updateEndpointURL = "http://localhost:3000/users/resetpassword/" + theUser;

    return (dispatch) => {
        fetch(updateEndpointURL, {
            method: 'put',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + token, // this is how you pass the JWT to an endpoint needing authoriztion.
            },
            body: JSON.stringify(credentials),
        })
            .then(response => response.json())
            .then(resetingUserPassword => {
                console.log(resetingUserPassword);
                const action = {
                    type: "SET_RESETPASSWORD",
                    value: resetingUserPassword.resetPasswordDoc,
                }
                dispatch(action);
            });

    }
}


//link user provider
export const theLinkUserProvider = (eventObj, theToken) => {

    let token = theToken;
    //console.log(token);
    eventObj.preventDefault();

    let theUser = eventObj.target.userid.value;
    let theProvider = eventObj.target.providerid.value;

    let updateEndpointURL = "http://localhost:3000/users/link/" + theUser;

    let credentials = {
        _id: theProvider,
    }

    //create fetch statement to link user provider information
    return (dispatch) => {
        fetch(updateEndpointURL, {
            method: 'put',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + token, // this is how you pass the JWT to an endpoint needing authoriztion.
            },
            body: JSON.stringify(credentials),
        })
            .then(response => response.json())
            .then(thelinkUserProvider => {
                //console.log(thelinkUserProvider); 
                const action = {
                    type: "SET_LINKUSERPROVIDER",
                    value: thelinkUserProvider.message,
                }
                dispatch(action);
            });

    }

}

//delete user info
export const theDeleteUserInfo = (eventObj, theToken) => {

    let token = theToken;
    //console.log(token);
    eventObj.preventDefault();

    //pull user id to be deleted 
    let userIdToDelete = eventObj.target.userid.value;

    //create endpoint for fetch delete user
    let updateEndpointURL = "http://localhost:3000/users/" + userIdToDelete;
    //console.log(updateEndpointURL)

    //create fetch to call delete user endpoint in database
    return (dispatch) => {
        fetch(updateEndpointURL, {
            method: 'delete',
            headers: {
                'Authorization': "Bearer " + token, // this is how you pass the JWT to an endpoint needing authoriztion.
            },
        })
            .then(response => response.json())
            .then(deleteUser => {
                //console.log(deleteUser); 
                //info coming back was message: and deletedUserDoc set deletedUserDoc to deleteUser.deletedUserDoc
                const action = {
                    type: "SET_DELTEUSERINFO",
                    value: deleteUser.deletedUserDoc,
                }
                dispatch(action);
            });
    }
}


//update user info theUpdateUserInfo
export const theUpdateUserInfo = (eventObj, theToken) => {

    let token = theToken;
    //console.log(token);
    eventObj.preventDefault();

    let userIdToChange = eventObj.target.userid.value;
    //console.log(userIdToChange);
    //console.log(typeof userIdToChange);
    let credentials = {

    }
    //create credential object
    if (eventObj.target.firstname.value !== 'null') {
        credentials.FirstName = eventObj.target.lastname.value;
    }
    if (eventObj.target.lastname.value !== 'null') {
        credentials.LastName = eventObj.target.lastname.value;
    }
    if (eventObj.target.organization.value !== 'null') {
        credentials.Organization = eventObj.target.organization.value;
    }
    if (eventObj.target.phonenumber.value !== 'null') {
        credentials.PhoneNumber = eventObj.target.phonenumber.value;
    }
    if (eventObj.target.email.value !== 'null') {
        credentials.Email = eventObj.target.email.value;
    }
    if (eventObj.target.usertype.value !== 'null') {
        credentials.UserType = eventObj.target.usertype.value;
    }
    //test filling credential objects to be passed to database for update
    //console.log(credentials);

    let updateEndpointURL = "http://localhost:3000/users/" + userIdToChange;
    //console.log(updateEndpointURL)

    //create fetch to call update user endpoint in database
    return (dispatch) => {
        fetch(updateEndpointURL, {
            method: 'put',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + token, // this is how you pass the JWT to an endpoint needing authoriztion.
            },
            body: JSON.stringify(credentials),
        })
            .then(response => response.json())
            .then(updateUser => {
                //console.log(updateUser); 
                //info coming back was message: and updatedUserDoc set updateduserinfo to updateUser.updatedUserDoc
                const action = {
                    type: "SET_UPDATEDUSERINFO",
                    value: updateUser.updatedUserDoc,
                }
                dispatch(action);
            });

    }
}


//create user 
export const theCreateUser = (eventObj, theToken) => {

    let token = theToken;
    //console.log(token);
    eventObj.preventDefault();

    //example from 
    // let FirstName = eventObj.target.username.value;
    // let LastName = eventObj.target.password.value;

    let FirstName = eventObj.target.firstname.value;
    let LastName = eventObj.target.lastname.value;
    let Organization = eventObj.target.organization.value;
    let PhoneNumber = eventObj.target.phonenumber.value;
    let Email = eventObj.target.email.value;
    let UserType = eventObj.target.usertype.value;
    let UserId = eventObj.target.userid.value;
    let UserPassword = eventObj.target.userpassword.value;

    // Make a JSON object that will be passed to the backend API
    let credentials = {
        FirstName: FirstName,
        LastName: LastName,
        Organization: Organization,
        PhoneNumber: PhoneNumber,
        Email: Email,
        UserType: UserType,
        UserId: UserId,
        UserPassword: UserPassword
    }

    return (dispatch) => {
        fetch("http://localhost:3000/users", {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + token, // this is how you pass the JWT to an endpoint needing authoriztion.
            },
            body: JSON.stringify(credentials),
        })
            .then(response => response.json())
            .then(theUser => {
                //console.log(theUser);

                const action = {
                    type: "SET_CREATEUSERINFO",
                    value: theUser
                }
                dispatch(action);
            });

    }
}


//pull user by id from database
export const setUserById = (eventObj, theToken) => {

    let token = theToken;
    //console.log(token);
    eventObj.preventDefault();

    let theUserId = eventObj.target.userid.value;
    //console.log(theUserId);
    let userIdEndpoint = "http://localhost:3000/users/" + theUserId;
    //console.log(`the user id plus endpoint are = ${userIdEndpoint}`);
    //console.log(typeof userIdEndpoint)

    return (dispatch) => {
        fetch(userIdEndpoint, {
            method: 'get',
            headers: {
                'Authorization': "Bearer " + token, // this is how you pass the JWT to an endpoint needing authoriztion.
            }
        })
            .then(response => response.json())
            .then(thePeopleData => {
                console.log(thePeopleData);

                const action = {
                    type: "SET_USERBYID",
                    value: thePeopleData
                }
                dispatch(action);
            });
    }
}

// pull all user info from database
export const setAllUserInfo = (eventObj, theToken) => {
    //set token info to be passed to database for authentication
    let token = theToken;
    //console.log(token);
    eventObj.preventDefault();

    return (dispatch) => {
        //use fetch to set allUserInfo into state
        fetch("http://localhost:3000/users", {
            method: 'get',
            headers: {
                'Authorization': "Bearer " + token, // this is how you pass the JWT to an endpoint needing authoriztion.
            }
        })
            .then(response => response.json())
            .then(userData => {
                console.log(userData);

                const action = {
                    type: "SET_ALLUSERINFO",
                    value: userData
                }
                dispatch(action);
            });
    }
}


//pull jwt from login in to put in store/state 
export const setToken = (eventObj) => {
    // TODO modify this action, so that it takes the onSubmit event handle object from Login,
    // perform the actual authentication, and then return as the "value" the actual retrieved token.
    return (dispatch) => {
        //let newToken = null;
        // now perform authentication.

        eventObj.preventDefault();
        // get the username and password from the form
        // e.target is the form and e.target.username is the input textfield with the name attribute of "username"
        let theUsername = eventObj.target.userid.value;
        let thePassword = eventObj.target.password.value;
        //console.log(`The given username is ${theUsername} and the given password is ${thePassword}.`);
        // Make a JSON object that will be passed to the backend API
        let credentials = {
            UserId: theUsername,
            UserPassword: thePassword
        }

        fetch("http://localhost:3000/users/authenticate ", {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials),
        })
            .then((response) => response.json())
            .then((theData) => {
                console.log(`The data from logging is ${theData}`);
                // Based on this API's successful authentication, theer should be a token field in the returned
                // JSON object.  Use that field to update the state's JWT field.
                // TODO Here, you need ot be able to somehow make use of the SET_TOKEN Redux action.
                // The Login component has a container that ties that cation to it, so the action should
                // be available to Login's props.setToken action function.
                console.log(theData);
                console.log(typeof theData);
                const action = {
                    type: "SET_TOKEN",
                    value: theData.token
                }
                dispatch(action);
            });

    }
}

//function to remove token from store/state
export const unsetToken = (tokenToRemove) => {
    return {
        type: "UNSET_TOKEN",
        value: tokenToRemove
    }
}


//funtion to pull provider to store in state
export const setProviderInfo = () => {

    return (dispatch) => {
        fetch("http://localhost:3000/providers")
            .then((response) => response.json())
            .then((theData) => {
                //console.log(theData);   //testing data coming from provider endpoint
                //set provider info into the redux store/state
                const action = {
                    type: "SET_PROVIDERINFO",
                    value: theData,
                }
                dispatch(action);

            });
    }
}

export const setServiceInfo = () => {
    return (dispatch) => {
        fetch("http://localhost:3000/servicesoffered")
            .then((response) => response.json())
            .then((theData) => {
                //console.log(theSecondData);  //testing data coming from services offered endpoint
                //set the service offered info to redux store/state
                const action = {
                    type: "SET_SERVICEINFO",
                    value: theData,

                }
                dispatch(action);


            });
    }
}

export const setProviderServiceInfo = () => {
    return (dispatch) => {
        fetch("http://localhost:3000/providers")
            .then((response) => response.json())
            .then((theData) => {
                //console.log(theData);   //testing data coming from provider endpoint

                let secondURL = "http://localhost:3000/servicesoffered/";
                fetch(secondURL)
                    .then((responseToAdd) => responseToAdd.json())
                    .then(theSecondData => {
                        //console.log(theSecondData);  //testing data coming from services offered endpoint

                        //combine the providerinfo and serviceoffered 
                        let providerServiceInfo = [];   //create array to combine info into
                        //loop over each array and match by id
                        for (let k = 0; k < theData.length; k++) {
                            for (let i = 0; i < theSecondData.length; i++) {
                                //console.log("we are here");  //testing data             
                                if (theData[k].TheServicesOfferedId[0] === theSecondData[i]._id) {
                                    //testing data to verify matching id's for provider/services offered
                                    //console.log(`this is the provider = ${theData[k].TheServicesOfferedId[0]} this is the serviceoffered = ${theSecondData[i]._id}`)

                                    //create new object to store both provider and services offered info
                                    providerServiceInfo[k] = {
                                        //key data from providerInfo array
                                        Provider_id: theData[k]._id,
                                        OrganizationName: theData[k].OrganizationName,
                                        Address: theData[k].Address,
                                        City: theData[k].City,
                                        County: theData[k].County,
                                        State: theData[k].State,
                                        Email: theData[k].Email,
                                        PhoneNumber: theData[k].PhoneNumber,
                                        WebsiteInfo: theData[k].WebsiteInfo,
                                        //key data from serviceInfo array
                                        TheServicesOfferedId: theSecondData[i]._id,
                                        CriteriaForService: theSecondData[i].CriteriaForService,
                                        AvaliableBeds: theSecondData[i].AvaliableBeds,
                                        TotalBeds: theSecondData[i].TotalBeds,
                                        ServiceType: theSecondData[i].ServiceType,
                                        ServicesDescription: theSecondData[i].ServicesDescription,
                                        VolunteerOpportunities: theSecondData[i].VolunteerOpportunities,
                                        VolunteersNeeded: theSecondData[i].VolunteersNeeded,
                                        WarmingStation: theSecondData[i].WarmingStation,
                                    }
                                }
                            }
                        }

                        const action = {
                            type: "SET_SERVICE_PROVIDER_INFO",
                            value: providerServiceInfo,

                        }
                        dispatch(action);

                    })
            });
    }
}



