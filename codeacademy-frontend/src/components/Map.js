//AIzaSyC03xAOArUvlMPQBmb5it9WZfpbIDxww4E

import React from 'react';
import{ GoogleMap, withGoogleMap, withScriptjs, Marker, InfoWindow } from 'react-google-maps';





const theMap = () => {

    let testData = {
        home: "City Hall",
        homelat: 35.20754766,
        homelng: -101.83036566
    }

    return (
        <GoogleMap defaultZoom={15} 
        defaultCenter={{lat:35.207008, lng: -101.832008}}>

        <Marker key={testData.house} position={{lat: testData.homelat, lng: testData.homelng}} 

        />
        </GoogleMap>
    )
}

const MapWrapped = withScriptjs(withGoogleMap(theMap));

const Map = () => {
    return(
        <div style={{width: '100vw', height: '100vh'}}>
            <MapWrapped googleMapURL={'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyC03xAOArUvlMPQBmb5it9WZfpbIDxww4E'}
            loadingElement={<div style={{ height: "100%"}} />}
            containerElement={<div style={{ height: "100%"}} />}
            mapElement={<div style={{ height: "100%"}} />}
            />
        </div>
    )
}

export default Map;