import { connect } from 'react-redux';
import UpdateProvider from '../components/UpdateProvider.js';
import { theUpdateProviderInfo } from '../redux/actions.js'

//letting updateprovider see state items
const mapStateToProps = (state) => {
    return {
        token: state.token,
        updateProviderInfo: state.updateProviderInfo,      
    }
}

//letting updateprovider change field action
const mapDispatchToProps = (dispatch) => {
    return {
        theUpdateProviderInfo: (userInfo, theToken) => dispatch(theUpdateProviderInfo(userInfo, theToken)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UpdateProvider);