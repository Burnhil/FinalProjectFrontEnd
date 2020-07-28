import React from 'react';
import { Grid, Accordion, AccordionSummary, AccordionDetails, Typography, ListItemText, ListItem, Container } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

//add provider info
const AddServicesOffered = (props) => {

    //testing code to console
    // console.log(props.token);
    // console.log(props.addServicesOffered);
    //console.log(typeof props.addServicesOffered);
 
    //create jsx for adding service offered information
    let theServicesOfferedDoc = [];

    //test if addServicesOffered is availiable
    if (typeof props.addServicesOffered === 'object') {
        theServicesOfferedDoc = <div><Container>
            <h4>The following Services Offered has been added:</h4>
            <ListItem><ListItemText primary={`Id: ${props.addServicesOffered._id}`}/></ListItem>
            <ListItem><ListItemText primary={`Avaliable Beds: ${props.addServicesOffered.AvaliableBeds}`}/></ListItem>
            <ListItem><ListItemText primary={`Total Beds: ${props.addServicesOffered.TotalBeds}`}/></ListItem>
            <ListItem><ListItemText primary={`Volunteer Opportunities: ${props.addServicesOffered.VolunteerOpportunities}`}/></ListItem>
            <ListItem><ListItemText primary={`Volunteers Needed: ${props.addServicesOffered.VolunteersNeeded}`} /></ListItem>
            <ListItem><ListItemText primary={`Service Type: ${props.addServicesOffered.ServiceType}`}/></ListItem>
            <ListItem><ListItemText primary={`Services Description: ${props.addServicesOffered.ServicesDescription}`} /></ListItem>
            <ListItem><ListItemText primary={`Criteria For Service: ${props.addServicesOffered.CriteriaForService}`} /></ListItem>
            <ListItem><ListItemText primary={`Warming Station: ${props.addServicesOffered.WarmingStation}`} /></ListItem>
        </Container>
        </div>
    }


    return <div>
        {/**create accordian for addservicesoffered */}
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >                    <div >
                    <Typography variant="h6">Add Services Offered Information</Typography>
                </div>
            </AccordionSummary>
            <AccordionDetails>

                {/**create text fields and buttons needed to add service offered jsx */}
                <form onSubmit={(e) => props.theAddServicesOffered(e, props.token)} >

                    <Grid container direction='row'>
                        <Grid item><input type="text" placeholder="Avaliable Beds" name="avaliablebeds" required /></Grid>
                        <Grid item><input type="text" placeholder="Total Beds" name="totalbeds" required /></Grid>
                        <Grid item><input type="text" placeholder="Volunteer Opportunities" name="volunteeropportunities" required /></Grid>
                        <Grid item><input type="text" placeholder="Volunteers Needed" name="volunteersneeded" required /></Grid>
                        <Grid item><input type="text" placeholder="Service Type" name="servicetype" required /></Grid>
                        <Grid item><input type="text" placeholder="Service Description" name="servicedescription" required /></Grid>
                        <Grid item><input type="text" placeholder="Criteria for Service" name="criteriaforservice" required /></Grid>
                        <Grid item><input type="text" placeholder="Warming Station" name="warmingstation" required /></Grid>
                        <Grid item><input type="submit" value="Click to add Services Offered" /></Grid>
                    </Grid>
                </form>


            </AccordionDetails>
            {/**display added services offered information */}
                {theServicesOfferedDoc}
        </Accordion>
    </div>;

}

export default AddServicesOffered;