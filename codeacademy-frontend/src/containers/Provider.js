import { connect } from 'react-redux';
import Provider from '../components/Provider.js';


const mapStateToProps = (state) => {
    return {
        providerInfo: state.providerInfo,
        serviceInfo: state.serviceInfo,
    }
}

export default connect(mapStateToProps)(Provider);