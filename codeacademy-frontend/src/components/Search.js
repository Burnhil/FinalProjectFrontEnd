import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Grid, CardMedia, Paper, Container } from '@material-ui/core';
import Provider from '../containers/Provider.js';
import Map from '../containers/Map.js'

const Search = (props) => {
    return <div className="search">
        <Grid
            container
            direction="row"
            justify="left"
            spacing="2"
        >
            <Grid item item xs={5}>
                <Paper xs={4}>
                    <Provider />
                </Paper>
            </Grid>
            <Grid item item xs={5}>
                <Paper xs={4}>
                    <Map />
                </Paper>
            </Grid>
        </Grid>
    </div>
}

export default Search;