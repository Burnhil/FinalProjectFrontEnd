import React from 'react';
import { Grid, Accordion, AccordionSummary, AccordionDetails, Typography, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

//get providers and services offered
const GetProvidersServicesOfferedInfo = (props) => {

    //testing console output
    // console.log(props.token);
    // console.log(props.adminProviderServiceInfo);
    
    //create accordian with button to view provider with serviceoffered details
    return <div>
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >                    <div >
                    <Typography variant="h6">View all Providers with Services Offered</Typography>
                </div>
            </AccordionSummary>
           {/**create button for provider with serviceoffered details */}
            <AccordionDetails>
                <form onSubmit={(e) => props.setProviderServiceInfo2(e)} >
                    <Grid container direction='row'>
                        <Grid item><input type="submit" value="Click to view all Providers with Services Offered" /></Grid>
                    </Grid>
                </form>    
            </AccordionDetails>
            {/**create provider with serviceoffered details */}
         <AccordionDetails>
            
            <Table>
                <TableHead>
                    <TableCell>Organization</TableCell>
                    <TableCell>Address</TableCell>
                    <TableCell>City</TableCell>
                    <TableCell>State</TableCell>
                    <TableCell>County</TableCell>
                    <TableCell>Phone Number</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>WebSite</TableCell>
                    {/* <TableCell>Criteria for Service</TableCell> */}
                    {/* <TableCell>Service Type</TableCell>
                    <TableCell>Service Description</TableCell> */}
                    {/* <TableCell>Avaliable Beds</TableCell> */}
                    {/* <TableCell>Total Beds</TableCell> */}
                    {/* <TableCell>Volunteers Opportunities</TableCell>
                    <TableCell>Volunteers Needed</TableCell>
                    <TableCell>Warming Station</TableCell> */}
                    <TableCell>Provider Id</TableCell>
                    <TableCell>Services Offered Id</TableCell>
                    
                </TableHead>
                <TableBody>
                    {props.adminProviderServiceInfo.map((row, index) => (
                        <TableRow key={row["OrganizationName"]}>
                            <TableCell>{row["OrganizationName"]}</TableCell>
                            <TableCell>{row["Address"]}</TableCell>
                            <TableCell>{row["City"]}</TableCell>
                            <TableCell>{row["State"]}</TableCell>
                            <TableCell>{row["County"]}</TableCell>
                            <TableCell>{row["PhoneNumber"]}</TableCell>
                            <TableCell>{row["Email"]}</TableCell>
                            <TableCell>{row["WebsiteInfo"]}</TableCell>
                            {/* <TableCell>{row["CriteriaForService"]}</TableCell>
                            {/* <TableCell>{row["ServiceType"]}</TableCell>
                            {/*<TableCell>{row["ServicesDescription"]}</TableCell> */}
                            {/* <TableCell>{row["AvaliableBeds"]}</TableCell> */}
                            {/* <TableCell>{row["TotalBeds"]}</TableCell> */}
                            {/* <TableCell>{row["VolunteerOpportunities"]}</TableCell> */}
                            {/* <TableCell>{row["VolunteersNeeded"]}</TableCell> */}
                            {/* <TableCell>{row["WarmingStation"]}</TableCell> */} 
                            <TableCell>{row["Provider_id"]}</TableCell>
                            <TableCell>{row["TheServicesOfferedId"]}</TableCell>     
                        </TableRow>
                    ))}

                </TableBody>
            </Table>
            
            </AccordionDetails>
        </Accordion>

    </div>;

}

export default GetProvidersServicesOfferedInfo;