import React from 'react';
import { Grid, Accordion, AccordionSummary, AccordionDetails, Typography, ListItem, ListItemText } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

//update user 
const UserUpdate = (props) => {

    //testing info
    // console.log(props.token);
    // console.log(props.updateUserInfo);
    // console.log(props.updateUserInfo.FirstName);

    //create the jsx to display user information updated
    let theUpdatedUserInfo = [];

    //check to verify object to create jsx
    if(typeof props.updateUserInfo === 'object'){
        //create jsx for user being updated
        theUpdatedUserInfo = <div>
            <h4>The following profile has been updated:</h4>
            <ListItem><ListItemText primary={`First Name: ${props.updateUserInfo.FirstName}`} /></ListItem>
            <ListItem><ListItemText primary={`Last Name: ${props.updateUserInfo.LastName}`} /></ListItem>
            <ListItem><ListItemText primary={`Organization: ${props.updateUserInfo.Organization}`} /></ListItem>
            <ListItem><ListItemText primary={`Phone Number: ${props.updateUserInfo.PhoneNumber}`} /></ListItem>
            <ListItem><ListItemText primary={`Email: ${props.updateUserInfo.Email}`}/></ListItem>
            <ListItem><ListItemText primary={`User Type: ${props.updateUserInfo.UserType}`} /></ListItem>
        
        </div>
     }
        
    return <div>
        {/**build according for updating user */}
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >                    <div >
                    <Typography variant="h6">Update User Profile</Typography>
                </div>
            </AccordionSummary>
            <AccordionDetails>
                
                {/**create form data that is needed for updating user */}
                <form onSubmit={(e) => props.theUpdateUserInfo(e, props.token)} >
                <h5>User Id is required insert null for any other fields not being changed</h5>
                    <Grid container direction='row'>
                        <Grid item><input type="text" placeholder="First Name" name="firstname" required /></Grid>
                        <Grid item><input type="text" placeholder="Last Name" name="lastname" required /></Grid>
                        <Grid item><input type="text" placeholder="Organization" name="organization" required /></Grid>
                        <Grid item><input type="text" placeholder="Phone Number" name="phonenumber" required /></Grid>
                        <Grid item><input type="text" placeholder="Email" name="email" required /></Grid>
                        <Grid item><input type="text" placeholder="User Type" name="usertype" required /></Grid>
                        <Grid item><input type="text" placeholder="User Id - required" name="userid" required /></Grid>
                        <Grid item><input type="submit" value="Click to update user profile" /></Grid>
                    </Grid>
                </form>  
            </AccordionDetails>
            {/**displaying the jsx for the user updated */}
            {theUpdatedUserInfo}
        </Accordion>
    </div>;

}

export default UserUpdate;