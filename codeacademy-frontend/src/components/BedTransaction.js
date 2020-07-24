import React from 'react';
import { Grid, Accordion, AccordionSummary, AccordionDetails, Typography, ListItemText, ListItem, Container } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

//add bed transaction 
const BedTransaction = (props) => {

    //testing code to console
    // console.log(props.token);
    // console.log(props.addBedTransaction);
    // console.log(typeof props.addBedTransaction);
 
    //create jsx for bed transaction
    let theBedTransaction = [];

    // //test if addServicesOffered is availiable
    // if (typeof props.addServicesOffered === 'object') {
    //     theServicesOfferedDoc = <div><Container>
    //         <h4>The following Services Offered has been added:</h4>
    //         <ListItem><ListItemText primary={`Id: ${props.addServicesOffered._id}`}/></ListItem>
  
    //         <ListItem><ListItemText primary={`Services Description: ${props.addServicesOffered.ServicesDescription}`} /></ListItem>
    //         <ListItem><ListItemText primary={`Criteria For Service: ${props.addServicesOffered.CriteriaForService}`} /></ListItem>
    //         <ListItem><ListItemText primary={`Warming Station: ${props.addServicesOffered.WarmingStation}`} /></ListItem>
    //     </Container>
    //     </div>
    // }


    return <div>
        {/**create accordian for addservicesoffered */}
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >                    <div >
                    <Typography variant="h6">Change Bed Count</Typography>
                </div>
            </AccordionSummary>
            <AccordionDetails>

                {/**create text fields and buttons needed */}
                <form onSubmit={(e) => props.theBedTransaction(e, props.token)} >
                    <Grid container direction='row'>
                         <Grid item><input type="text" placeholder="Provider Id" name="Provider Id" required /></Grid>
                         <Grid item><input type="text" placeholder="Service Offered Id" name="serviceofferedid" required /></Grid>
                        <Grid item><input type="submit" value="Click to add Bed Transaction" /></Grid>
                    </Grid>
                </form>


            </AccordionDetails>
            {/**display bed transaction information */}
                {theBedTransaction}
        </Accordion>
    </div>;

}

export default BedTransaction;