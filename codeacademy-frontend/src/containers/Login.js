import { connect } from 'react-redux';
import Login from '../components/Login.js';

//import actions to be used for token
import { setToken, unsetToken } from '../redux/actions';

//let login read token from state
const mapStateToProps = (state) => {
    return {
        token: state.token,
    }
}

//set login to be able to call actions to change state for setToken and unsetToken
const mapDispatchToProps = (dispatch) => {
    return {
        setToken: (submitEvent) => dispatch(setToken(submitEvent)),
        unsetToken: (submitEvent) => dispatch(unsetToken(submitEvent)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);