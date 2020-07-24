import { connect } from 'react-redux';
import DeleteServicesOffered from '../components/DeleteServicesOffered.js';
import { theDeleteServiceOffered } from '../redux/actions.js'

//letting delete Services Offered see state items
const mapStateToProps = (state) => {
    return {
        token: state.token,
        deleteServicesOffered: state.deleteServicesOffered,      
    }
}

//letting delete Services Offered action
const mapDispatchToProps = (dispatch) => {
    return {
        theDeleteServiceOffered: (userInfo, theToken) => dispatch(theDeleteServiceOffered(userInfo, theToken)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(DeleteServicesOffered);