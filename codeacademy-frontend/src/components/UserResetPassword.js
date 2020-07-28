import React from 'react';
import { Grid, Accordion, AccordionSummary, AccordionDetails, Typography, ListItemText, ListItem, Container } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

//reset user password
const UserResetPassword = (props) => {

    console.log(props.token);
    console.log(props.resetPassword);

    //create jsx array to store user information
    let theResetPasswordInfo = [];

    //check to verify object to create jsx for reset password user information
    if(typeof props.resetPassword === 'object'){
     
        //if no resetPasswordDoc then return error message for password requirements
        if(props.resetPassword.resetPasswordDoc === undefined){
            theResetPasswordInfo = <div><Container>
                <h4>Password requirements not meet unable to process change.</h4>
                </Container></div>
        }else{
            //if resetPasswordDoc if availiable password update was successful send back user info updated
            theResetPasswordInfo = <div><Container>
            <h4>The password information for the following profile has been reset.</h4>
            <ListItem><ListItemText primary={`User Id: ${props.resetPassword.resetPasswordDoc.UserId}`} /></ListItem>
            <ListItem><ListItemText primary={`First Name: ${props.resetPassword.resetPasswordDoc.FirstName}`}/></ListItem>
            <ListItem><ListItemText primary={`Last Name: ${props.resetPassword.resetPasswordDoc.LastName}`} /></ListItem>
            <ListItem><ListItemText primary={`Organization: ${props.resetPassword.resetPasswordDoc.Organization}`} /></ListItem>
            <ListItem><ListItemText primary={`Phone Number: ${props.resetPassword.resetPasswordDoc.PhoneNumber}`} /></ListItem>
            <ListItem><ListItemText primary={`Email: ${props.resetPassword.resetPasswordDoc.Email}`}/></ListItem>
        </Container>
        </div>
        }

        
     }

    return <div>
        {/**build accordian for user reset password */}
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
                
                {/**create text fields and buttons needed to get userid and new password*/}
                <form onSubmit={(e) => props.theResetPassword(e, props.token)} >
                <h5>Password requirements include minimun length eight characters no longer then sixteen with one uppdercase letter(a-z), one number, and one special character(*@!#%&)</h5>
                    <Grid container direction='row'>
                        <Grid item><input type="text" placeholder="User Id" name="userid" required /></Grid>
                        <Grid item><input type="text" placeholder="New User Password" name="newpassword" required /></Grid>
                        <Grid item><input type="submit" value="Click to link reset password" /></Grid>
                    </Grid>
                </form>
                
            </AccordionDetails>
            {/**display reset user information */}
            {theResetPasswordInfo}
        </Accordion>
    </div>;

}

export default UserResetPassword;