import { Grid, Typography } from '@mui/material';
import * as React from 'react';
import Allcomp from './Allcomp';
import AppliedComp from './AppliedComp';
import './dashboard.css'
const Userdb = (props) => {

    return (
        <>
            <div className="userdb">
                <Grid container spacing={2}>

                    <Grid item xs={12} sm={8}>
                        <Typography className="heading" variant='h4' margin={2} >
                            Oppurtunities
                        </Typography>
                        <div className="allcomp">
                            <Allcomp user={props.user} />
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                            <AppliedComp user={props.user} />
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default Userdb