import React from 'react';
import {Grid, Paper } from '@material-ui/core';
import Provider from '../containers/Provider.js';
import Map from '../containers/Map.js'

//create search/locations page by adding provider component and map
const Search = (props) => {
    return <div className="searchProviderMap">
        <Grid
            container
            direction="row"
            justify="left"
            spacing="5"
        >
            <Grid item xs={5}>
                <Paper >
                    <Provider />
                </Paper>
            </Grid>
            <Grid item xs={7} >
                <Paper >
                    <Map />
                </Paper>
            </Grid>
        </Grid>
    </div>
}

export default Search;