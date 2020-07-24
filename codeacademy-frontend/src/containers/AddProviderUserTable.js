import { connect } from 'react-redux';
import AddProviderUserTable from '../components/AddProviderUserTable';
import { theProviderUserTable } from '../redux/actions.js'

//letting AddProviderUserTable access see state items
const mapStateToProps = (state) => {
    return {
        token: state.token,
        linkProviderUser: state.linkProviderUser,      
    }
}

//letting AddProviderUserTable action be availiable
const mapDispatchToProps = (dispatch) => {
    return {
        theProviderUserTable: (userInfo, theToken) => dispatch(theProviderUserTable(userInfo, theToken)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AddProviderUserTable);