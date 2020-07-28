import { connect } from 'react-redux';
import Provider from '../components/Provider.js';

import { setProviderInfo, setServiceInfo, setProviderServiceInfo } from '../redux/actions';

//let Provider see state variables
const mapStateToProps = (state) => {
    return {
        providerInfo: state.providerInfo,
        serviceInfo: state.serviceInfo,
        providerServiceInfo: state.providerServiceInfo,
    }
}

// let Provider change variables with action
const mapDispatchToProps = (dispatch) =>{
    return {
        setProviderInfo: (provider) => dispatch(setProviderInfo(provider)),
        setServiceInfo: (service) => dispatch(setServiceInfo(service)),
        setProviderServiceInfo: (providerServiceInfo) => dispatch(setProviderServiceInfo(providerServiceInfo)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Provider);