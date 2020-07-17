import { combineReducers } from 'redux';

//set switch for providerinfo and serviceinfo
const providerInfo = (state = null, action) => {
    switch(action.type) {
        case "SET_PROVIDERINFO":
            return action.value;
        case "SET_SERVICEINFO":
            return action.value;
    }
    return state;
}

export default combineReducers({ providerInfo });
