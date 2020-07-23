import React from 'react';
import { Grid, Accordion, AccordionSummary, AccordionDetails, Typography, Container, ListItem, ListItemText } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

//delete user 
const DeleteProvider = (props) => {

    // console.log(props.token);
    // console.log(props.deleteProviderInfo);
    // console.log(typeof props.deleteProviderInfo);

    // create deleted provider info jsx
    let theDeletedProviderInfo = [];
    // when state shows deleteproviderinfo create jsx
    if(typeof props.deleteProviderInfo === 'object'){
        //add each field to jsx
        theDeletedProviderInfo  = <div><Container>
            <h4>The following profile has been deleted:</h4>
            <ListItem><ListItemText primary={`Id: ${props.deleteProviderInfo._id}`}/></ListItem> 
            <ListItem><ListItemText primary={`Organization: ${props.deleteProviderInfo.OrganizationName}`} /></ListItem>
            <ListItem><ListItemText primary={`Phone Number: ${props.deleteProviderInfo.PhoneNumber}`} /></ListItem>
            <ListItem><ListItemText primary={`Email: ${props.deleteProviderInfo.Email}`}/></ListItem>
            <ListItem><ListItemText primary={`Address: ${props.deleteProviderInfo.Address}`} /></ListItem>
            <ListItem><ListItemText primary={`City: ${props.deleteProviderInfo.City}`}/></ListItem>   
            <ListItem><ListItemText primary={`State: ${props.deleteProviderInfo.State}`}/></ListItem>   
            <ListItem><ListItemText primary={`Website: ${props.deleteProviderInfo.WebsiteInfo}`}/></ListItem>     
        </Container>
        </div>
        }

    return <div>
        {/**build according for Delete provider */}
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >                    <div >
                    <Typography variant="h6">Delete Provider Profile</Typography>
                </div>
            </AccordionSummary>
            <AccordionDetails>
                {/**create form data that is needed for new user */}
                <form onSubmit={(e) => props.theDeleteProviderInfo(e, props.token)} >
                    <Grid container direction='row'>
                        <Grid item><input type="text" placeholder="Provider Id" name="providerid" required /></Grid>
                        <Grid item><input type="submit" value="Click to delete provider profile" /></Grid>
                    </Grid>
                </form>
                
            </AccordionDetails>
            {/**display new user info */}
            {theDeletedProviderInfo}
        </Accordion>
    </div>;

}

export default DeleteProvider;