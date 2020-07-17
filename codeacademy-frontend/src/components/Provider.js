import React, { Component } from 'react';
import { setProviderInfo } from '../redux/actions';

class Provider extends Component {

    constructor(props) {
        super(props);

        this.state = {
            // ProviderInfo: [],
            // ServiceInfo: [],
            CombinedInfo: [],
        }
    }


    // componentDidMount() {
    //     fetch("http://localhost:3000/providers", {
    //         // method: 'post',
    //         // headers: {
    //         //   'Accept': 'application/json',
    //         //   'Content-Type': 'application/json'
    //         // },
    //         // body: JSON.stringify(credentials),
    //     })
    //         .then((response) => response.json())
    //         .then((theData) => {
    //             // console.log(theData);
    //             // console.log(`the data is = ${theData[0].TheServicesOfferedId[0]}`)
    //             //testing.....
    //             //let secondURL = "http://localhost:3000/servicesoffered/" + theData[0].TheServicesOfferedId[0];
    //             let secondURL = "http://localhost:3000/servicesoffered/";

    //             fetch(secondURL)
    //             .then((responseToAdd) => responseToAdd.json())
    //             .then(theSecondData => {
    //                 //console.log(`theseconddata = ${theSecondData}`);            
    //                 this.setState ({
    //                     ProviderInfo: theData,
    //                     ServiceInfo: theSecondData,
    //                 }, () => {
                    
    //                     // console.log(`this is the providerinfo = ${this.state.ProviderInfo}`)
    //                     // console.log(this.state.ProviderInfo)
    //                     // console.log(` this is the serviceinfo = ${this.state.ServiceInfo}`)
    //                     // console.log(this.state.ServiceInfo)


                
    //                     console.log("this is the combined info")
    //                     console.log(this.state.CombinedInfo)
                       
    //                 })
                    
    //             })
            
    //         });



    //         // fetch("http://localhost:3000/providers", {
    //         //     // method: 'post',
    //         //     // headers: {
    //         //     //   'Accept': 'application/json',
    //         //     //   'Content-Type': 'application/json'
    //         //     // },
    //         //     // body: JSON.stringify(credentials),
    //         // })
    //         //     .then((response) => response.json())
    //         //     .then((theData) => {
    
    //         //         //*****************************do the second call back here */
    //         //         console.log(`The data from loggin in is  ${theData}`);
    //         //         //based on this API's successful authentication, there should be a toekn field in the returned
    //         //         //JSON object.  Use that field to update the state's JWT field
    //         //         this.setState({
    //         //             ProviderInfo: theData,
    //         //         }, () => {
    //         //             console.log(this.state.ProviderInfo);
    //         //             //get service offered id
    //         //             console.log(this.state.ProviderInfo[0].TheServicesOfferedId[0]);
                        
    //         //         });
    //         //     });
    // }

    

    render() {

        setProviderInfo();
        console.log(this.props.ProviderInfo);

        //combine the providerinfo and serviceoffered 
        for(let k = 0; k<this.state.ProviderInfo.length; k++) {
            console.log(this.state.ProviderInfo)
            for(let i = 0; i<this.state.ServiceInfo.length; i++){
                // console.log("we are here");
                 console.log(this.state.ServiceInfo[i]);
                 if(this.state.ProviderInfo[k].TheServicesOfferedId[0] === this.state.ServiceInfo[i]._id){
                    console.log("we have a match yeah")
                    console.log(`this is the provider = ${this.state.ProviderInfo[k].TheServicesOfferedId[0]} this is the serviceoffered = ${this.state.ServiceInfo[i]._id}`)
                 
                    this.state.CombinedInfo[k] = {
                        OrganizationName: this.state.ProviderInfo[k].OrganizationName,
                        AvaliableBeds: this.state.ServiceInfo[i].AvaliableBeds,
                    }
                }
            }
        }
        
        //create the data to be displayed
        if (this.state.CombinedInfo !== null) {
            let displayProviders = [];
            console.log(`combined array = ${this.state.CombinedInfo.length}`)
            for (let i = 0; i < this.state.CombinedInfo.length; i++) {    
                console.log("inside provider info"); 
                displayProviders.push(<li>Organization: {this.state.CombinedInfo[i].OrganizationName} 
                                    Avaliable Beds: {this.state.CombinedInfo[i].AvaliableBeds}</li>);
            }
            
            return (
                <div>
                    <h4>This is Provider info to diplay</h4>
                    <ul> {displayProviders}</ul>
                </div>
            )
        }
    }

}

export default Provider;