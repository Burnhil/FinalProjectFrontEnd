import { connect } from 'react-redux';
import User from '../components/User.js';

//let user component see token from state
const mapStateToProps = (state) => {
    return {
        token: state.token,
    }
}

export default connect(mapStateToProps)(User);