import { connect } from 'react-redux';
import UserResetPassword from '../components/UserResetPassword.js';
import { theResetPassword } from '../redux/actions.js'

//letting UserResetPassword access see state items
const mapStateToProps = (state) => {
    return {
        token: state.token,
        resetPassword: state.resetPassword,      
    }
}

//letting UserResetPassword access theResetPassword action
const mapDispatchToProps = (dispatch) => {
    return {
        theResetPassword: (userInfo, theToken) => dispatch(theResetPassword(userInfo, theToken)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UserResetPassword);