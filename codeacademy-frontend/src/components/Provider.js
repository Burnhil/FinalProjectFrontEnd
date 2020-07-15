import React, { Component } from 'react';

class Provider extends Component {

    constructor(props) {
        super(props);

        this.state = {
            ProviderInfo: [],
            ServiceInfo: [],
           
        }
    }


    componentDidMount() {
        fetch("http://localhost:3000/providers", {
            // method: 'post',
            // headers: {
            //   'Accept': 'application/json',
            //   'Content-Type': 'application/json'
            // },
            // body: JSON.stringify(credentials),
        })
            .then((response) => response.json())
            .then((theData) => {
                // console.log(theData);
                // console.log(`the data is = ${theData[0].TheServicesOfferedId[0]}`)
                let secondURL = "http://localhost:3000/servicesoffered/" + theData[0].TheServicesOfferedId[0];

                fetch(secondURL)
                .then((responseToAdd) => responseToAdd.json())
                .then(theSecondData => {
                    //console.log(`theseconddata = ${theSecondData}`);            
                    this.setState ({
                        ProviderInfo: theData,
                        ServiceInfo: theSecondData,
                    }, () => {
                    
                        console.log(this.state.ProviderInfo)
                        console.log(this.state.ServiceInfo)
                       
                    })
                    
                })
            
            });



            // fetch("http://localhost:3000/providers", {
            //     // method: 'post',
            //     // headers: {
            //     //   'Accept': 'application/json',
            //     //   'Content-Type': 'application/json'
            //     // },
            //     // body: JSON.stringify(credentials),
            // })
            //     .then((response) => response.json())
            //     .then((theData) => {
    
            //         //*****************************do the second call back here */
            //         console.log(`The data from loggin in is  ${theData}`);
            //         //based on this API's successful authentication, there should be a toekn field in the returned
            //         //JSON object.  Use that field to update the state's JWT field
            //         this.setState({
            //             ProviderInfo: theData,
            //         }, () => {
            //             console.log(this.state.ProviderInfo);
            //             //get service offered id
            //             console.log(this.state.ProviderInfo[0].TheServicesOfferedId[0]);
                        
            //         });
            //     });
    }

    

    render() {
        

        
        
        if (this.state.ProviderInfo !== null) {
            let displayProviders = [];
            for (let i = 0; i < this.state.ProviderInfo.length; i++) {     
                displayProviders.push(<li>{this.state.ProviderInfo[i].OrganizationName}</li>);
            }

            //console.log(displayProviders.length);
            
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