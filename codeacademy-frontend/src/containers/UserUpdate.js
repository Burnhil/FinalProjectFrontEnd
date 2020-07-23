import { connect } from 'react-redux';
import UserUpdate from '../components/UserUpdate.js';
import { theUpdateUserInfo } from '../redux/actions.js'

//letting update user see state items
const mapStateToProps = (state) => {
    return {
        token: state.token,
        updateUserInfo: state.updateUserInfo,      
    }
}

//letting update user change theUpdatedUserInfo
const mapDispatchToProps = (dispatch) => {
    return {
        theUpdateUserInfo: (userInfo, theToken) => dispatch(theUpdateUserInfo(userInfo, theToken)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UserUpdate);