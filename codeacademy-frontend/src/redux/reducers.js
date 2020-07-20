import { combineReducers } from 'redux';

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

export default combineReducers({ providerInfo, serviceInfo, providerServiceInfo, token });
