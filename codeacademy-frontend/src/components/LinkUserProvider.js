import React from 'react';
import { Grid, Accordion, AccordionSummary, AccordionDetails, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

//link user and provider
const LinkUserProvider = (props) => {

    // console.log(props.token);
    // console.log(props.linkUserProvider);
    // console.log(typeof props.linkUserProvider);

    //build link provider user info to be displayed
    let theLinkUserProviderMessage = [];
    //check to see if link provider user info and create jsx
    if(typeof props.linkUserProvider === 'string'){       
        theLinkUserProviderMessage =<div><h5>{props.linkUserProvider}</h5></div> ;
    }

    return <div>
        {/**build accordian for link user provider information */}
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >                    <div >
                    <Typography variant="h6">Link User and Provider</Typography>
                </div>
            </AccordionSummary>
            <AccordionDetails>
                {/**create text fields and buttons needed */}
                <form onSubmit={(e) => props.theLinkUserProvider(e, props.token)} >
                    <Grid container direction='row'>
                        <Grid item><input type="text" placeholder="User Id" name="userid" required /></Grid>
                        <Grid item><input type="text" placeholder="Provider Id" name="providerid" required /></Grid>
                        <Grid item><input type="submit" value="Click to link user and provider profile" /></Grid>
                    </Grid>
                </form>
                
            </AccordionDetails>
            {/**display user info */}
            {theLinkUserProviderMessage}
        </Accordion>
    </div>;

}

export default LinkUserProvider;