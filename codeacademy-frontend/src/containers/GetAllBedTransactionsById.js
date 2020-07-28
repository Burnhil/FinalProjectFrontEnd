import { connect } from 'react-redux';
import GetAllBedTransactionsById from '../components/GetAllBedTransactionsById.js';
import { theGetBedtransactionById } from '../redux/actions.js'

//letting getAllBedTransactionById see state items
const mapStateToProps = (state) => {
    return {
        token: state.token,
        getAllBedTransactionsById: state.getAllBedTransactionsById,      
    }
}

//letting  getAllBedTransactionById see action
const mapDispatchToProps = (dispatch) => {
    return {
        theGetBedtransactionById: (userInfo, theToken) => dispatch(theGetBedtransactionById(userInfo, theToken)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(GetAllBedTransactionsById);