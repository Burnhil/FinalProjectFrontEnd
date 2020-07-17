import { combineReducers } from 'redux';

//set switch for providerinfo and serviceinfo
const providerInfo = (state = null, action) => {
    switch(action.type) {
        case "SET_PROVIDERINFO":
            return action.value;
    }
    return state;
}

export default combineReducers({ providerInfo });
