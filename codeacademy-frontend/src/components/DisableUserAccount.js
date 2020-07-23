import React from 'react';
import { Grid, Accordion, AccordionSummary, AccordionDetails, Typography, ListItemText, ListItem, Container } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

//reset user password
const DisableUserAccount = (props) => {

    console.log(props.token);
    console.log(props.disableUserAccount);
    console.log(typeof props.disableUserAccount);

    let userDisabledInfo = [];

    if (typeof props.disableUserAccount === 'object') {
        if (props.disableUserAccount.Disabled === true) {
            console.log("this account is disabled");
            userDisabledInfo = <div><Container>
                <h4>The following profile has been disabled:</h4>
                <ListItem><ListItemText primary={props.disableUserAccount._id} /></ListItem>
                <ListItem><ListItemText primary={props.disableUserAccount.UserId} /></ListItem>
                <ListItem><ListItemText primary={props.disableUserAccount.FirstName} /></ListItem>
                <ListItem><ListItemText primary={props.disableUserAccount.LastName} /></ListItem>

            </Container>
            </div>
        } else {
            console.log("this account is active very active");
            userDisabledInfo = <div><Container>
                <h4>The following profile has been re-activated:</h4>
                <ListItem><ListItemText primary={props.disableUserAccount._id} /></ListItem>
                <ListItem><ListItemText primary={props.disableUserAccount.UserId} /></ListItem>
                <ListItem><ListItemText primary={props.disableUserAccount.FirstName} /></ListItem>
                <ListItem><ListItemText primary={props.disableUserAccount.LastName} /></ListItem>

            </Container>
            </div>

        }

    }

    return <div>
        {/** */}
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >                    <div >
                    <Typography variant="h6">Reset User Password</Typography>
                </div>
            </AccordionSummary>
            <AccordionDetails>

                {/**create text fields and buttons needed */}
                <form onSubmit={(e) => props.theDisableUserAccount(e, props.token)} >

                    <Grid container direction='row'>
                        <Grid item><input type="text" placeholder="User Id" name="userid" required /></Grid>
                        <Grid item><input type="submit" value="Click to Disable Profile" /></Grid>
                    </Grid>
                </form>

            </AccordionDetails>
            {/** */}
            {userDisabledInfo}
        </Accordion>
    </div>;

}

export default DisableUserAccount;