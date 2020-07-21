
import React, { useEffect, useState } from 'react';
import { GoogleMap, withGoogleMap, withScriptjs, Marker, InfoWindow } from 'react-google-maps';
import Geocode from "react-geocode";




//trying to locate browser to place on map
// function getLocation() {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(showPosition);
//     } else {
//         alert("Geolocation is not supported by this browser.");
//     }
// }

// function showPosition(position) {
//     console.log(position);
//     console.log(position.coords.latitude);
//     console.log(position.coords.longitude);
// }




const TheMap = (props) => {

    //console.log(`this is theMap const ${this.props.providerServiceInfo}`)
    // console.log("Inside theMap: " + JSON.stringify(props.providerServiceInfo));
    // console.log(`inside the map 1: ${props.providerServiceInfo}`);
    // console.log(props.providerServiceInfo);

    // let testData = {
    //     home: "City Hall",
    //     homelat: null,
    //     homelng: null
    // }

    let providerInfo = props.providerServiceInfo

    const[testData, setTestData] =  useState ({
        home: "City Hall",
        homelat: null,
        homelng: null,
        providers: []
    });

    // let location = getLocation();
    // console.log(location);


    //unable to use address to lat/lng conversion without key
    Geocode.setApiKey();


    useEffect(() => {
        //equivalent to componnendDidMount()
        // let response =  Geocode.fromAddress("14301 ortega Amarillo, Texas");
        // console.log(response);
        //console.log("inside useeffect***************************")

        // let tempProviderInfo = providerInfo;
        // console.log(`this is the temp providerInfo = ${tempProviderInfo}`);
        // console.log(tempProviderInfo);
        // console.log(tempProviderInfo.Address)

        for(let i = 0; i < providerInfo.length; i++) {

            console.log("inside for loop!!!!!!!!!!!!!!!!!!!!!!");
            console.log(providerInfo);
            console.log(`Provider Info inside loop for address = ${providerInfo.Address}`);
            let address = providerInfo.Address;
            console.log(address);
        
            

        // Geocode.fromAddress("14301 ortega Amarillo, Texas").then(
        //     response => {
        //         const { lat, lng } = response.results[0].geometry.location;
        //         //console.log(" here is the possible conversion****************" + lat, lng);
        //         // testData.homelat = lat;
        //         // testData.homelng = lng;
        //         let data = {
        //             homelat: lat,
        //             homelng: lng,
        //             //providers: testData.providers.push(providerInfo[i])
        //         }
        //         setTestData(data);
        //     },
        //     error => {
        //         console.error(error);
        //         //console.log("//////////////////looking here for info///////")
        //     }
        // );
        }
    },[providerInfo, testData],[]);


    console.log(testData);

    let mapInfo = (<GoogleMap defaultZoom={15}
        defaultCenter={{ lat: 35.207008, lng: -101.832008 }}>

        {/* <Marker key={testData.house} position={{ lat: testData.homelat, lng: testData.homelng }} */}

{/* 
        /> */}
        {/* <Marker>{getLocation()}</Marker> */}
    </GoogleMap>);

    return (
        <div>{mapInfo}</div>
    )
}

const MapWrapped = withScriptjs(withGoogleMap((props) => {
    //console.log(props.reduxProps.providerServiceInfo);
    return TheMap(props.reduxProps);
}));

const Map = (props) => {
   // console.log(`this is theMap const ${props.providerServiceInfo}`);

    return (
        <div style={{ width: '55vw', height: '75vh' }}>
            <MapWrapped googleMapURL={'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key= '}
                loadingElement={<div style={{ height: "100%" }} />}
                containerElement={<div style={{ height: "100%" }} />}
                mapElement={<div style={{ height: "100%" }} />}
                reduxProps={props}
            />
        </div>
    )
}

export default Map;
