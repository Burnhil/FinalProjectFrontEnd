import React from 'react';
import { Grid, Accordion, AccordionSummary, AccordionDetails, Typography, Container, ListItem, ListItemText } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

//create view user by id
const UserId = (props) => {

    //testing console output
    // console.log(props.userById);

    //set theUserById info to an array
    let theUserById = [];
    // console.log(typeof props.userById);
    // console.log(props.userById.message);

    //check if error finding userby id 
    if (typeof props.userById.message === 'undefined') {

        //if props.userById has an object build user info to display to user
        if (typeof props.userById === 'object') {

            theUserById = <div>
                

                    <ListItem><ListItemText primary={`Id: ${props.userById._id}`} /></ListItem>
                    <ListItem><ListItemText primary={`UserID: ${props.userById.UserId}`} /></ListItem>
                    <ListItem><ListItemText primary={`First Name: ${props.userById.FirstName}`} /></ListItem>
                    <ListItem><ListItemText primary={`Last Name: ${props.userById.LastName}`} /></ListItem>
                    <ListItem><ListItemText primary={`Organization: ${props.userById.Organization}`} /></ListItem>
                    <ListItem><ListItemText primary={`Email: ${props.userById.Email}`} /></ListItem>
                    <ListItem><ListItemText primary={`Phone Number: ${props.userById.PhoneNumber}`} /></ListItem>
                    <ListItem><ListItemText primary={`Last Login: ${props.userById.LastLogin}`} /></ListItem>
                    <ListItem><ListItemText primary={`Changed By: ${props.userById.ChangedBy}`} /></ListItem>
                    <ListItem><ListItemText primary={`Changed By Date: ${props.userById.ChangedDateTime}`} /></ListItem>

         
            </div>
        }

    } else {
        //display error message if userby id didn't work
        theUserById = "Sorry there has been an error trying to find user by id.  Please check the id and try again.";

    }

    return <div>
        {/**build according for userId textbox input for _id and button to call setUserById pass in event/props.token */}
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >                    <div >
                    <Typography variant="h6">View User by Id</Typography>
                </div>
            </AccordionSummary>
            <AccordionDetails>
                <form onSubmit={(e) => props.setUserById(e, props.token)} >

                    <Grid container direction='row'>
                        <Grid item><input type="text" placeholder="user_id" name="userid" required /></Grid>
                        <Grid item><input type="submit" value="Click to user by Id." /></Grid>
                    </Grid>
                </form>
                {/**call theUserById jsx to show output to user */}
            </AccordionDetails>
            {theUserById}
        </Accordion>

    </div>;

}

export default UserId;