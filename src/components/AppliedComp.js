import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import './appliedComp.css';
import Api from './api';
import { useParams } from 'react-router-dom';
const AppliedComp = (props) => {
  const {id }= useParams()
function createData(
    name: string,
    status: string
  ) {
    return { name, status };
  }
  const [userd, setUser] = React.useState([]);
  const fetchUser = async () => {
    try {
      const res = await Api.get(`/user/${id}/user`);
      if (res.status === 200) {
        // const data = await res.json();
        console.log(res.data.data.appliedComp)
        setUser(res.data.data.appliedComp)
        // setComp(res.data.data)
        }
    }
    catch (e) { console.log(e) }
  }
  React.useEffect(()=>{
    fetchUser()
  },[])
  const rows = [
    createData('ABC', 'Accepted'),
    createData('BCD', 'Pending'),
    createData('CDE', 'Rejected'),
    createData('ABC', 'Accepted'),
    createData('BCD', 'Pending'),
    createData('CDE', 'Rejected'),
    createData('ABC', 'Accepted'),
    createData('BCD', 'Pending'),
    createData('CDE', 'Rejected'),
  ];
  return(
    <>
    <Typography className="heading" variant='h4' margin={2} >
        Applied Competition
    </Typography>
    <TableContainer className="cont" component={Paper} sx={{maxHeight:550}}>
      <Table sx={{ minWidth: 250}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Competition Name</TableCell>
            <TableCell align="center">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userd.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  )
}



export default AppliedComp