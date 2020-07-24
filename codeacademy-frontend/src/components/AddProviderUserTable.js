import React from 'react';
import { Grid, Accordion, AccordionSummary, AccordionDetails, Typography, Container, ListItem, ListItemText } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

//link user and provider
const AddProviderUserTable = (props) => {

    // console.log(props.token);
    // console.log(props.linkProviderUser);
    // console.log(typeof props.linkProviderUser);

    // //build link provider user info to be displayed
    let addProviderUserTableJSX = [];
    //check to see if link provider user info and create jsx
    if(typeof props.linkProviderUser === 'object'){       
        addProviderUserTableJSX =<Container>
            <ListItem><ListItemText primary={`ID: ${props.linkProviderUser._id}`} /></ListItem>
            <ListItem><ListItemText primary={`User Id: ${props.linkProviderUser.UserId}`} /></ListItem>
            <ListItem><ListItemText primary={`Provider Id: ${props.linkProviderUser.ProviderId}`} /></ListItem>
        </Container>
    }

    return <div>
        {/**build accordian for link user provider information */}
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >                    <div >
                    <Typography variant="h6">Add Provider and User to Reporting Table</Typography>
                </div>
            </AccordionSummary>
            <AccordionDetails>
                {/**create text fields and buttons needed */}
                <form onSubmit={(e) => props.theProviderUserTable(e, props.token)} >
                    <Grid container direction='row'>
                        <Grid item><input type="text" placeholder="Provider Id" name="providerid" required /></Grid>
                        <Grid item><input type="text" placeholder="User Id" name="userid" required /></Grid>
                        <Grid item><input type="submit" value="Click to add Provider and User to reporting table" /></Grid>
                    </Grid>
                </form>

            </AccordionDetails>
            {/**display user info */}
            {addProviderUserTableJSX}
        </Accordion>
    </div>;

}

export default AddProviderUserTable;