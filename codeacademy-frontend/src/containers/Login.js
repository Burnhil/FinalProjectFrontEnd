import { connect } from 'react-redux';
import Login from '../components/Login.js';

import { setToken } from '../redux/actions';

const mapStateToProps = (state) => {
    return {
        token: state.token,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setToken: (submitEvent) => dispatch(setToken(submitEvent)),

        //need to remove token still
        unsetToken: (submitEvent) => dispatch(setToken(submitEvent)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);