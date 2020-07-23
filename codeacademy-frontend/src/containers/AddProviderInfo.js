import { connect } from 'react-redux';
import AddProviderInfo from '../components/AddProviderInfo.js';
import { theAddProviderInfo } from '../redux/actions.js'

//letting UserResetPassword access see state items
const mapStateToProps = (state) => {
    return {
        token: state.token,
        addProviderInfo: state.addProviderInfo,      
    }
}

//letting disable user account change disable field
const mapDispatchToProps = (dispatch) => {
    return {
        theAddProviderInfo: (userInfo, theToken) => dispatch(theAddProviderInfo(userInfo, theToken)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AddProviderInfo);