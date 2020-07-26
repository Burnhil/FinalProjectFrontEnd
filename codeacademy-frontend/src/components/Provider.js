import React, { Component } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

class Provider extends Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {


        if (this.props.providerServiceInfo.length === 0) {
            this.props.setProviderInfo();
            this.props.setServiceInfo();
            this.props.setProviderServiceInfo();
        }
        //console.log(this.props.providerInfo);
        //console.log(this.props.serviceInfo);
        //console.log(this.props.providerServiceInfo);

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
                        <div ><Typography>
                            <Typography variant="h6">{this.props.providerServiceInfo[i].OrganizationName} </Typography>
                            <Typography  >Beds Avaliable: {this.props.providerServiceInfo[i].AvaliableBeds}</Typography>
                            <Typography>Warming Station: {this.props.providerServiceInfo[i].WarmingStation}</Typography>
                            </Typography>
                        </div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography align="left">
                            <h5>Contact Info:</h5>
                            <Typography>Phone Number: {this.props.providerServiceInfo[i].PhoneNumber}</Typography>
                            <Typography>Address: {this.props.providerServiceInfo[i].Address}</Typography>
                            <Typography>Email: {this.props.providerServiceInfo[i].Email}</Typography>
                            <Typography>Service Type: {this.props.providerServiceInfo[i].ServiceType}</Typography>
                            <Typography>Service Description: {this.props.providerServiceInfo[i].ServicesDescription}</Typography>
                            <Typography>Volunteers Needed: {this.props.providerServiceInfo[i].VolunteersNeeded}</Typography>
                      
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