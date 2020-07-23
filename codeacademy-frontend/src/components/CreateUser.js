import React from 'react';
import { Grid, Accordion, AccordionSummary, AccordionDetails, Typography, Container, ListItem, ListItemText } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

//create user 
const CreateUser = (props) => {

    // testing code to console
    // console.log(props.createUserInfo.newUser);
    // console.log(typeof props.createUserInfo.newUser);
    // console.log(props.createUserInfo.message);
    // console.log(typeof props.createUserInfo.message);

    //create theCreatedUserInfo to store new user info
    let theCreatedUserInfo = [];

    //check for invalid password entry
    if(typeof props.createUserInfo.newUser === 'undefined'){
        
        theCreatedUserInfo = props.createUserInfo.message;
    }else{

    //start building jsx to display new user results 
    if(typeof props.createUserInfo === 'object'){
     
    theCreatedUserInfo = <div><Container>
        <h4>The following profile has been added:</h4>
        <ListItem><ListItemText primary={props.createUserInfo.newUser.FirstName} /></ListItem>
        <ListItem><ListItemText primary={props.createUserInfo.newUser.LastName} /></ListItem>
        <ListItem><ListItemText primary={props.createUserInfo.newUser.Organization} /></ListItem>
        <ListItem><ListItemText primary={props.createUserInfo.newUser.PhoneNumber} /></ListItem>
        <ListItem><ListItemText primary={props.createUserInfo.newUser.Email}/></ListItem>
        <ListItem><ListItemText primary={props.createUserInfo.newUser.UserType} /></ListItem>
        <ListItem><ListItemText primary={props.createUserInfo.newUser.UserId}/></ListItem>
        <ListItem><ListItemText primary={props.createUserInfo.newUser._id}/></ListItem>  
    </Container>
    </div>
    }
    }

    return <div>
        {/**build according for creating user */}
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >                    <div >
                    <Typography variant="h6">Create User Profile</Typography>
                </div>
            </AccordionSummary>
            <AccordionDetails>
                {/**create form data that is needed for new user */}
                <form onSubmit={(e) => props.theCreateUser(e, props.token)} >
                    <Grid container direction='row'>
                        <Grid item><input type="text" placeholder="First Name" name="firstname" required /></Grid>
                        <Grid item><input type="text" placeholder="Last Name" name="lastname" required /></Grid>
                        <Grid item><input type="text" placeholder="Organization" name="organization" required /></Grid>
                        <Grid item><input type="text" placeholder="Phone Number" name="phonenumber" required /></Grid>
                        <Grid item><input type="text" placeholder="Email" name="email" required /></Grid>
                        <Grid item><input type="text" placeholder="User Type" name="usertype" required /></Grid>
                        <Grid item><input type="text" placeholder="User Id" name="userid" required /></Grid>
                        <Grid item><input type="text" placeholder="User Password" name="userpassword" required /></Grid>
                        <Grid item><input type="submit" value="Click to create user profile" /></Grid>
                    </Grid>
                </form>
                
            </AccordionDetails>
            {/**display new user info */}
            {theCreatedUserInfo}
        </Accordion>
    </div>;

}

export default CreateUser;