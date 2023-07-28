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
  import { Helmet, HelmetProvider } from "react-helmet-async";
  import FlowStreamPage from './pages/FlowStreamPage';
  function App() {
    const [count, setCount] = useState(0);
  
    function handleClick() {
      setCount(count + 1);
    }
  
    return (
      <HelmetProvider>
        <div>
          <Helmet>
            <html lang="en" />
            <title>{"Your Default Title"}</title>
            <meta name="description" content="Your default description" />
          </Helmet>
  
          <Navbar />
  
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <Helmet>
                    <title>{"Home Page"}</title>
                    <meta name="description" content="This is the home page" />
                  </Helmet>
                  <Home />
                </div>
              }
            />
            <Route
              path="/register"
              element={
                <div>
                  <Helmet>
                    <title>{"Register Page"}</title>
                    <meta name="description" content="This is the register page" />
                  </Helmet>
                  <SignUp />
                </div>
              }
            />
            <Route
              path="/flowstream"
              element={
                <div>
                  <Helmet>
                    <title>{"Flowstream Page"}</title>
                    <meta name="description" content="This is the flowstream page" />
                  </Helmet>
                  <FlowStreamPage />
                </div>
              }
            />
            {/* Yeni eklenen profil sayfası rotası */}
            <Route
              path="/profile/:user_id"
              element={
                <div>
                  <Helmet>
                    <title>{"Your profile page"}</title>
                    <meta name="description" content="Your profile page" />
                  </Helmet>
                  <ProfileUser />
                </div>
              }
            />
            <Route
              path="/login"
              element={
                <div>
                  <Helmet>
                    <title>{"Login Page"}</title>
                    <meta name="description" content="This is the login page" />
                  </Helmet>
                  <Login />
                </div>
              }
            />
            <Route
              path="*"
              element={
                <div>
                  <Helmet>
                    <title>{"No Page"}</title>
                    <meta name="description" content="Page not founded" />
                  </Helmet>
                  <NoPage />
                </div>
              }
            />
          </Routes>
        </div>
      </HelmetProvider>
    );
  }
  
  export default App;
  