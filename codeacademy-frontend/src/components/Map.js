
import React, { useEffect, useState } from 'react';
import { GoogleMap, withGoogleMap, withScriptjs, Marker, MarkerWithLabel } from 'react-google-maps';
import Geocode from "react-geocode";

//create google map with markers to display to user from provider and services information
const TheMap = (props) => {

    //set providerInfo to be used
    let providerInfo = props.providerServiceInfo

    //set state variables
    const [testData, setTestData] = useState({
        home: "City Hall",
        homelat: null,
        homelng: null,
        providers: [],
        markers: [],
    });
    setTestData.providers = providerInfo;
    //console.log(testData.providers);


    //unable to use address to lat/lng conversion without key
    Geocode.setApiKey("api key removed will be needed for google geocode access");

    // use geocode to convert longitude to latitude
    const theGeocode = () => {
        //go through providerInfo array to convert each address to longitude an latitude
        for (let i = 0; i < providerInfo.length; i++) {
            //testing to console to verify information
            //console.log(props);
    //console.log(props.providerServiceInfo[i].OrganizationName);
            //console.log(providerInfo);
            //console.log(`Provider Info inside loop for address = ${providerInfo.Address}`);
            //let address = providerInfo.Address;
            //console.log(address);

            //create full address for each providerinfo
            let eachAddress = props.providerServiceInfo[i].Address + " " + props.providerServiceInfo[i].City + "," + props.providerServiceInfo[i].State;
    //console.log(eachAddress);

            //pass in eachaddress to convert
            Geocode.fromAddress(eachAddress).then(
                response => {
                    const { lat, lng } = response.results[0].geometry.location;
                    //console.log(" here is the possible conversion****************" + lat, lng);
                    // testData.homelat = lat;
                    // testData.homelng = lng;
                    let data = {
                        homelat: lat,
                        homelng: lng,
                    }
                    //testing info to console
                    //setTestData(data);
                    //console.log(providerInfo);

                    //add each longitude and latitude its providerinfo
            //console.log(data)
                    providerInfo[i].lat = data.homelat;
                    providerInfo[i].lng = data.homelng;
            //console.log(providerInfo);

                },
                error => {
                    console.error(error);
                }
            );
        }

    }
    //call theGeocode to convert address to longitude and latitude
    useEffect(() => {
        theGeocode();
    }, []);

    //create each marker to be placed on the map
    const generateMarker = () => {

        console.log(providerInfo);
        //set the markers array to store each marker
        // let markers = [];
        // markers[0] = <Marker key={testData.house} position={{ lat: 35.2069203, lng: -101.8311764 }} />;
        // markers[1] = <Marker key={testData.providers} position={{lat:35.20577686551703 , lng: -101.83548331260683}} />;
        for (let i = 0; i < providerInfo.length; i++) {
            // console.log(providerInfo[i].lat);
            // console.log(providerInfo[i].lng);
            //create each marker with organization name, longitude and latitude
            testData.markers[i] = <Marker title={providerInfo[i].OranaziationName} key={providerInfo[i].OranaziationName} position={{ lat: providerInfo[i].lat, lng: providerInfo[i].lng }} />;
        }
        //testing the markers are getting updated
        console.log(testData.markers)
        return testData.markers;
    }

    //create map with markers set default location for map and zoom
    const mapInfo = (<GoogleMap defaultZoom={13}
        defaultCenter={{ lat: 35.18727767598898, lng: -101.84875488281251 }}>

        {/** call the markers to be set on the page */}
        {/* {console.log(providerInfo)} */}
        {generateMarker()}
        
    </GoogleMap>);

    return (
        <div>{mapInfo}</div>
    )
}

//use MapWrapped to call TheMap to create markers for each provider
const MapWrapped = withScriptjs(withGoogleMap((props) => {
    //console.log(props.reduxProps.providerServiceInfo);
    return TheMap(props.reduxProps);
}));

const Map = (props) => {
    // console.log(`this is theMap const ${props.providerServiceInfo}`);

    //display map with height, width, and api key 
    return (
        <div className="mapLayout"  style={{ width: '53vw', height: '80vh' }}>
            <MapWrapped googleMapURL={'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key= (google api key removed will be needed to connect to google services)'}
                loadingElement={<div style={{ height: "100%" }} />}
                containerElement={<div style={{ height: "100%" }} />}
                mapElement={<div style={{ height: "100%" }} />}
                reduxProps={props}
            />
        </div>
    )
}

export default Map;
