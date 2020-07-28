import { connect } from 'react-redux';
import AddProviderInfo from '../components/AddProviderInfo.js';
import { theAddProviderInfo } from '../redux/actions.js'

//letting addproviderinfo access see state items
const mapStateToProps = (state) => {
    return {
        token: state.token,
        addProviderInfo: state.addProviderInfo,      
    }
}

//letting addproviderinfo field see action
const mapDispatchToProps = (dispatch) => {
    return {
        theAddProviderInfo: (userInfo, theToken) => dispatch(theAddProviderInfo(userInfo, theToken)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AddProviderInfo);