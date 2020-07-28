import { connect } from 'react-redux';
import ProtectedRoute from '../ProtectedRoute';

//let protectedroute see state of token
const mapStateToProps = (state) => {
    return {
        token: state.token,
    }
}


export default connect(mapStateToProps)(ProtectedRoute);