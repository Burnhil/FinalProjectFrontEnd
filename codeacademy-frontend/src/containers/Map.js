import { connect } from 'react-redux';
import Map from '../components/Map.js'



const mapStateToProps = (state) => {
    return {
        // providerInfo: state.providerInfo,
        // serviceInfo: state.serviceInfo,
        providerServiceInfo: state.providerServiceInfo,
    }
}

// const mapDispatchToProps = (dispatch) =>{
//     return {
//         setProviderInfo: (provider) => dispatch(setProviderInfo(provider)),
//         setServiceInfo: (service) => dispatch(setServiceInfo(service)),
//         setProviderServiceInfo: (providerServiceInfo) => dispatch(setProviderServiceInfo(providerServiceInfo)),
//     }
// }

export default connect(mapStateToProps)(Map);