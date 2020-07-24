import { connect } from 'react-redux';
import GetAllBedTransactions from '../components/GetAllBedTransactions.js';
import { theGetBedtransaction } from '../redux/actions.js'

//letting getBedTransaction see state items
const mapStateToProps = (state) => {
    return {
        token: state.token,
        getBedTransaction: state.getBedTransaction,      
    }
}

//letting change getBedTransaction action
const mapDispatchToProps = (dispatch) => {
    return {
        theGetBedtransaction: (userInfo, theToken) => dispatch(theGetBedtransaction(userInfo, theToken)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(GetAllBedTransactions);