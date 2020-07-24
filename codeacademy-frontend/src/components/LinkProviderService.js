import React from 'react';
import { Grid, Accordion, AccordionSummary, AccordionDetails, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

//link user and provider
const LinkProviderService = (props) => {

    // console.log(props.token);
    // console.log(props.linkProviderService);
    // console.log(typeof props.linkProviderService);

    //build link provider user info to be displayed
    let theLinkProviderServicesDoc = [];
    //check to see if link provider user info and create jsx
    if(typeof props.linkProviderService === 'object'){       
        theLinkProviderServicesDoc =<div><h5>{props.linkProviderService.message}</h5></div> ;
    }

    return <div>
        {/**build accordian for link provider services information */}
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >                    <div >
                    <Typography variant="h6">Link Provider to ServicesOffered</Typography>
                </div>
            </AccordionSummary>
            <AccordionDetails>
                {/**create text fields and buttons needed */}
                <form onSubmit={(e) => props.theLinkProviderServices(e, props.token)} >
                    <Grid container direction='row'>
                        <Grid item><input type="text" placeholder="Provider Id" name="providerid" required /></Grid>
                        <Grid item><input type="text" placeholder="Service Offered Id" name="serviceofferedid" required /></Grid>
                        <Grid item><input type="submit" value="Click to link user and provider profile" /></Grid>
                    </Grid>
                </form>

            </AccordionDetails>
            {/**display user info */}
            {theLinkProviderServicesDoc}
        </Accordion>
    </div>;

}

export default LinkProviderService;