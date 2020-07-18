//AIzaSyC03xAOArUvlMPQBmb5it9WZfpbIDxww4E

import React from 'react';
import{ GoogleMap, withGoogleMap, withScriptjs, Marker, InfoWindow } from 'react-google-maps';


var x = document.getElementById("demo");


//trying to locate browser to place on map
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    alert("Geolocation is not supported by this browser.");
  }
}

function showPosition(position) {
    console.log(position);
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
}


const theMap = () => {

    let testData = {
        home: "City Hall",
        homelat: 35.20754766,
        homelng: -101.83036566
    }

    let location = getLocation();
    console.log(location);

    return (
        <GoogleMap defaultZoom={15} 
        defaultCenter={{lat:35.207008, lng: -101.832008}}>

        <Marker key={testData.house} position={{lat: testData.homelat, lng: testData.homelng}} 
                

        />
        <Marker>{getLocation()}</Marker>
        </GoogleMap>
    )
}

const MapWrapped = withScriptjs(withGoogleMap(theMap));

const Map = () => {
    return(
        <div style={{width: '55vw', height: '75vh'}}>
            <MapWrapped googleMapURL={'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key= '}
            loadingElement={<div style={{ height: "100%"}} />}
            containerElement={<div style={{ height: "100%"}} />}
            mapElement={<div style={{ height: "100%"}} />}
            />
        </div>
    )
}

export default Map;
