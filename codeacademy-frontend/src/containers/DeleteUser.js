import { connect } from 'react-redux';
import DeleteUser from '../components/DeleteUser.js';
import { theDeleteUserInfo } from '../redux/actions.js'

//letting delete user see state items
const mapStateToProps = (state) => {
    return {
        token: state.token,
        deleteUserInfo: state.deleteUserInfo,      
    }
}

//letting delete user change theDeleteUserInfo action
const mapDispatchToProps = (dispatch) => {
    return {
        theDeleteUserInfo: (userInfo, theToken) => dispatch(theDeleteUserInfo(userInfo, theToken)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(DeleteUser);