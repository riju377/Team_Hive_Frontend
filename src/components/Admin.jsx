import { Grid, Typography } from '@mui/material';
import * as React from 'react';
import Allcomp from './Allcomp';
import AppliedComp from './AppliedComp';
import CreatedComp from './CompCreated';
import CreateComp from './CreateComp';
import './dashboard.css'
const Admindb = (props) => {

    return (
        <>
            <div className="userdb">
                <Grid container spacing={2}>

                    <Grid item xs={12} sm={8}>
                        <Typography className="heading" variant='h4' margin={2} >
                            Applicants
                        </Typography>
                        <div className="allcomp">
                           <CreatedComp/>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                            {/* <AppliedComp className="apldcomp" /> */}
                            <CreateComp/>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default Admindb