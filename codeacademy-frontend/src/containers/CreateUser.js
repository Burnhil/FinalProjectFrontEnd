import { connect } from 'react-redux';
import CreateUser from '../components/CreateUser.js';
import { theCreateUser } from '../redux/actions.js'

const mapStateToProps = (state) => {
    return {
        token: state.token,
        createUserInfo: state.createUserInfo,
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        theCreateUser: (userInfo, theToken) => dispatch(theCreateUser(userInfo, theToken)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CreateUser);