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
            spacing="1"
        >
            <Grid item xs={5}>
                <Paper >
                    <Provider />
                </Paper>
            </Grid>
            <Grid item xs={5} >
                <Paper >
                    <Map />
                </Paper>
            </Grid>
        </Grid>
    </div>
}

export default Search;