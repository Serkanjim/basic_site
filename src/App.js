  import React, { useState, useEffect } from 'react';
  import User_rfc from './components/User_rfc';
  import User_rcc from './components/User_rcc';
  import Demo from './components/Demo';
  import Navbar from './components/Navbar';
  import SvgMaterialIcons from './components/SvgMaterialIcons';
  import AddUser from './components/AddUser';
  import BoxSx from './components/BoxSx';
  import { width } from '@mui/system';
  import MiddleBoxSx from './components/MiddleBoxSx';
  import { Box } from '@mui/material';
  import Sidebar from './components/Sidebar';
  import Typography from '@mui/material/Typography';
  import Button from '@mui/material/Button';
  import ListDividers from './components/ListDividers';
  import ShowAndHidePassword from './components/ShowAndHidePassword';
  import {Routes, Route} from "react-router-dom";
  import Home from './pages/Home';
  import Login from './pages/Login';
  import SignUp from './pages/SignUp';
  import NoPage from './pages/NoPage';
  import Profile from './pages/Profile'; 
  import ProfileUser from './components/ProfileUser';

  function App() {
    const [count, setCount] = useState(0);
  []

    function handleClick() {
      setCount(count + 1);  
    }


    return (
            <div>
              <Navbar/>
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/register" element={<SignUp/>}/>
                <Route path="/register" element={<Profile/>}/>
                {/* Yeni eklenen profil sayfası rotası */}
                <Route path="/profile/:user_id" element={<ProfileUser/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="*" element={<NoPage/>}/>
              </Routes>
    </div>

      /*
      {(typeof backendData.users == "undefined" ) ? (
          <p>Loading</p>
      ): (
          backendData.users.map((user, i )=>(
            <p key ={i}> {user}</p>
          ))
      )}
      
      */
      
    
    );
  }

  function MyButton({ count, onClick }) {
    return (
      <button onClick={onClick}>
        Clicked {count} times
      </button>
    );
  }

  export default App;


