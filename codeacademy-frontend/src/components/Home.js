import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Grid, CardMedia, Paper, Container } from '@material-ui/core';


const Home = (props) => {

    let missionStatement = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisis mauris sit amet massa vitae tortor condimentum lacinia quis. Convallis posuere morbi leo urna molestie at elementum. Integer vitae justo eget magna fermentum. Tempor nec feugiat nisl pretium fusce id velit ut. Velit euismod in pellentesque massa placerat duis ultricies. Mauris pharetra et ultrices neque ornare. In hendrerit gravida rutrum quisque non tellus orci ac auctor. Blandit libero volutpat sed cras ornare. Non odio euismod lacinia at quis risus sed vulputate odio.";

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