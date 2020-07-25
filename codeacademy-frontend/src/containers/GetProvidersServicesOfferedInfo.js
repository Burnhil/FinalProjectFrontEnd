import { connect } from 'react-redux';
import GetProvidersServicesOfferedInfo from '../components/GetProvidersServicesOfferedInfo.js';
import { setProviderServiceInfo2 } from '../redux/actions.js'

//letting getproviderservicesofferedinfo see state
const mapStateToProps = (state) => {
    return {
        token: state.token,
        adminProviderServiceInfo: state.adminProviderServiceInfo,      
    }
}

//letting change provider services offered info
const mapDispatchToProps = (dispatch) => {
    return {
        setProviderServiceInfo2: (userInfo, theToken) => dispatch(setProviderServiceInfo2(userInfo, theToken)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(GetProvidersServicesOfferedInfo);