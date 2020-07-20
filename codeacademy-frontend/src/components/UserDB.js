import React, { Component } from 'react';
import { Grid, Accordion, AccordionSummary, AccordionDetails, Typography, GridList } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

class UserDB extends Component {
    constructor(props) {
        super(props);
    }

    parseJWT = (token) => {
        //grab the middle part of the token.
        let authData = token.split('.')[1];
        // JWTs are base64 encoded, so decode it.
        let decodedAuthData = atob(authData);
        // the decoded data should be a JSON object, so parse it as such.
        let decodedAuthDataJSON = JSON.parse(decodedAuthData);
        console.log(decodedAuthDataJSON);
        return decodedAuthDataJSON;

    }

    render() {
        console.log(`this is user database*************** = ${this.props.token}`)
        console.log(this.props.token);
        // let authorizedUser = this.parseJWT(this.props.token);
        // console.log(authorizedUser);
        // console.log(authorizedUser.UserType)

        // //verify userType to show user only components to modify
        // if(authorizedUser.UserType === "Admin"){

        // }else{

        // }


        return <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >                    <div >
                        <Typography variant="h6">Add user</Typography>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <form onSubmit={(e) => this.parseJWT()} >

                            <Grid container direction='row'>
                                <Grid item><input type="text" placeholder="userid" name="userid" required /></Grid>
                                <Grid item><input type="password" placeholder="password" name="password" required /></Grid>
                                <Grid item><input type="submit" value="Click to Login" /></Grid>
                            </Grid>
                        </form>
                    </Typography>
                </AccordionDetails>
            </Accordion>

        </div>;
    }
}

export default UserDB;