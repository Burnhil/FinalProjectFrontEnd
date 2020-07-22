import { connect } from 'react-redux';
import UserId from '../components/UserId.js';
import { setUserById } from '../redux/actions.js'

const mapStateToProps = (state) => {
    return {
        userById: state.userById,
        token: state.token,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
         setUserById: (userInfo, theToken) => dispatch(setUserById(userInfo, theToken)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UserId);