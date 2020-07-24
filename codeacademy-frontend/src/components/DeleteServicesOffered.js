import React from 'react';
import { Grid, Accordion, AccordionSummary, AccordionDetails, Typography, Container, ListItem, ListItemText } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

//delete services offered 
const DeleteServicesOffered = (props) => {

    // console.log(props.token);
    // console.log(props.deleteServicesOffered);
    // console.log(typeof props.deleteServicesOffered);

    // create deleted servicesoffered info jsx
    let theDeletedServicesOfferedInfo = [];
   
    if (typeof props.deleteServicesOffered === 'object') {
        theDeletedServicesOfferedInfo = <div><Container>
            <h4>The following Services Offered has been added:</h4>
            <ListItem><ListItemText primary={`Id: ${props.deleteServicesOffered._id}`}/></ListItem>
            <ListItem><ListItemText primary={`Avaliable Beds: ${props.deleteServicesOffered.AvaliableBeds}`}/></ListItem>
            <ListItem><ListItemText primary={`Total Beds: ${props.deleteServicesOffered.TotalBeds}`}/></ListItem>
            <ListItem><ListItemText primary={`Volunteer Opportunities: ${props.deleteServicesOffered.VolunteerOpportunities}`}/></ListItem>
            <ListItem><ListItemText primary={`Volunteers Needed: ${props.deleteServicesOffered.VolunteersNeeded}`} /></ListItem>
            <ListItem><ListItemText primary={`Service Type: ${props.deleteServicesOffered.ServiceType}`}/></ListItem>
            <ListItem><ListItemText primary={`Services Description: ${props.deleteServicesOffered.ServicesDescription}`} /></ListItem>
            <ListItem><ListItemText primary={`Criteria For Service: ${props.deleteServicesOffered.CriteriaForService}`} /></ListItem>
            <ListItem><ListItemText primary={`Warming Station: ${props.deleteServicesOffered.WarmingStation}`} /></ListItem>
            <ListItem><ListItemText primary={`Change Date and Time:  ${props.deleteServicesOffered.ChangedDateTime}`} /></ListItem>
        </Container>
        </div>
    }


    return <div>
        {/**build according for Delete Services Offered */}
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >                    <div >
                    <Typography variant="h6">Delete Services Offered Profile</Typography>
                </div>
            </AccordionSummary>
            <AccordionDetails>
                {/**create form data that is needed for new user */}
                <form onSubmit={(e) => props.theDeleteServiceOffered(e, props.token)} >
                    <Grid container direction='row'>
                        <Grid item><input type="text" placeholder="Services Offered Id" name="servicesofferedid" required /></Grid>
                        <Grid item><input type="submit" value="Click to delete Services Offered profile" /></Grid>
                    </Grid>
                </form>
                
            </AccordionDetails>
            {/**display deleted services offered info */}
            {theDeletedServicesOfferedInfo}
        </Accordion>
    </div>;

}

export default DeleteServicesOffered;