
//create user 
export const theCreateUser = (eventObj, theToken) => {
    console.log("we are in the create action");
    let token = theToken;
    console.log(token);
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

return(dispatch) => {
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
            console.log(theUser);

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

    //console.log("we are instide userbyid ******");
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



