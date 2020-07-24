import { connect } from 'react-redux';
import GetAllProviderUser from '../components/GetAllProviderUser.js';
import { theGetAllProviderUserInfo } from '../redux/actions.js'

//letting GetAllProviderUser see state items
const mapStateToProps = (state) => {
    return {
        token: state.token,
        getProviderUsersInfo: state.getProviderUsersInfo,      
    }
}

//letting  GetAllProviderUser see action
const mapDispatchToProps = (dispatch) => {
    return {
        theGetAllProviderUserInfo: (userInfo, theToken) => dispatch(theGetAllProviderUserInfo(userInfo, theToken)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(GetAllProviderUser);