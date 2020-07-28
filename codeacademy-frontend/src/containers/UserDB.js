import { connect } from 'react-redux';
import UserDB from '../components/UserDB.js'
import { setAllUserInfo } from '../redux/actions.js'

// let UserDB see token and allUserInfo from state
const mapStateToProps = (state) => {
    return {
        token: state.token,
        allUserInfo: state.allUserInfo,
    }
}

//let UserDB change action
const mapDispatchToProps = (dispatch) => {
    return {
        setAllUserInfo: (userInfo, theToken) => dispatch(setAllUserInfo(userInfo, theToken)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UserDB);