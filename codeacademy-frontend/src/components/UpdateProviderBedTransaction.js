import React, { Component } from 'react';
import { Grid, Accordion, AccordionSummary, AccordionDetails, Typography, Container, ListItem, ListItemText } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

//add provider info
class UpdateProviderBedTransaction extends Component {

    //set constructor to store state
    constructor(props) {
        super(props);
        //store state variables needed through class
        this.state = {
            theToken: this.props.token,
            updateProviderInfo: null,
            theAvaliableBeds: "",
            theUpdatedServiceDoc: "",
            theProviderDocId: "",

        }
    }

    //function to call fetch to store bed transaction
    updateBedTransaction = () => {

        let token = this.props.token;
        //grab the middle part of the token.
        let authData = token.split('.')[1];
        // JWTs are base64 encoded, so decode it.
        let decodedAuthData = atob(authData);
        // the decoded data should be a JSON object, so parse it as such.
        let decodedAuthDataJSON = JSON.parse(decodedAuthData);
        //console.log(decodedAuthDataJSON);

        //create json to send to bedtransaction
        let credentialsBedTransaction = {
            UpdatedBedCount: this.state.theAvaliableBeds,
            UpdatingUserID: decodedAuthDataJSON._Id,
            UpdatingProviderID: this.state.theProviderDocId,
            UpdatingServiceID: this.state.theUpdatedServiceDoc._id,
        }

        //console.log(credentialsBedTransaction);
        //call endpoint
        fetch("http://localhost:3000/bedtransactions", {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + token, // this is how you pass the JWT to an endpoint needing authoriztion.
            },
            body: JSON.stringify(credentialsBedTransaction),
        })
            .then(response => response.json())
            .then(bedTransaction => {
                //testing to console for success
                //console.log(bedTransaction);

            });
    }

    // function to update services for provider
    updateProviderBedInfo = (e) => {
        //set the token for fetch
        let token = this.state.theToken;
        //console.log(token);
        e.preventDefault();

        //console.log(beds);
        //store availiabe beds for bedtransaction
        this.setState({
            theAvaliableBeds: e.target.avaliablebeds.value,
        },
            () => {
                console.log("The state's bed value is now: " + this.state.theAvaliableBeds);
            });

        // create credentials to be passed to database to be changed
        let credentials = {

        }

        //add each item to credentials if needed
        if (e.target.totalbeds.value !== 'null') {
            credentials.TotalBeds = e.target.totalbeds.value;
        }
        if (e.target.volunteeropportunities.value !== 'null') {
            credentials.VolunteerOpportunities = e.target.volunteeropportunities.value;
        }
        if (e.target.volunteersneeded.value !== 'null') {
            credentials.VolunteersNeeded = e.target.volunteersneeded.value;
        }
        if (e.target.servicetype.value !== 'null') {
            credentials.ServiceType = e.target.servicetype.value;
        }
        if (e.target.servicedescription.value !== 'null') {
            credentials.ServicesDescription = e.target.servicedescription.value;
        }
        if (e.target.criteriaforservice.value !== 'null') {
            credentials.CriteriaForService = e.target.criteriaforservice.value;
        }
        if (e.target.warmingstation.value !== 'null') {
            credentials.WarmingStation = e.target.warmingstation.value;
        }

        //console.log(credentials)

        

        //pull service offered id to be updated/changed
        let servicesOfferedIdToChange = e.target.serviceofferedid.value;
        //set endpoint to be called for fetch
        let updateEndpointURL = "http://localhost:3000/servicesoffered/" + servicesOfferedIdToChange;

        //clear user fields
        e.target.avaliablebeds.value = "";
        e.target.totalbeds.value = "";
        e.target.volunteeropportunities.value = "";
        e.target.volunteersneeded.value = "";
        e.target.servicetype.value = "";
        e.target.servicedescription.value = "";
        e.target.criteriaforservice.value = "";
        e.target.warmingstation.value = "";
        e.target.serviceofferedid.value = "";

        //set up to call fetch to make changes to provider services information
        fetch(updateEndpointURL, {
            method: 'put',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + token, // this is how you pass the JWT to an endpoint needing authoriztion.
            },
            body: JSON.stringify(credentials),
        })
            .then(response => response.json())
            .then(theDoc => {

                //set the services changed doc into state for display/ also stored provider id to be used in bed transaction 
                this.setState({
                    theUpdatedServiceDoc: theDoc.updatedServicesOfferedDoc,
                    theProviderDocId: theDoc.updatedServicesOfferedDoc.ProviderID[0],
                },
                    () => {
                        console.log("The state's updated service doc " + this.state.theUpdatedServiceDoc);
                        //console.log(this.state.theUpdatedServiceDoc);
                    });
            });
    }

    render() {

        //testing for all varialbes needed
        //console.log(this.state.theUpdatedServiceDoc);
        // console.log("the bed count to be updated");
        // console.log(this.state.theAvaliableBeds);
        // console.log("the token to use to get the userid ");
        // console.log(this.props.token);
        // console.log("the providerid ");
        // console.log(this.state.theProviderDocId);
        // console.log("the service offered id");
        // console.log(this.state.theUpdatedServiceDoc._id);


        //call update bed transaction only if we have bed count to update pass in new avaliable beds/providerid/serviceofferedid
        if (this.state.theAvaliableBeds >= 0) {
            this.updateBedTransaction();
        }

        //set up jsx to be displayed 
        let theUpdateServicesOfferedInfo = []; 

        //test if theUpdateServicesOfferedInfo is availiable
        if (typeof this.state.theUpdatedServiceDoc === 'object') {
            //store bed count 
            let currentAvaliableBedCount = this.state.theUpdatedServiceDoc.AvaliableBeds;
            //check bed count to see if it changed if so show correct count
            if(this.state.theAvaliableBeds >= 0) {
                currentAvaliableBedCount = this.state.theAvaliableBeds;
            }
            //create jsw list
            theUpdateServicesOfferedInfo = <div><Container>
                <h4>The following Services Offered has been added:</h4>
                <ListItem><ListItemText primary={`Id: ${currentAvaliableBedCount}`} /></ListItem>
                <ListItem><ListItemText primary={`Avaliable Beds: ${this.state.theUpdatedServiceDoc.AvaliableBeds}`} /></ListItem>
                <ListItem><ListItemText primary={`Total Beds: ${this.state.theUpdatedServiceDoc.TotalBeds}`} /></ListItem>
                <ListItem><ListItemText primary={`Volunteer Opportunities: ${this.state.theUpdatedServiceDoc.VolunteerOpportunities}`} /></ListItem>
                <ListItem><ListItemText primary={`Volunteers Needed: ${this.state.theUpdatedServiceDoc.VolunteersNeeded}`} /></ListItem>
                <ListItem><ListItemText primary={`Service Type: ${this.state.theUpdatedServiceDoc.ServiceType}`} /></ListItem>
                <ListItem><ListItemText primary={`Services Description: ${this.state.theUpdatedServiceDoc.ServicesDescription}`} /></ListItem>
                <ListItem><ListItemText primary={`Criteria For Service: ${this.state.theUpdatedServiceDoc.CriteriaForService}`} /></ListItem>
                <ListItem><ListItemText primary={`Warming Station: ${this.state.theUpdatedServiceDoc.WarmingStation}`} /></ListItem>
                <ListItem><ListItemText primary={`Change Date and Time:  ${this.state.theUpdatedServiceDoc.ChangedDateTime}`} /></ListItem>
            </Container>
            </div>
        }


        return <div>
            {/**create accordian for updated services for providers */}
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >                    <div >
                        <Typography variant="h6">Update Services Offered Information </Typography>
                    </div>
                </AccordionSummary>
                <AccordionDetails>

                    {/**create text fields and buttons needed */}
                    <form onSubmit={this.updateProviderBedInfo} >

                        <h5>Service Offered Id is required insert null for any other fields not being changed</h5>
                        <Grid container direction='row'>
                            <Grid item><input type="text" placeholder="Avaliable Beds" name="avaliablebeds" required /></Grid>
                            <Grid item><input type="text" placeholder="Total Beds" name="totalbeds" required /></Grid>
                            <Grid item><input type="text" placeholder="Volunteer Opportunities" name="volunteeropportunities" required /></Grid>
                            <Grid item><input type="text" placeholder="Volunteers Needed" name="volunteersneeded" required /></Grid>
                            <Grid item><input type="text" placeholder="Service Type" name="servicetype" required /></Grid>
                            <Grid item><input type="text" placeholder="Service Description" name="servicedescription" required /></Grid>
                            <Grid item><input type="text" placeholder="Criteria for Service" name="criteriaforservice" required /></Grid>
                            <Grid item><input type="text" placeholder="Warming Station" name="warmingstation" required /></Grid>
                            <Grid item><input type="text" placeholder="Services Offered Id" name="serviceofferedid" required /></Grid>
                            <Grid item><input type="submit" value="Click to Update Service Offered" /></Grid>
                        </Grid>
                    </form>


                </AccordionDetails>
                {/**display updated services offered */}
                {theUpdateServicesOfferedInfo}
            </Accordion>
        </div>
    }
}

export default UpdateProviderBedTransaction;