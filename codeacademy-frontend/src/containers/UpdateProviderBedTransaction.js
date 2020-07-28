import { connect } from 'react-redux';
import UpdateProviderBedTransaction from '../components/UpdateProviderBedTransaction.js';

//letting updateprovider see state items
const mapStateToProps = (state) => {
    return {
        token: state.token,
        //updateProviderInfo: state.updateProviderInfo,      
    }
}



export default connect(mapStateToProps)(UpdateProviderBedTransaction);