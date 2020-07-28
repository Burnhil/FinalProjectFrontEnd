import React from 'react';
import { Grid, Accordion, AccordionSummary, AccordionDetails, Typography, ListItemText, ListItem, Container } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

//disable user password
const DisableUserAccount = (props) => {

    // console.log(props.token);
    // console.log(props.disableUserAccount);
    // console.log(typeof props.disableUserAccount);

    //create userDisableInfo to hold jsx to display to user
    let userDisabledInfo = [];

    //check if its an object if so create jsx
    if (typeof props.disableUserAccount === 'object') {
        //if true disable account
        if (props.disableUserAccount.Disabled === true) {
            console.log("this account is disabled");
            userDisabledInfo = <div><Container>
                <h4>The following profile has been disabled:</h4>
                <ListItem><ListItemText primary={`Id: ${props.disableUserAccount._id}`} /></ListItem>
                <ListItem><ListItemText primary={`UserID: ${props.disableUserAccount.UserId}`} /></ListItem>
                <ListItem><ListItemText primary={`First Name: ${props.disableUserAccount.FirstName}`} /></ListItem>
                <ListItem><ListItemText primary={`Last Name: ${props.disableUserAccount.LastName}`} /></ListItem>

            </Container>
            </div>
        } else { // if false reactivate the account
            console.log("this account is active very active");
            userDisabledInfo = <div><Container>
                <h4>The following profile has been re-activated:</h4>
                <ListItem><ListItemText primary={`Id: ${props.disableUserAccount._id}`} /></ListItem>
                <ListItem><ListItemText primary={`UserID: ${props.disableUserAccount.UserId}`} /></ListItem>
                <ListItem><ListItemText primary={`First Name: ${props.disableUserAccount.FirstName}`} /></ListItem>
                <ListItem><ListItemText primary={`Last Name: ${props.disableUserAccount.LastName}`} /></ListItem>

            </Container>
            </div>

        }

    }

    return <div>
        {/** create accordian for disableuser*/}
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >                    <div >
                    <Typography variant="h6">Disable User Profile</Typography>
                </div>
            </AccordionSummary>
            <AccordionDetails>

                {/**create text fields and buttons needed to disable user */}
                <form onSubmit={(e) => props.theDisableUserAccount(e, props.token)} >

                    <Grid container direction='row'>
                        <Grid item><input type="text" placeholder="User Id" name="userid" required /></Grid>
                        <Grid item><input type="submit" value="Click to Disable Profile" /></Grid>
                    </Grid>
                </form>

            </AccordionDetails>
            {/**display jsx to user for disableduser */}
            {userDisabledInfo}
        </Accordion>
    </div>;

}

export default DisableUserAccount;