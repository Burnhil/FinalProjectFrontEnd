import { connect } from 'react-redux';
import GetAllBedTransactionsById from '../components/GetAllBedTransactionsById.js';
import { theGetBedtransactionById } from '../redux/actions.js'

//letting getBedTransactionById see state items
const mapStateToProps = (state) => {
    return {
        token: state.token,
        getAllBedTransactionsById: state.getAllBedTransactionsById,      
    }
}

//letting  getBedTransactionById see action
const mapDispatchToProps = (dispatch) => {
    return {
        theGetBedtransactionById: (userInfo, theToken) => dispatch(theGetBedtransactionById(userInfo, theToken)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(GetAllBedTransactionsById);