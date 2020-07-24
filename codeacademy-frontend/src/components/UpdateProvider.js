import React from 'react';
import { Grid, Accordion, AccordionSummary, AccordionDetails, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

//add provider info
const UpdateProvider = (props) => {

    // console.log(props.token);
    // console.log(props.updateProviderInfo);
    // console.log(typeof props.updateProviderInfo);

    //create jsx for adding provider information
    let theAddProviderInfo = [];

    //test if updateProviderInfo has been updated
    if (typeof props.updateProviderInfo === 'string') {
        theAddProviderInfo = <h4>Updated Provider Information.</h4>
    }


    return <div>
        {/**create accordian for updateproviderinfo */}
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >                    <div >
                    <Typography variant="h6">Update Provider Information</Typography>
                </div>
            </AccordionSummary>
            <AccordionDetails>

                {/**create text fields and buttons needed */}
                <form onSubmit={(e) => props.theUpdateProviderInfo(e, props.token)} >
                    <h5>Provider Id is required insert null for any other fields not being changed</h5>
                    <Grid container direction='row'>
                        <Grid item><input type="text" placeholder="OrganizationName" name="organizationname" required /></Grid>
                        <Grid item><input type="text" placeholder="Email" name="email" required /></Grid>
                        <Grid item><input type="text" placeholder="WebsiteInfo" name="websiteinfo" required /></Grid>
                        <Grid item><input type="text" placeholder="PhoneNumber" name="phonenumber" required /></Grid>
                        <Grid item><input type="text" placeholder="Address" name="address" required /></Grid>
                        <Grid item><input type="text" placeholder="City" name="city" required /></Grid>
                        <Grid item><input type="text" placeholder="State" name="state" required /></Grid>
                        <Grid item><input type="text" placeholder="County" name="county" required /></Grid>
                        <Grid item><input type="text" placeholder="Provider Id" name="providerid" required /></Grid>
                        <Grid item><input type="submit" value="Click to Update Provider" /></Grid>
                    </Grid>
                </form>


            </AccordionDetails>
            {/**display updated provider information */}
            {theAddProviderInfo}
        </Accordion>
    </div>;

}

export default UpdateProvider;