import { combineReducers } from 'redux';

//set switch for providerinfo 
const providerInfo = (state = [], action) => {
    switch(action.type) {
        case "SET_PROVIDERINFO":
            return action.value;
        case "UNSET_PROVIDERINFO":
            return null;
    }
    return state;
}

export default combineReducers({ providerInfo });
