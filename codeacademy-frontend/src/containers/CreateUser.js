import { connect } from 'react-redux';
import CreateUser from '../components/CreateUser.js';
import { theCreateUser } from '../redux/actions.js'

// let CreateUser see state variables
const mapStateToProps = (state) => {
    return {
        token: state.token,
        createUserInfo: state.createUserInfo,
        
    }
}

// let CreateUser see theCreatUser action
const mapDispatchToProps = (dispatch) => {
    return {
        theCreateUser: (userInfo, theToken) => dispatch(theCreateUser(userInfo, theToken)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CreateUser);