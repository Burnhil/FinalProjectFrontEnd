import { connect } from 'react-redux';
import UpdateProviderBedTransaction from '../components/UpdateProviderBedTransaction.js';
//import { theUpdateProviderInfo } from '../redux/actions.js'

//letting updateprovider see state items
const mapStateToProps = (state) => {
    return {
        token: state.token,
        //updateProviderInfo: state.updateProviderInfo,      
    }
}

//letting updateprovider change field
// const mapDispatchToProps = (dispatch) => {
//     return {
//         theUpdateProviderInfo: (userInfo, theToken) => dispatch(theUpdateProviderInfo(userInfo, theToken)),
//     }
// }


export default connect(mapStateToProps)(UpdateProviderBedTransaction);