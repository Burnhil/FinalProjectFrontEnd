import React from 'react';
import { Grid, Accordion, AccordionSummary, AccordionDetails, Typography, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

//create view all Bed Transactions
const GetAllBedTransactions = (props) => {

    //testing console output
    // console.log(props.token);
    console.log(props.getBedTransaction);
    
    //create accordian with button to view all bed transactions
    return <div>
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >                    <div >
                    <Typography variant="h6">View all Bed Transactions</Typography>
                </div>
            </AccordionSummary>
           {/**create button to pull all bed transactions */}
            <AccordionDetails>
                <form onSubmit={(e) => props.theGetBedtransaction(e, props.token)} >
                    <Grid container direction='row'>
                        <Grid item><input type="submit" value="Click to see all Bed Transactions." /></Grid>
                    </Grid>
                </form>    
            </AccordionDetails>
            {/**create bed transaction table by mapping over getBedTransaction array */}
         <AccordionDetails>
            
            <Table>
                <TableHead>
                    <TableCell>Previous Bed Count</TableCell>
                    <TableCell>Updated Bed Count</TableCell>
                    <TableCell>Updating Provider Id</TableCell>
                    <TableCell>Updating Service Id</TableCell>
                    <TableCell>Updating User Id</TableCell>
                    <TableCell>Changed Date </TableCell>  
                </TableHead>
                <TableBody>
                    {props.getBedTransaction.map((row, index) => (
                        <TableRow key={row["_id"]}>
                            <TableCell>{row["CurrentBedCount"]}</TableCell>
                            <TableCell>{row["UpdatedBedCount"]}</TableCell>
                            <TableCell>{row["UpdatingProviderID"]}</TableCell>
                            <TableCell>{row["UpdatingServiceID"]}</TableCell>
                            <TableCell>{row["UpdatingUserID"]}</TableCell>
                            <TableCell>{row["ChangedDateTime"]}</TableCell>
                        </TableRow>
                    ))}

                </TableBody>
            </Table>
            
            </AccordionDetails>
        </Accordion>

    </div>;

}

export default GetAllBedTransactions;