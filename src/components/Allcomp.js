import { Button, Grid } from '@mui/material';
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
import { ToastContainer, toast } from "react-toastify";
import Api from './api';
import { useParams } from 'react-router-dom';
const style = {
  position: 'absolute' ,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Allcomp = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const {id} = useParams();
  const [comp, setComp] = React.useState([]);
  const [user, setUser] = React.useState(id)
  const [userD, setUserD] = React.useState();
  
  const fetchComp = async () => {
    try {
      const res = await Api.get(`/comp/${id}/competition`);
      if (res.status === 200) {
        // const data = await res.json();
        console.log(res.data.data)
        setComp(res.data.data.map(e => {
          if (e.deadline) { 
            e.deadline = new Date(e.deadline).toLocaleDateString();
            e.competitionDate = new Date(e.competitionDate).toLocaleDateString();
           }
          return { ...e }
        }))
        // setComp(res.data.data)
        }
    }
    catch (e) { console.log(e) }
  }

  const fetchUser = async () => {
    try {
      const res = await Api.get(`/user/${user}/user`);
      if (res.status === 200) {
        // const data = await res.json();
        console.log(res.data.data)
        setUserD(res.data.data)
        }
    }
    catch (e) { console.log(e) }
  }

  const applyComp = async(comp) => {
    try {
      const data =  await fetch(`http://localhost:3000/user/${id}/apply/${comp}`, {
        method: "POST"
    })
    console.log(data)
    const res = await data.json();
    if(data.status === 200){
      console.log(res);
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
        <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
      Type in Your Request
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <TextField
          id="outlined-multiline-static"
          label="Message"
          fullWidth
          multiline
          rows={4}
          defaultValue="Please accept my join request"
        />
    </Typography>
    <Button variant="contained" color="success" classnName="m-2">
            Submit
          </Button>
  </Box>
</Modal>

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
        </Grid>
        <Grid item sm={4} direction='row-reverse'>
        <Typography align='right' gutterBottom={true}>
        <Button variant='contained' onClick={()=>{applyComp(comp._id)}}>Apply</Button>
        </Typography>
        <Typography align='right' gutterBottom={true}>
        <Button variant='contained' color='success' onClick={handleOpen}>Add message</Button>
        </Typography>
        </Grid>
        </Grid>
        </AccordionDetails>
      </Accordion>
      </div>
        ))}
        <ToastContainer/>
        </>
    )
}

export default Allcomp;