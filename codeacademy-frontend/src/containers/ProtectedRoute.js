import { connect } from 'react-redux';
import ProtectedRoute from '../ProtectedRoute';

const mapStateToProps = (state) => {
    return {
        token: state.token,
    }
}


export default connect(mapStateToProps)(ProtectedRoute);