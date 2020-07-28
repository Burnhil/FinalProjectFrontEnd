import { connect } from 'react-redux';
import GetProviderUserById from '../components/GetProviderUserById.js';
import { theGetProviderUserById } from '../redux/actions.js';

//letting GetProviderUserById see state items
const mapStateToProps = (state) => {
    return {
        token: state.token,
        getProviderUsersById: state.getProviderUsersById,      
    }
}

//letting  GetProviderUserById set action
const mapDispatchToProps = (dispatch) => {
    return {
        theGetProviderUserById: (userInfo, theToken) => dispatch(theGetProviderUserById(userInfo, theToken)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(GetProviderUserById);