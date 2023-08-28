import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from "react-toastify";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Api from './api';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs, { Dayjs } from 'dayjs';
import { useParams } from 'react-router-dom';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();
export default function CreateComp(props) {
    const {id} = useParams()
    const [value, setValue] = React.useState(
        dayjs(Date.now())
    );
    const [deadline, setDeadline] = React.useState(
        dayjs(Date.now())
    );
    const handleChange = (newValue: Dayjs | null) => {
        setValue(newValue);
    };
    const handleDeadline = (newValue: Dayjs | null) => {
        setDeadline(newValue);
    };
    const [name, setname] = React.useState('');
    const [memberReq, setmemberReq] = React.useState('');
    const [email, setemail] = React.useState('');
    const [phNumber, setphNumber] = React.useState('');
    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            const res = await fetch(`http://localhost:3000/comp/${id}/createComp`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "POST",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    name: name,
                    memberReq: memberReq,
                    deadline:deadline,
                    competitionDate:value,
                }),
            })
            const userj = await res.json();
            console.log(res, userj);
            if (res.status === 200) {
                console.log(userj);
                setTimeout(() => {
                    toast.success(userj.message, {
                        position: "top-center",
                    });
                }, 100);
                setname('')
                setmemberReq('')
                setphNumber('')
                setemail('')
            } else {
                if (userj.error) {
                    console.log(userj.error)
                    toast.warn(userj.error, {
                        position: "top-center",
                    });
                }
            }
        }
        catch (e) {
            console.log(e);
            toast.warn(e, {
                position: "top-center",
            });

        }
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className="shadow card container" ></div>
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography className='heading' component="h1" variant="h5">
                        Look for Teammates
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    autoComplete="given-name"
                                    name="Name"
                                    required
                                    fullWidth
                                    id="ame"
                                    value={name}
                                    label="Name"
                                    autoFocus
                                    onChange={(e) => { setname(e.target.value) }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    type='number'
                                    id="lastName"
                                    label="Members Required"
                                    name="required"
                                    value={memberReq}
                                    onChange={(e) => { setmemberReq(e.target.value) }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    fullWidth
                                    label="Competition Date"
                                    margin="normal"
                                    inputFormat="MM/DD/YYYY"
                                    value={value}
                                    onChange={(newValue) => {
                                        setValue(newValue);
                                    }}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </LocalizationProvider>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    fullWidth
                                    label="Deadline"
                                    margin="normal"
                                    inputFormat="MM/DD/YYYY"
                                    value={deadline}
                                    onChange={(newValue) => {
                                        setDeadline(newValue);
                                    }}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </LocalizationProvider>
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Create Competition
                        </Button>
                    </Box>
                </Box>
                <ToastContainer />
            </Container>
        </ThemeProvider>
    );
}