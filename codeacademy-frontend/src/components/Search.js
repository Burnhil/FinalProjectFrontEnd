import React from 'react';
import {Grid, Paper } from '@material-ui/core';
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
            <Grid item >
                <Paper xs={4}>
                    <Provider />
                </Paper>
            </Grid>
            <Grid item >
                <Paper xs={4}>
                    <Map />
                </Paper>
            </Grid>
        </Grid>
    </div>
}

export default Search;