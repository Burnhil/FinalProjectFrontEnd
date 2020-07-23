import React from 'react';
import { Grid, Accordion, AccordionSummary, AccordionDetails, Typography, Container, ListItem, ListItemText } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

//delete user 
const DeleteUser = (props) => {

    //console.log(props.token);
    //console.log(props.deleteUserInfo);

    let theDeletedUserInfo = [];

    if(typeof props.deleteUserInfo === 'object'){
     
        theDeletedUserInfo  = <div><Container>
            <h4>The following profile has been deleted:</h4>
            <ListItem><ListItemText primary={props.deleteUserInfo.FirstName} /></ListItem>
            <ListItem><ListItemText primary={props.deleteUserInfo.LastName} /></ListItem>
            <ListItem><ListItemText primary={props.deleteUserInfo.Organization} /></ListItem>
            <ListItem><ListItemText primary={props.deleteUserInfo.PhoneNumber} /></ListItem>
            <ListItem><ListItemText primary={props.deleteUserInfo.Email}/></ListItem>
            <ListItem><ListItemText primary={props.deleteUserInfo.UserType} /></ListItem>
            <ListItem><ListItemText primary={props.deleteUserInfo.UserId}/></ListItem>
            <ListItem><ListItemText primary={props.deleteUserInfo._id}/></ListItem>  
        </Container>
        </div>
        }

    return <div>
        {/**build according for Delete user */}
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >                    <div >
                    <Typography variant="h6">Delete User Profile</Typography>
                </div>
            </AccordionSummary>
            <AccordionDetails>
                {/**create form data that is needed for new user */}
                <form onSubmit={(e) => props.theDeleteUserInfo(e, props.token)} >
                    <Grid container direction='row'>
                        <Grid item><input type="text" placeholder="User Id" name="userid" required /></Grid>
                        <Grid item><input type="submit" value="Click to delete user profile" /></Grid>
                    </Grid>
                </form>
                
            </AccordionDetails>
            {/**display new user info */}
            {theDeletedUserInfo}
        </Accordion>
    </div>;

}

export default DeleteUser;