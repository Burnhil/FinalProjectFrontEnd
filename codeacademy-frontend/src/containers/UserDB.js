import { connect } from 'react-redux';
import UserDB from '../components/UserDB.js'
import { setAllUserInfo } from '../redux/actions.js'

const mapStateToProps = (state) => {
    return {
        token: state.token,
        allUserInfo: state.allUserInfo,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setAllUserInfo: (userInfo, theToken) => dispatch(setAllUserInfo(userInfo, theToken)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UserDB);