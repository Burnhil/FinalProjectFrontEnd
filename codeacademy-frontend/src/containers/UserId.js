import { connect } from 'react-redux';
import UserId from '../components/UserId.js';
import { setUserById } from '../redux/actions.js'

//let UserId see token, userById from state
const mapStateToProps = (state) => {
    return {
        userById: state.userById,
        token: state.token,
    }
}

//let UserId set action
const mapDispatchToProps = (dispatch) => {
    return {
         setUserById: (userInfo, theToken) => dispatch(setUserById(userInfo, theToken)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UserId);