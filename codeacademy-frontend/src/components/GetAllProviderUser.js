import React from 'react';
import { Grid, Accordion, AccordionSummary, AccordionDetails, Typography, Table, TableHead, TableRow, TableCell, TableBody, Container } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

//create view all Provider Users information
const GetAllProviderUser = (props) => {

    //testing console output
    // console.log(props.token);
    // console.log(props.getProviderUsersInfo);
    
    //create accordian with button to view all provider users information
    return <div>
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >                    <div >
                    <Typography variant="h6">View all Provider Users information</Typography>
                </div>
            </AccordionSummary>
           {/**create button to pull all provider users information*/}
            <AccordionDetails>
                <form onSubmit={(e) => props.theGetAllProviderUserInfo(e, props.token)} >
                    <Grid container direction='row'>
                        <Grid item><input type="submit" value="Click to see all Provider Users information." /></Grid>
                    </Grid>
                </form>    
            </AccordionDetails>
            {/**create provider user table */}
         <AccordionDetails>
            <Container>
            <Table>
                <TableHead>
                    <TableCell>Record Id</TableCell>
                    <TableCell>Provider Id</TableCell>
                    <TableCell>User Id</TableCell>
                </TableHead>
                <TableBody>
                    {props.getProviderUsersInfo.map((row, index) => (
                        <TableRow key={row["_id"]}>
                            <TableCell>{row["_id"]}</TableCell>
                            <TableCell>{row["ProviderId"]}</TableCell>
                            <TableCell>{row["UserId"]}</TableCell>
                        </TableRow>
                    ))}

                </TableBody>
            </Table>
            </Container>
            </AccordionDetails>
        </Accordion>

    </div>;

}

export default GetAllProviderUser;