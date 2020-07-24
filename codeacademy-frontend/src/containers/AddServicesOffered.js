import { connect } from 'react-redux';
import AddServicesOffered from '../components/AddServicesOffered.js';
import { theAddServicesOffered } from '../redux/actions.js'

//letting addservicesoffered access see state items
const mapStateToProps = (state) => {
    return {
        token: state.token,
        addServicesOffered: state.addServicesOffered,      
    }
}

//letting theAddServicesOffered action be availiable
const mapDispatchToProps = (dispatch) => {
    return {
        theAddServicesOffered: (userInfo, theToken) => dispatch(theAddServicesOffered(userInfo, theToken)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AddServicesOffered);