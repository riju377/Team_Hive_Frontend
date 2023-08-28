// // import * as React from 'react';
// // import AppBar from '@mui/material/AppBar';
// // import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// // import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// // import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';
// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import CssBaseline from '@mui/material/CssBaseline';
// import useScrollTrigger from '@mui/material/useScrollTrigger';
// import Box from '@mui/material/Box';
// import Container from '@mui/material/Container';
// import Slide from '@mui/material/Slide';
// import {  Link, useNavigate
// } from "react-router-dom";
// // import api from '../pages/api';
// // interface Props {
// //   window?: () => Window;
// //   children: React.ReactElement;
// // }

// function HideOnScroll(props) {
//   const { children, window } = props;
//   const trigger = useScrollTrigger({
//     target: window ? window() : undefined,
//   });

//   return (
//     <Slide appear={false} direction="down" in={!trigger}>
//       {children}
//     </Slide>
//   );
// }

// export default function HideAppBar(props) {
//       const pages = [['Home', '/'], ['Apply', '/apply'], ['Postings', '/create' ], ['All Users', '/alluser']];
//   const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
//   const [anchorElNav, setAnchorElNav] = React.useState();
//   const [anchorElUser, setAnchorElUser] = React.useState();

//   const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };
//   // const navigate = useNavigate();
//   const logout = async() =>{
//     // const response = api.post('/user/logout')
//     // document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
//     // const res =await  api.post("/user/logout",{}, { withCredentials: true });
//     // console.log(res)
//     // if(res.status === 200){
//     //     console.log(res)
//     //     navigate("/login")
//     //     window.location.reload()
//     // }
// }
//   return (
//     <>
//       <h1>TEst</h1>
//       <React.Fragment>
//       <CssBaseline />
//       {/* <HideOnScroll {...props}> */}
//          <AppBar>

//          <Container maxWidth="xl">
//            <Toolbar disableGutters>
//              <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
//              <Typography
//             variant="h6"
//             noWrap
//             component="a"
//             href="/"
//             sx={{
//               mr: 2,
//               display: { xs: 'none', md: 'flex' },
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: 'inherit',
//               textDecoration: 'none',
//             }}
//           >
//             LOGO
//           </Typography> 

//           <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: 'bottom',
//                 horizontal: 'left',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'left',
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: 'block', md: 'none' },
//               }}
//             >
//               {/* {pages.map((page) => (
//                 <MenuItem key={page[0]} onClick={handleCloseNavMenu}>
//                   <Typography textAlign="center"><Link className='nav-link' to={page[1]}>{page[0]}</Link> </Typography>
//                 </MenuItem>
//               ))} */}
//               <MenuItem key={pages[0][0]} onClick={handleCloseNavMenu}>
//                   <Typography textAlign="center"><Link className='nav-link' to={pages[0][1]}>{pages[0][0]}</Link> </Typography>
//                 </MenuItem>
//                 {props.user && props.user.role !== 'Staff' &&   <MenuItem key={pages[1][0]} onClick={handleCloseNavMenu}>
//                   <Typography textAlign="center"><Link className='nav-link' to={pages[1][1]}>{pages[1][0]}</Link> </Typography>
//                 </MenuItem>}
//                 {props.user && props.user.role !=='Staff' &&  props.user.role !=='CompOper' && <MenuItem key={pages[2][0]} onClick={handleCloseNavMenu}>
//                   <Typography textAlign="center"><Link className='nav-link' to={pages[2][1]}>{pages[2][0]}</Link> </Typography>
//                 </MenuItem> }
//                 {props.user && props.user.role !=='Staff' &&  props.user.role !=='CompOper' && <MenuItem key={pages[3][0]} onClick={handleCloseNavMenu}>
//                   <Typography textAlign="center"><Link className='nav-link' to={pages[3][1]}>{pages[3][0]}</Link> </Typography>
//                 </MenuItem>}
//             </Menu>
//           </Box>
//           <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
//           <Typography
//             variant="h5"
//             noWrap
//             component="a"
//             href=""
//             sx={{
//               mr: 2,
//               display: { xs: 'flex', md: 'none' },
//               flexGrow: 1,
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: 'inherit',
//               textDecoration: 'none',
//             }}
//           >
//             LOGO
//           </Typography>
//           <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//             {/* {pages.map((page) => ( */} 

//                <Link className='nav-link' to={pages[0][1]}>
//                <Button
//                 key={pages[0][0]}
//                 onClick={handleCloseNavMenu}
//                 sx={{ my: 2, color: 'white', display: 'block' }}
//               > {pages[0][0]}</Button></Link>



//          {props.user && props.user.role !== 'Staff' &&   <Button
//                 key={pages[1][0]}
//                 onClick={handleCloseNavMenu}
//                 sx={{ my: 2, color: 'white', display: 'block' }}
//               >
//                <Link className='nav-link' to={pages[1][1]}>{pages[1][0]}</Link>
//               </Button> }
//              {props.user && props.user.role !=='Staff' &&  props.user.role !=='CompOper' && <Button
//                 key={pages[2][0]}
//                 onClick={handleCloseNavMenu}
//                 sx={{ my: 2, color: 'white', display: 'block' }}
//               >
//                <Link className='nav-link' to={pages[2][1]}>{pages[2][0]}</Link>
//               </Button>
//              }
//              {props.user && props.user.role !=='Staff' &&  props.user.role !=='CompOper' && <Button
//                 key={pages[3][0]}
//                 onClick={handleCloseNavMenu}
//                 sx={{ my: 2, color: 'white', display: 'block' }}
//               >
//                <Link className='nav-link' to={pages[3][1]}>{pages[3][0]}</Link>
//               </Button>
//              }
//           </Box>

//          {props.user && <Box sx={{ flexGrow: 0 }}>
//             <Tooltip title="Open settings">
//               <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                 <Avatar alt={props.user.fname} src="/static/images/avatar/5.jpg" />

//               </IconButton>
//             </Tooltip>
//             <Menu
//               sx={{ mt: '45px' }}
//               id="menu-appbar"
//               anchorEl={anchorElUser}
//               anchorOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               open={Boolean(anchorElUser)}
//               onClose={handleCloseUserMenu}
//             >
//               {/* {settings.map((setting) => ( 
//                 <MenuItem  onClick={handleCloseUserMenu}>
//                   <Typography textAlign="center">
//                     <div variant="contained" margin="normal" onClick={logout}>Logout</div>
//                   </Typography>
//                 </MenuItem>
//                 <MenuItem  onClick={handleCloseUserMenu}>
//                   <Typography textAlign="center">
//                     <Link className='nav-link' variant="contained" margin="normal" to={`/profile`}>Profile</Link>
//                   </Typography>
//                 </MenuItem>
//               {/* ))}  */}

//             </Menu>
//           </Box>
//          }
//         </Toolbar>
//       </Container>
//         </AppBar> 
//       {/* </HideOnScroll> */}
//       <Toolbar />

//     </React.Fragment>
//     </>



//   );
// }



import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Slide from '@mui/material/Slide';
import { FormControl, Grid, InputLabel, MenuItem, Select } from '@mui/material';
import Api from './api';
import Admindb from './Admin';
import Userdb from './Userdashboard';
import { useParams } from 'react-router-dom';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}


export default function HideAppBar(props: Props) {
  const [type, setType] = React.useState('Admin')
  const handletype = () => {
    if(type === 'Admin'){
      setType('User')
    }
    else{
      setType('Admin')
    }
  }

  const {id} = useParams()
  const [ user, setUser] = React.useState(id);
  const [curUser, setCur] = React.useState('');
  const [users, setUsers] = React.useState([]);
  const handleChange = (e) => {
    setUser(e.target.value)
    console.log(e.target.value)
    document.cookie=`user=${e.target.value}`
    Api.get(`/user/${e.target.value}/user`)
    .then(data => {console.log(data); setCur(data)})
    .catch(err => console.log(err))
    window.location.href = `/user/${e.target.value}`
    // console.log(data)
  }
  const fetchUser = async () => {
    try {
      // setLoad(true)
      console.log(id)
      const res = await Api.get('/user');
      console.log(res)
      if (res.status === 200) {
        console.log(res.data)
        setUsers(res.data.data)
        }
    }
    catch (e) { console.log(e) }
  }
  const fetchUserIn = async () => {
    try {
      // setLoad(true)
      console.log(id)
      const res = await Api.get(`/user/${id}/user`);
      console.log(res)
      if (res.status === 200) {
        console.log(res.data.data)
        setCur(res.data.data)
        }
    }
    catch (e) { console.log(e) }
  }
  React.useEffect(() => {
    fetchUser();
    fetchUserIn();
  }, [])
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar>
            <Typography variant="h6" component="div" onClick={handletype} sx={{ cursor: 'pointer' } }>
              {type !== 'Admin' ?  'Admin' : 'User'}  
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={0} sm={10}>
              <p className='name'>{curUser.fname} {curUser.lname}</p>
              </Grid>
              <Grid item xs={2}>
              
              <FormControl fullWidth   className='ms-auto'>
              <InputLabel id="demo-simple-select-label">User</InputLabel>
              <Select
             fullWidth
              color='success'
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={curUser._id}
                label="User"
                onChange={handleChange}
              >
              {users.map((user) => (
                <MenuItem key={user._id} value={user._id}>{user.fname} {user.lname}</MenuItem>
              ))}
                
              </Select>
            </FormControl>
              </Grid>
            </Grid>
            {/* {curUser.fname} */}
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      <Container>
      </Container>
      {type === 'Admin' ? <Admindb user={curUser}/> : <Userdb user={curUser}/>}
    </React.Fragment>
  );
}
