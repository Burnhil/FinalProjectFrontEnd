import { connect } from 'react-redux';
import LinkProviderService from '../components/LinkProviderService.js';
import { theLinkProviderServices } from '../redux/actions.js'

//letting linkproviderservice see state items
const mapStateToProps = (state) => {
    return {
        token: state.token,
        linkProviderService: state.linkProviderService,      
    }
}

//letting link provider an service change through linkProviderService action
const mapDispatchToProps = (dispatch) => {
    return {
        theLinkProviderServices: (userInfo, theToken) => dispatch(theLinkProviderServices(userInfo, theToken)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(LinkProviderService);