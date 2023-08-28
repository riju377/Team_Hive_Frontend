import { Button, Grid } from '@mui/material';
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Api from './api';
import NavBar from './navbar';
import { useParams } from 'react-router-dom';
const Dashboard = (props) => {
    const {id} = useParams()
    const get = () => {
        console.log(id)
    }
    // React.useEffect(()=>{
    //     get()
    // }, [])
    return(
        <>
        {/* <h1>edyg</h1> */}
        <NavBar/>
        </>
    )
}

export default Dashboard;