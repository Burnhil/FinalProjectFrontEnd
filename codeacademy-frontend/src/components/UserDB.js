import React from 'react';
import { Grid, Accordion, AccordionSummary, AccordionDetails, Typography, Table, TableHead, TableRow, TableCell, TableBody, Container } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

//create view all users to be pulled from database to show end user
const UserDB = (props) => {

    //testing console output
    // console.log(`this is alluserInfo ${props.allUserInfo}`)
    // console.log(props.allUserInfo);
    // console.log(props.allUserInfo[0])

    //create accordian with button in accordiandetails to call setAllUserInfo then display information to enduser
    return <div>
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >                    <div >
                    <Typography variant="h6">View all Users.</Typography>
                </div>
            </AccordionSummary>
           {/**create form for button to call setAllUserInfo */}
            <AccordionDetails>
                <form onSubmit={(e) => props.setAllUserInfo(e, props.token)} >
                    <Grid container direction='row'>
                        <Grid item><input type="submit" value="Click to pull all users." /></Grid>
                    </Grid>
                </form>    
            </AccordionDetails>
            {/**create accordian details by mapping over allUserInfo */}
            <AccordionDetails>
            <Container>
            <Table>
                <TableHead>
                    <TableCell>First Name</TableCell>
                    <TableCell>Last Name</TableCell>
                    <TableCell>User Id</TableCell>
                    <TableCell>Organization</TableCell>
                    <TableCell>Phone Number</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>User Name</TableCell>
                    <TableCell>Last Login</TableCell>
                    <TableCell>Changed By</TableCell>
                    <TableCell>Changed Date</TableCell>
                    <TableCell>User Type</TableCell>
                    
                </TableHead>
                <TableBody>
                    {props.allUserInfo.map((row, index) => (
                        <TableRow key={row["UserId"]}>
                            <TableCell>{row["FirstName"]}</TableCell>
                            <TableCell>{row["LastName"]}</TableCell>
                            <TableCell>{row["_id"]}</TableCell>
                            <TableCell>{row["Organization"]}</TableCell>
                            <TableCell>{row["PhoneNumber"]}</TableCell>
                            <TableCell>{row["Email"]}</TableCell>
                            <TableCell>{row["UserId"]}</TableCell>
                            <TableCell>{row["LastLogin"]}</TableCell>
                            <TableCell>{row["ChangedBy"]}</TableCell>
                            <TableCell>{row["ChangedDateTime"]}</TableCell>
                            <TableCell>{row["UserType"]}</TableCell>
                           
                        </TableRow>
                    ))}

                </TableBody>
            </Table>
            </Container>
            </AccordionDetails>
        </Accordion>

    </div>;

}

export default UserDB;