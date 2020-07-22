import { combineReducers } from 'redux';

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

export default combineReducers({ providerInfo, serviceInfo, providerServiceInfo, token, allUserInfo, userById, createUserInfo });
