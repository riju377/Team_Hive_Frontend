import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import { useState } from "react";
import SignUp from './components/signup';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Userdb from './components/Userdashboard';
import CreateComp from './components/CreateComp';
import Admindb from './components/Admin';
import Dashboard from './components/dashboard';
import SignIn from './components/SignIn';
function App() {
  const [login, setLogin] = useState(false)
  const [user, setUser] = useState();
  return (
    <>

      <Router>
      <div className="App container">
        {/* <SignUp/> */}
        {/* <Userdb /> */}
        {/* <CreateComp/> */}
        {/* <Admindb/> */}
        {/* <NavBar/> */}
         <Routes> 
         <Route exact path='/signup' element={<SignUp/>}/>
         <Route exact path='/login' element={<SignIn/>}/>
        
        <Route  path='/user/:id' element={<Dashboard/>}/>

        {/* <Route path='/create' element={<Create/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/addreport' element={<AddReport/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/alluser' element={<Alluser/>}/> */}
      </Routes> 
      </div>
      {/* <NavBar/> */}
      </Router>

    </>
  );
}
export default App;
