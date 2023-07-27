  import { FormControl } from '@mui/material';
  import React, { Component, useState } from 'react'
  import ShowAndHidePassword from './ShowAndHidePassword';
  var uniqid = require("uniqid");
  import { IconButton } from '@mui/material';
  import { InputLabel } from '@mui/material';
  import { InputAdornment } from '@mui/material';
  import { Input } from '@mui/material';
  import { Visibility, VisibilityOff } from '@mui/icons-material';
  import { useNavigate } from 'react-router-dom';
  import ProfileUser from './ProfileUser';

  function SignUpUser(){


      const user = {
        id: uniqid(),
        name:  "",
        password:  "",
        email:   "",
        imageUrl: "",       //or file
        //imageSize: 90,    //area of photo
      };

      const[name,setName] =useState("");
      const[password,setPassword] =useState("");
      const[showPassword, setShowPassword] = useState(false);
      const[email,setEmail] =useState("");
      const [successMessage, setSuccessMessage] = useState("");
      const [directedMessage, setDirectedMessage] = useState("");
      const [failedMessage, setFailedMessage] = useState("");
      const navigate = useNavigate();
      
      const handleClickShowPassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword); // To toggle whether to show the password
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
      
      const handleSubmit = async e => {
        e.preventDefault();
        try {
          const body = { user_name: name, user_email: email, user_password: password};
          console.log("sJSON.stringify(body)",JSON.stringify(body));
          const token = localStorage.getItem('token');
          const response = await fetch("http://localhost:5000/register",{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)
          });

          if (!response.ok) {
            // Eğer fetch işlemi başarısızsa (HTTP durum kodu 400 ve üzeri)
            const errorData = await response.json();
            throw new Error(errorData.message);
          }


          const data = await response.json();
          const user_id = data.user_id;
          console.log(data.success);
          console.log(data);
          if (data.success && data.token) {
            handleLoginSuccess(data.token, user_id);
          } else {
            setFailedMessage("Invalid credentials. Please try again.");
            setTimeout(() => {
              setFailedMessage("");
            }, 5000);
          }

          setSuccessMessage("Succesfully registered!");
          setDirectedMessage("You are being redirected to the page!")
          
         
        } catch (error) {
          console.error(error.message); 
          
          window.alert("Error: " + error.message);
          setTimeout(() => {
            setFailedMessage("");
          }, 5000); 
        }
      }
      
      const handleLoginSuccess = (token, user_id) => {
        localStorage.setItem('token', token); // Token'ı tarayıcı Local Storage'a kaydediyoruz
        setSuccessMessage("Successfully registered!");
        navigate(`/profile/${user_id}`); // Kullanıcının profil sayfasına yönlendiriyoruz
      };
      

      return (
        <center>

        <div className='col'>
        <div className='message'>
        <p>{successMessage}</p>
        <p>{directedMessage}</p>
        </div>
    
          <div className='form'>
          <div className='card-header'>
              <h4>Register</h4>
          </div>
          <div className='card-body'>
              <form className='usernameform' onSubmit={handleSubmit}>

                  
                  <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input 
                      
                      type="text"
                      name="name"
                      id="name"
                      placeholder='Enter Name'
                      className= "form-control" 
                      value ={name}
                      onChange={e =>setName(e.target.value)}
                      />
                  </div>


                  <div className="form-group">
                          <label htmlFor="email">E-mail</label>
                          <input 
                          
                          type="text"
                          name="e-mail"
                          id="email"
                          placeholder='Enter E-mail'
                          className= "form-control" 
                          value ={email}
                          onChange={e =>setEmail(e.target.value)}

                          />
                          
                      </div>

                      
                  <div className="form-group">
                <label className="form-group" htmlFor="password">
                  Password
                </label>{" "}
                <br />
                <div className="form-control-password">
                  <Input
                    placeholder={"Enter Password"}
                    type={showPassword ? "text" : "password"}
                    onChange={(e) => setPassword(e.target.value)} // Şifre değeri state'e atanır
                    value={password} // Şifre değeri state'ten alınır
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton onClick={handleClickShowPassword} onMouseDown={(e) => e.preventDefault()}>
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                      }
                      />
                    </div>
                  </div>
                  
                  
                  <button className = "btn btn-danger btn-block " type = "submit">Register</button>
                  
              </form>
          </div>
          </div>
        </div>
        </center>
      )


  }
  
  export default SignUpUser;