import React from 'react';
import { Grid, Accordion, AccordionSummary, AccordionDetails, Typography, ListItem, ListItemText } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

//delete user 
const DeleteUser = (props) => {

    //console.log(props.token);
    //console.log(props.deleteUserInfo);

    //array to store deleted user jsx
    let theDeletedUserInfo = [];

    //if deleteuserinfo is avaliable create jsx
    if(typeof props.deleteUserInfo === 'object'){
        //create jsx for each element
        theDeletedUserInfo  = <div>
            <h4>The following profile has been deleted:</h4>
            <ListItem><ListItemText primary={`First Name: ${props.deleteUserInfo.FirstName}`} /></ListItem>
            <ListItem><ListItemText primary={`Last Name: ${props.deleteUserInfo.LastName}`} /></ListItem>
            <ListItem><ListItemText primary={`Organization: ${props.deleteUserInfo.Organization}`} /></ListItem>
            <ListItem><ListItemText primary={`Phone Number: ${props.deleteUserInfo.PhoneNumber}`} /></ListItem>
            <ListItem><ListItemText primary={`Email: ${props.deleteUserInfo.Email}`}/></ListItem>
            <ListItem><ListItemText primary={`User Type: ${props.deleteUserInfo.UserType}`} /></ListItem>
            <ListItem><ListItemText primary={`User Id: ${props.deleteUserInfo.UserId}`}/></ListItem>
            <ListItem><ListItemText primary={`Id: ${props.deleteUserInfo._id}`}/></ListItem>  
       
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
                {/**create form data that is needed for delete user */}
                <form onSubmit={(e) => props.theDeleteUserInfo(e, props.token)} >
                    <Grid container direction='row'>
                        <Grid item><input type="text" placeholder="User Id" name="userid" required /></Grid>
                        <Grid item><input type="submit" value="Click to delete user profile" /></Grid>
                    </Grid>
                </form>
                
            </AccordionDetails>
            {/**display deleted user info */}
            {theDeletedUserInfo}
        </Accordion>
    </div>;

}

export default DeleteUser;