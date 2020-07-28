import React from 'react';
import { Grid, Accordion, AccordionSummary, AccordionDetails, Typography, Container, ListItemText, ListItem } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

//update services offered
const UpdateServicesOffered = (props) => {

    // testing information to console
    // console.log(props.token);
     //console.log(props.updateServicesOfferedInfo);
    // console.log(typeof props.updateServicesOfferedInfo);

    //create jsx for updating updateServicesOfferedInfo information
    let theUpdateServicesOfferedInfo = [];

    //test if theUpdateServicesOfferedInfo is availiable
    if (typeof props.updateServicesOfferedInfo === 'object') {
        console.log(props.updateServicesOfferedInfo.ProviderID)
        theUpdateServicesOfferedInfo = <div><Container>
            <h4>The following Services Offered has been added:</h4>
            <ListItem><ListItemText primary={`Id: ${props.updateServicesOfferedInfo._id}`}/></ListItem>
            <ListItem><ListItemText primary={`Avaliable Beds: ${props.updateServicesOfferedInfo.AvaliableBeds}`}/></ListItem>
            <ListItem><ListItemText primary={`Total Beds: ${props.updateServicesOfferedInfo.TotalBeds}`}/></ListItem>
            <ListItem><ListItemText primary={`Volunteer Opportunities: ${props.updateServicesOfferedInfo.VolunteerOpportunities}`}/></ListItem>
            <ListItem><ListItemText primary={`Volunteers Needed: ${props.updateServicesOfferedInfo.VolunteersNeeded}`} /></ListItem>
            <ListItem><ListItemText primary={`Service Type: ${props.updateServicesOfferedInfo.ServiceType}`}/></ListItem>
            <ListItem><ListItemText primary={`Services Description: ${props.updateServicesOfferedInfo.ServicesDescription}`} /></ListItem>
            <ListItem><ListItemText primary={`Criteria For Service: ${props.updateServicesOfferedInfo.CriteriaForService}`} /></ListItem>
            <ListItem><ListItemText primary={`Warming Station: ${props.updateServicesOfferedInfo.WarmingStation}`} /></ListItem>
            <ListItem><ListItemText primary={`Change Date and Time:  ${props.updateServicesOfferedInfo.ChangedDateTime}`} /></ListItem>
        </Container>
        </div>
    }


    return <div>
        {/**create accordian for UpdateServicesOffered */}
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >                    <div >
                    <Typography variant="h6">Update Services Offered Information</Typography>
                </div>
            </AccordionSummary>
            <AccordionDetails>

                {/**create text fields and buttons needed to update services offered*/}
                <form onSubmit={(e) => {props.theUpdateServicesOffered(e, props.token)}} >
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
            {/**display updated services offered information */}
            {theUpdateServicesOfferedInfo}
        </Accordion>
    </div>;

}

export default UpdateServicesOffered;