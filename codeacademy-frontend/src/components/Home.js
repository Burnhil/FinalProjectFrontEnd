import React from 'react';
import { Paper, Container } from '@material-ui/core';


const Home = (props) => {

    //create mission statement string to be displayed
    let missionStatement = "Care Amarillo is an operating system that is accessible to a diverse group of people.  This system will be available 24 hours a day, 7 days a week to support the community.  Used by human services and emergency shelters this system will make lives better in our community.  Information from these different providers will be current and up to date with types of services offered, volunteering information as well as contact and website information.  Emergency shelters provide emergency short-term housing and warming needs.  Total number of beds offered by these providers will be updated as beds become available.   With quick access and up to date information, clients will be able to see locations that have short term housing, warming stations, food pantries, clothing closets, and beds.  Care Amarillo is about helping the community as a whole, by caring for one another we will all become better members of our great city and become better at building relationships. "

    return <div>
        {/**create layout for mission statement and city picture */}
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