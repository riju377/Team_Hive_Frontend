import { Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Api from './api';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
const CreatedComp = (props) => {
  const {id} = useParams();
  const [comp, setComp] = React.useState([]);
  const [user, setUser] = React.useState(id)
  const [userD, setUserD] = React.useState();
  const fetchComp = async () => {
    try {
        console.log(user)
      const res = await Api.get(`/comp/${user}/compCreated`);
      if (res.status === 200) {
        // const data = await res.json();
        console.log(res.data.user.compCreated)
        setComp(res.data.user.compCreated)
        }
    }
    catch (e) { console.log(e) }
  }

  const fetchUser = async () => {
    try {
      const res = await Api.get(`/user/${user}/user`);
      if (res.status === 200) {
        // const data = await res.json();
        // console.log(res.data.data)
        setUserD(res.data.data)
        }
    }
    catch (e) { console.log(e) }
  }

  const acceptComp = async(comp, user) => {
    try {
      const data =  await fetch(`http://localhost:3000/comp/${user}/accept/${comp}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "POST",
            Accept: "application/json",
        }
    })
    console.log(data)
    const res = await data.json();
    console.log(res)
    if(data.status === 200){
      console.log(data)
      setTimeout(() => {
        toast.success(res.msg, {
            position: "top-center",
        });
    }, 100);
    fetchComp();
    }
    } catch (error) {
      console.log(error)
    }
  }

  const rejectComp = async(comp, user) => {
    try {
      const data =  await fetch(`http://localhost:3000/comp/${user}/reject/${comp}`, {
        method: "POST"
    })
    console.log(data)
    const res = await data.json();
    console.log(res)
    if(data.status === 200){
      console.log(data)
    }
    } catch (error) {
      console.log(error)
    }
  }
  React.useEffect(()=>{
    fetchComp();
    fetchUser()
  }, [])
    // const details = [...comp]
    const [expanded, setExpanded] = React.useState(false);

  const handleChange =
    (panel) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
    return(
        <>
        
        {comp.map((comp) => (
            <div className='p-1 m-1'>
      <Accordion className='cont' key={comp._id} expanded={expanded === comp._id}  onChange={handleChange(comp._id)}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant='h5' className='p-2'>{comp.name}</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Grid container spacing={2}>
        <Grid item sm={8}>
        <Typography  align='left'>
           {comp.description}
          </Typography>
        <Typography  align='left'>
           Team Size: {comp.memberReq}
          </Typography>
          <Typography  align='left'>
           No. of Members more needed: {comp.memberLeft}
          </Typography>
          <Typography  align='left'>
           Deadline: {comp.deadline}
          </Typography>
          <Typography  align='left'>
           Date of Competition: {comp.competitionDate}
          </Typography>
          {/* <ul>
            {comp.applicants.map((app)=>(
                <li>
                    <p>{app.user.fname}</p>
                    <button>Accept</button>
                    <button>Reject</button>
                </li>
            ))}
          </ul> */}
          <Grid container spacing={0}>
          <Grid item xs={10} >
          <TableContainer className="cont"  component={Paper} sx={{maxHeight:550, width:400}}>
      <Table sx={{ minWidth: 350}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>User Name</TableCell>
            <TableCell align="center">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {comp.applicants.map((row) => (
            <TableRow
              key={row.user._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" width={150}>
                {row.user.fname} {row.user.lname}
              </TableCell>
              <TableCell align="center" width={350}>
              <Button 
              className='me-2'
        variant="contained"
        color="success"
        onClick={() => {
          acceptComp(comp._id, row.user._id)
        }}
      >
        Approve
      </Button>
      <Button
        variant="contained"
        color="error"
        onClick={() => {
          rejectComp(comp._id, row.user._id)
        }}
      >
        Decline
      </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Grid>
    <Grid item xs={2} classname='ms-3 ps-4 pb-2'>
    <TableContainer className="cont pb-2"  component={Paper} sx={{maxHeight:550, width:205}}>
      <Table sx={{ minWidth: 175}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Approved Users</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {comp.acceptedApp.map((row) => (
            <TableRow
              key={row.user._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" width={250}>
                {row.user.fname} {row.user.lname}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Grid>
    </Grid>
        </Grid>
        {/* <Grid item sm={4} direction='row-reverse'>
        {/* <Typography align='right' gutterBottom={true}>
        <Button variant='contained' onClick={()=>{acceptComp(comp._id)}}>Accept</Button>
        </Typography>
        <Typography align='right' gutterBottom={true}>
        <Button variant='contained' color='success'>Reject</Button>
        </Typography> */}
        {/* </Grid> */}
        </Grid>
          
        </AccordionDetails>
      </Accordion>
      </div>
        ))}

        </>
    )
}

export default CreatedComp;