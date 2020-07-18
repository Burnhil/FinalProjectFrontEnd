import React, { Component } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, GridList } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

class Provider extends Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {


        if (this.props.providerServiceInfo.length == 0) {
            this.props.setProviderInfo();
            this.props.setServiceInfo();
            this.props.setProviderServiceInfo();
        }
        //console.log(this.props.providerInfo);
        //console.log(this.props.serviceInfo);
        console.log(this.props.providerServiceInfo);

        if (this.props.providerServiceInfo !== null) {
            let displayProviders2 = [];
            //console.log(`combined array = ${this.props.providerServiceInfo.length}`)
            for (let i = 0; i < this.props.providerServiceInfo.length; i++) {
                //console.log("inside provider info"); 
                displayProviders2.push(<Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <div >
                            <Typography variant="h6">{this.props.providerServiceInfo[i].OrganizationName} </Typography>
                       <li><Typography  >Beds Avaliable: {this.props.providerServiceInfo[i].AvaliableBeds}</Typography></li>
                       <li><Typography>Warming Station: {this.props.providerServiceInfo[i].WarmingStation}</Typography></li>
                            
                            </div>
                    
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <h5>Contact Info:</h5>
                            <ul>
                            <li>Phone Number:{this.props.providerServiceInfo[i].PhoneNumber}</li>
                                <li>Address: {this.props.providerServiceInfo[i].Address}</li>
                                <li>Email: {this.props.providerServiceInfo[i].Email}</li>
                                <li>Service Type:{this.props.providerServiceInfo[i].ServiceType}</li>
                                <li>Service Description{this.props.providerServiceInfo[i].ServiceDescription}</li>
                                <li>Volunteers Needed: {this.props.providerServiceInfo[i].VolunteersNeeded}</li>
                            </ul>

                        </Typography>
                    </AccordionDetails>
                </Accordion>);
            }
            


            return (
                <div>
                    <h4>Current Organizations helping out the community.</h4>
                    <ul>{displayProviders2}</ul>
                </div>
            )
        }
    }

}

export default Provider;