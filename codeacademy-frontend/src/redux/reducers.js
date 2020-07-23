import { combineReducers } from 'redux';

//delete provider information
const deleteProviderInfo = (state = null, action) => {
    switch(action.type) {
        case "SET_DELETEPROVIDERINFO":
            return action.value;
        case "UNSET_DELETEPROVIDERINFO":
            return null;
        default:
    }
    return state;
}


//update provider infromation
const updateProviderInfo = (state = null, action) => {
    switch(action.type) {
        case "SET_UPDATEPROVIDERINFO":
            return action.value;
        case "UNSET_UPDATEPROVIDERINFO":
            return null;
        default:
    }
    return state;
}

//add provider information
const addProviderInfo = (state = null, action) => {
    switch(action.type) {
        case "SET_ADDPROVIDERINFO":
            return action.value;
        case "UNSET_ADDPROVIDERINFO":
            return null;
        default:
    }
    return state;
}

//disable user account
const disableUserAccount = (state = null, action) => {
    switch(action.type) {
        case "SET_DISABLEUSERACCOUNT":
            return action.value;
        case "UNSET_DISABLEUSERACCOUNT":
            return null;
        default:
    }
    return state;
}

//reset password
const resetPassword = (state = null, action) => {
    switch(action.type) {
        case "SET_RESETPASSWORD":
            return action.value;
        case "UNSET_RESETPASSWORD":
            return null;
        default:
    }
    return state;
}

//link user provider
const linkUserProvider = (state = null, action) => {
    switch(action.type) {
        case "SET_LINKUSERPROVIDER":
            return action.value;
        case "UNSET_LINKUSERPROVIDER":
            return null;
        default:
    }
    return state;  
}

//delete user info
const deleteUserInfo = (state = null, action) => {
    switch(action.type) {
        case "SET_DELTEUSERINFO":
            return action.value;
        case "UNSET_DELETEUSERINFO":
            return null;
        default:
    }
    return state;
}

//update user info
const updateUserInfo = (state = null, action) => {
    switch(action.type) {
        case "SET_UPDATEDUSERINFO":
            return action.value;
        case "UNSET_UPDATEDUSERINFO":
            return null;
        default:
    }
    return state;
}

//create user info 
const createUserInfo = (state = null, action) => {
    switch(action.type) {
        case "SET_CREATEUSERINFO":
            return action.value;
        case "UNSET_CREATEUSERINFO":
            return null;
        default:
    }
    return state;
}

//userById info 
const userById = (state = null, action) => {
    switch(action.type) {
        case "SET_USERBYID":
            return action.value;
        case "UNSET_USERBYID":
            return null;
        default:
    }
    return state;
}

//all user info 
const allUserInfo = (state = null, action) => {
    switch(action.type) {
        case "SET_ALLUSERINFO":
            return action.value;
        case "UNSET_ALLUSERINFO":
            return null;
        default:
    }
    return state;
}

//jwt reducer 
const token = (state = null, action) => {
    switch(action.type) {
        case "SET_TOKEN":
            return action.value;
        case "UNSET_TOKEN":
            return null;
        default:
    }
    return state;
}

//set switch for providerinfo 
const providerInfo = (state = [], action) => {
    switch(action.type) {
        case "SET_PROVIDERINFO":
            return action.value;
        default:
            return state;
    }
    
}

const serviceInfo = (state = [], action) => {
    switch(action.type) {
        case "SET_SERVICEINFO":
            return action.value;
        default:
            return state;
    }
    
}

const providerServiceInfo = (state = [], action) => {
    switch(action.type) {
        case "SET_SERVICE_PROVIDER_INFO":
            return action.value;
        default:
            return state;
    }
    
}

export default combineReducers({ providerInfo, serviceInfo, providerServiceInfo, token, allUserInfo, 
    userById, createUserInfo, updateUserInfo, deleteUserInfo, linkUserProvider, resetPassword, disableUserAccount, addProviderInfo,
    updateProviderInfo, deleteProviderInfo });
