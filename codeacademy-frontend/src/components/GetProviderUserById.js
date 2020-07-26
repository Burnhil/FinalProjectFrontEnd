import React from 'react';
import { Grid, Accordion, AccordionSummary, AccordionDetails, Typography, Table, TableHead, TableRow, TableCell, TableBody, Container } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

//create view all users for providers by id information
const GetProviderUserById = (props) => {

    //testing console output
    // console.log(props.token);
    // console.log(props.getProviderUsersById);

    //create accordian with button to view all provider users by id information
    return <div>
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >                    <div >
                    <Typography variant="h6">View all Users for Provider by Id</Typography>
                </div>
            </AccordionSummary>
            {/**create button to pull all provider users by id information*/}
            <AccordionDetails>
                <form onSubmit={(e) => props.theGetProviderUserById(e, props.token)} >
                    <Grid container direction='row'>
                        <Grid item><input type="text" placeholder="Provider Id" name="providerid" required /></Grid>
                        <Grid item><input type="submit" value="Click to see all Users for Provider." /></Grid>
                    </Grid>
                </form>
            </AccordionDetails>
            {/**create provider user id table */}
            <AccordionDetails>
                
                    <Table>
                        <TableHead>
                            <TableCell>Record Id</TableCell>
                            <TableCell>Provider Id</TableCell>
                            <TableCell>User Id</TableCell>
                        </TableHead>
                        <TableBody>
                            {props.getProviderUsersById.map((row, index) => (
                                <TableRow key={row["_id"]}>
                                    <TableCell>{row["_id"]}</TableCell>
                                    <TableCell>{row["ProviderId"]}</TableCell>
                                    <TableCell>{row["UserId"]}</TableCell>
                                </TableRow>
                            ))}

                        </TableBody>
                    </Table>
                
            </AccordionDetails>
        </Accordion>

    </div>;

}

export default GetProviderUserById;