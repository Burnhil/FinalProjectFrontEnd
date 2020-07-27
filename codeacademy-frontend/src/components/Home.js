import React from 'react';
import { Paper, Container } from '@material-ui/core';


const Home = (props) => {

    let missionStatement = "Care Amarillo is an operating system that is accessible to a diverse group of people.  CA will be available 24 hours a day, 7 days a week.  Used by human services and emergency shelters this system will make lives better in our community.  It is usable from web-based and mobile-based interfaces to make finding resources in our city easier for everyone.  Information from the different providers will be current and up to date with types of services offered, volunteering information as well as contact and website information.  Emergency shelters provide emergency short-term housing and warming needs.  Total number of beds offered by these providers will be updated as beds become available.   "

    return <div>
        
        <Container maxWidth="md" >
            <Paper className="missionStatement">
            <h1 >Care Amarillo's Mission Statement</h1>
            {missionStatement}
            </Paper>
            <Paper>
            <div ><img className="pictures" src={require("../pictures/Amarillo.png")} alt="user"></img></div>
            </Paper>
            
        </Container>
        
    </div>
}

export default Home;