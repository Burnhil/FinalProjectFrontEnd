import React from 'react';
import { Grid, Accordion, AccordionSummary, AccordionDetails, Typography, ListItemText, ListItem, Container } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

//add provider info
const AddProviderInfo = (props) => {

    // console.log(props.token);
    //console.log(props.addProviderInfo);
    // console.log(typeof props.addProviderInfo);
 
    //create jsx for adding provider information
    let theAddProviderInfo = [];

    //test if addproviderinfo is availiable
    if (typeof props.addProviderInfo === 'object') {
        theAddProviderInfo = <div><Container>
            <h4>The following Provider has been added:</h4>
            <ListItem><ListItemText primary={`Id: ${props.addProviderInfo._id}`}/></ListItem>
            <ListItem><ListItemText primary={`Organization: ${props.addProviderInfo.OrganizationName}`}/></ListItem>
            <ListItem><ListItemText primary={`Addrres: ${props.addProviderInfo.Address}`}/></ListItem>
            <ListItem><ListItemText primary={`City: ${props.addProviderInfo.City}`} /></ListItem>
            <ListItem><ListItemText primary={`State: ${props.addProviderInfo.State}`}/></ListItem>
            <ListItem><ListItemText primary={`County: ${props.addProviderInfo.County}`} /></ListItem>
            <ListItem><ListItemText primary={`Email: ${props.addProviderInfo.Email}`} /></ListItem>
            <ListItem><ListItemText primary={`Website" ${props.addProviderInfo.WebsiteInfo}`} /></ListItem>
            <ListItem><ListItemText primary={`Phone Number: ${props.addProviderInfo.PhoneNumber}`} /></ListItem>
        </Container>
        </div>
    }


    return <div>
        {/**create accordian for addproviderinfo */}
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >                    <div >
                    <Typography variant="h6">Add Provider Info</Typography>
                </div>
            </AccordionSummary>
            <AccordionDetails>

                {/**create text fields and buttons needed */}
                <form onSubmit={(e) => props.theAddProviderInfo(e, props.token)} >

                    <Grid container direction='row'>
                        <Grid item><input type="text" placeholder="OrganizationName" name="organizationname" required /></Grid>
                        <Grid item><input type="text" placeholder="Email" name="email" required /></Grid>
                        <Grid item><input type="text" placeholder="WebsiteInfo" name="websiteinfo" required /></Grid>
                        <Grid item><input type="text" placeholder="PhoneNumber" name="phonenumber" required /></Grid>
                        <Grid item><input type="text" placeholder="Address" name="address" required /></Grid>
                        <Grid item><input type="text" placeholder="City" name="city" required /></Grid>
                        <Grid item><input type="text" placeholder="State" name="state" required /></Grid>
                        <Grid item><input type="text" placeholder="County" name="county" required /></Grid>
                        <Grid item><input type="submit" value="Click to add Provider Profile" /></Grid>
                    </Grid>
                </form>


            </AccordionDetails>
            {/**display added provider information */}
            {theAddProviderInfo}
        </Accordion>
    </div>;

}

export default AddProviderInfo;