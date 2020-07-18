import { connect } from 'react-redux';
import User from '../components/User.js';

const mapStateToProps = (state) => {
    return {
        token: state.token,
    }
}


export default connect(mapStateToProps)(User);