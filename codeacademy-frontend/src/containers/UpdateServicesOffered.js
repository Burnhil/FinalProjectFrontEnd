import { connect } from 'react-redux';
import UpdateServicesOffered from '../components/UpdateServicesOffered.js';
import { theUpdateServicesOffered ,theBedTransaction } from '../redux/actions.js'

//letting UpdateServicesOffered see state items
const mapStateToProps = (state) => {
    return {
        token: state.token,
        updateServicesOfferedInfo: state.updateServicesOfferedInfo,      
    }
}

//letting UpdateServicesOffered change field
const mapDispatchToProps = (dispatch) => {
    return {
        theUpdateServicesOffered: (userInfo, theToken) => dispatch(theUpdateServicesOffered(userInfo, theToken)),
        theBedTransaction: (userInfo, theToken) => dispatch(theBedTransaction(userInfo, theToken)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UpdateServicesOffered);