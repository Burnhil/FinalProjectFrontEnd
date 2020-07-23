import { connect } from 'react-redux';
import LinkUserProvider from '../components/LinkUserProvider.js';
import { theLinkUserProvider } from '../redux/actions.js'

//letting link user provider see state items
const mapStateToProps = (state) => {
    return {
        token: state.token,
        linkUserProvider: state.linkUserProvider,      
    }
}

//letting link user provider change theLinkUserProvider action
const mapDispatchToProps = (dispatch) => {
    return {
        theLinkUserProvider: (userInfo, theToken) => dispatch(theLinkUserProvider(userInfo, theToken)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(LinkUserProvider);