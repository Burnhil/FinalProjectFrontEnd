import { connect } from 'react-redux';
import DisableUserAccount from '../components/DisableUserAccount.js';
import { theDisableUserAccount } from '../redux/actions.js'

//letting disable user account access state variables
const mapStateToProps = (state) => {
    return {
        token: state.token,
        disableUserAccount: state.disableUserAccount,      
    }
}

//letting disable user account change disable field
const mapDispatchToProps = (dispatch) => {
    return {
        theDisableUserAccount: (userInfo, theToken) => dispatch(theDisableUserAccount(userInfo, theToken)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(DisableUserAccount);