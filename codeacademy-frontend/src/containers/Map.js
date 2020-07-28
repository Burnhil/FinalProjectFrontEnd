import { connect } from 'react-redux';
import Map from '../components/Map.js'


// set state items for map to see
const mapStateToProps = (state) => {
    return {
  
        providerServiceInfo: state.providerServiceInfo,
    }
}


export default connect(mapStateToProps)(Map);