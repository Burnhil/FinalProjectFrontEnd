

import React from 'react';
import { GoogleMap, withGoogleMap, withScriptjs, Marker, InfoWindow } from 'react-google-maps';
import Geocode from "react-geocode";


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

    //console.log(`this is theMap const ${this.props.providerServiceInfo}`)

    let testData = {
        home: "City Hall",
        homelat: null,
        homelng: null
    }

    let location = getLocation();
    console.log(location);


    //unable to use address to lat/lng conversion without key
    Geocode.setApiKey();
    

    Geocode.fromAddress("14301 ortega Amarillo, Texas").then(
        response => {
          const { lat, lng } = response.results[0].geometry.location;
          console.log(" here is the possible conversion****************" + lat, lng);
          testData.homelat = lat;
          testData.homelng = lng;
        },
        error => {
          console.error(error);
        }
      );

      let mapInfo = (<GoogleMap defaultZoom={15}
        defaultCenter={{ lat: 35.207008, lng: -101.832008 }}>

        <Marker key={testData.house} position={{ lat: testData.homelat, lng: testData.homelng }}


        />
        <Marker>{getLocation()}</Marker>
    </GoogleMap>);

    return (
    <div>{mapInfo}</div>
    )
}

const MapWrapped = withScriptjs(withGoogleMap(theMap));

const Map = () => {
    
    return (
        <div style={{ width: '55vw', height: '75vh' }}>
            <MapWrapped googleMapURL={'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key= '}
                loadingElement={<div style={{ height: "100%" }} />}
                containerElement={<div style={{ height: "100%" }} />}
                mapElement={<div style={{ height: "100%" }} />}
            />
        </div>
    )
}

export default Map;
