import { connect } from 'react-redux';
import UserDB from '../components/UserDB.js'

const mapStateToProps = (state) => {
    return {
        token: state.token,
    }
}


export default connect(mapStateToProps)(UserDB);