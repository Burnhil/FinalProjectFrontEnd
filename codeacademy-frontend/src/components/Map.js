
import React, { useEffect, useState } from 'react';
import { GoogleMap, withGoogleMap, withScriptjs, Marker, InfoWindow } from 'react-google-maps';
import Geocode from "react-geocode";



const TheMap = (props) => {

    let providerInfo = props.providerServiceInfo

    const [testData, setTestData] = useState({
        home: "City Hall",
        homelat: null,
        homelng: null,
        providers: []
    });

    setTestData.providers = providerInfo;
    console.log(testData.providers);
    // let location = getLocation();
    // console.log(location);

    const onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    const onClose = (props) => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    };


    //unable to use address to lat/lng conversion without key
    Geocode.setApiKey("AIzaSyA3TCByfeoNvJ6xnJA7E1foMAeX5M3RhTA");

    let TestMarker = [];

    const theGeocode = () => {
        for (let i = 0; i < providerInfo.length; i++) {

            console.log("inside for loop!!!!!!!!!!!!!!!!!!!!!!");
            console.log(props);
            console.log(props.providerServiceInfo[i].OrganizationName);
            //console.log(providerInfo);
            //console.log(`Provider Info inside loop for address = ${providerInfo.Address}`);
            //let address = providerInfo.Address;
            //console.log(address);

            let eachAddress = props.providerServiceInfo[i].Address + " " + props.providerServiceInfo[i].City + "," + props.providerServiceInfo[i].State;
            console.log(eachAddress);

            Geocode.fromAddress("601 S Buchanan St, Amarillo, Texas").then(
                response => {
                    const { lat, lng } = response.results[0].geometry.location;
                    //console.log(" here is the possible conversion****************" + lat, lng);
                    // testData.homelat = lat;
                    // testData.homelng = lng;
                    let data = {
                        homelat: lat,
                        homelng: lng,
                        //providers: testData.providers.push(providerInfo[i])
                    }
                    // setTestData(data);
                    console.log(providerInfo);
                    console.log(data)
                    TestMarker[i] = <Marker key={testData.house} position={{ lat: testData.homelat, lng: testData.homelng }} />
                        
                },
                error => {
                    console.error(error);
                    //console.log("//////////////////looking here for info///////")
                }
            );
        }

    }

    useEffect(() => {
        theGeocode();
    },[]);


    let mapInfo = (<GoogleMap defaultZoom={15}
        defaultCenter={{ lat: 35.207008, lng: -101.832008 }}>

        <Marker key={testData.house} position={{ lat: 35.2069203, lng: -101.8311764 }} />
        <Marker key={testData.providers} position={{lat:35.20577686551703 , lng: -101.83548331260683}} />
        
        

        

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
            <MapWrapped googleMapURL={'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyA3TCByfeoNvJ6xnJA7E1foMAeX5M3RhTA'}
                loadingElement={<div style={{ height: "100%" }} />}
                containerElement={<div style={{ height: "100%" }} />}
                mapElement={<div style={{ height: "100%" }} />}
                reduxProps={props}
            />
        </div>
    )
}

export default Map;
