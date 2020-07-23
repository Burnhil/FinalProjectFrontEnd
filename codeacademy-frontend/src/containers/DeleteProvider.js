import { connect } from 'react-redux';
import DeleteProvider from '../components/DeleteProvider.js';
import { theDeleteProviderInfo } from '../redux/actions.js'

//letting delete user see state items
const mapStateToProps = (state) => {
    return {
        token: state.token,
        deleteProviderInfo: state.deleteProviderInfo,      
    }
}

//letting delete user change theDeleteUserInfo action
const mapDispatchToProps = (dispatch) => {
    return {
        theDeleteProviderInfo: (userInfo, theToken) => dispatch(theDeleteProviderInfo(userInfo, theToken)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(DeleteProvider);