import { connect } from 'react-redux';
import BedTransaction from '../components/BedTransaction.js';
import { theBedTransaction } from '../redux/actions.js'

//letting bed transaction access see state items
const mapStateToProps = (state) => {
    return {
        token: state.token,
        addBedTransaction: state.addBedTransaction,      
    }
}

//letting bed transaction action be availiable
const mapDispatchToProps = (dispatch) => {
    return {
        theBedTransaction: (userInfo, theToken) => dispatch(theBedTransaction(userInfo, theToken)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(BedTransaction);