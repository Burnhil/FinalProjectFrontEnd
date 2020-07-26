import React from 'react';
import { Grid, Accordion, AccordionSummary, AccordionDetails, Typography, Table, TableHead, TableRow, TableCell, TableBody, Container } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

//create view all Bed Transactions
const GetAllBedTransactionsById = (props) => {

    //testing console output
    // console.log(props.token);
    // console.log(props.getAllBedTransactionsById);

    //create accordian with button to view all bed transactions by Id
    return <div>
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >                    <div >
                    <Typography variant="h6">View all Bed Transactions by Id</Typography>
                </div>
            </AccordionSummary>
            {/**create button to pull all bed transactions by id*/}
            <AccordionDetails>
                <form onSubmit={(e) => props.theGetBedtransactionById(e, props.token)} >
                    <Grid container direction='row'>
                        <Grid item><input type="text" placeholder="Provider Id" name="providerid" required /></Grid>
                        <Grid item><input type="submit" value="Click to see all Bed Transactions by Id." /></Grid>
                    </Grid>
                </form>
            </AccordionDetails>
            {/**create bed transaction table */}
            <AccordionDetails>
                
                    <Table>
                        <TableHead>
                            <TableCell>Current Bed Count</TableCell>
                            <TableCell>Updated Bed Count</TableCell>
                            <TableCell>Updating Provider Id</TableCell>
                            <TableCell>Updating Service Id</TableCell>
                            <TableCell>Updating User Id</TableCell>
                            <TableCell>Changed Date </TableCell>
                        </TableHead>
                        <TableBody>
                            {props.getAllBedTransactionsById.map((row, index) => (
                                <TableRow key={row["_id"]}>
                                    <TableCell>{row["CurrentBedCount"]}</TableCell>
                                    <TableCell>{row["UpdatedBedCount"]}</TableCell>
                                    <TableCell>{row["UpdatingProviderID"]}</TableCell>
                                    <TableCell>{row["UpdatingServiceID"]}</TableCell>
                                    <TableCell>{row["UpdatingUserID"]}</TableCell>
                                    <TableCell>{row["changedDateTime"]}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                
            </AccordionDetails>
        </Accordion>

    </div>;

}

export default GetAllBedTransactionsById;