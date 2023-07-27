import { FormControl } from '@mui/material';
import React, { Component, useState } from 'react'
import ShowAndHidePassword from './ShowAndHidePassword';
var uniqid = require("uniqid");
import { IconButton } from '@mui/material';
import { InputLabel } from '@mui/material';
import { InputAdornment } from '@mui/material';
import { Input } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import UploadPicture from './UploadPicture';
import { useNavigate } from 'react-router-dom';


function LoginUser(){
  const [token, setToken] = useState(""); // // a state to store the token
  const [successMessage, setSuccessMessage] = useState("");
  const [directedMessage, setDirectedMessage] = useState("");
  const [failedMessage, setFailedMessage] = useState("");
    const [values, setValues] = React.useState({
      password: "",
      showPassword: false,
    });

    const handleClickShowPassword = () => {
      setValues({ ...values, showPassword: !values.showPassword });
    };
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
  
    const handlePasswordChange = (prop) => (event) => {
      setValues({ ...values, [prop]: event.target.value });
    };
    const navigate = useNavigate();
    

    const[password,setPassword] =useState("")
    const[email,setEmail] =useState("")

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const body = { user_email: email, user_password: password };
        console.log("sJSON.stringify(body)",JSON.stringify(body));
        const token = localStorage.getItem('token');
        const response = await fetch("http://localhost:5000/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          'Authorization': `Bearer ${token}`,
          body: JSON.stringify(body),
        });
  
        if (!response.ok) {
          // Eğer fetch işlemi başarısızsa (HTTP durum kodu 400 ve üzeri)
          const errorData = await response.json();
          throw new Error(errorData.message);
        }
  
        const data = await response.json();
        const user_id = data.user_id;
  
        if (data.success) {
          handleLoginSuccess(data.token, user_id);
        } else {
          setFailedMessage("Invalid credentials. Please try again.");
          setTimeout(() => {
            setFailedMessage("");
          }, 5000);
        }
      } catch (error) {
        console.error(error);
        window.alert("Error: " + error.message);
        setTimeout(() => {
          setFailedMessage("");
        }, 5000);
      }
    };
    
    const handleLoginSuccess = (token, user_id) => {
      localStorage.setItem('token', token); // Token'ı tarayıcı Local Storage'a kaydediyoruz
      setSuccessMessage("Successfully registered!");
      setTimeout(() => {
        setFailedMessage("");
        navigate(`/profile/${user_id}`);
      }, 500); //0.seconds delay for login attempt
       // Kullanıcının profil sayfasına yönlendiriyoruz
    };


    return (
      <center>

      <div className='col'>
        <div className='form'>
        <div className='card-header'>
            <h4>Login</h4>
        </div>
        <div className='card-body'>
            <form className='usernameform' onSubmit={handleSubmit}>


                <div className="form-group">
                        <label htmlFor="email">E-mail</label>
                        <input 
                        
                        type="text"
                        name="e-mail"
                        id="email"
                        placeholder='Enter E-mail'
                        className= "form-control" 
                        value ={email}
                        onChange={e =>setEmail(e.target.value)}/>
                    </div>

                <div className="form-group">
                
                    <label className="form-group" htmlFor="password">Password</label> <br />
                    
                    <div className="form-control-password" >
                      
                    <Input 
        placeholder={'Enter Password'}
				type={values.showPassword ? "text" : "password"}
				onChange={(e) => setPassword(e.target.value)} // Şifre değeri state'e atanır
        value={password} // Şifre değeri state'ten alınır
				endAdornment={
          
					<InputAdornment position="end" >
            
						<IconButton
            
							onClick={handleClickShowPassword}
							onMouseDown={handleMouseDownPassword}
              
						>
              
							{values.showPassword ? <Visibility /> : <VisibilityOff />}
						</IconButton>
					</InputAdornment>
				}/>

                    </div>
                    

                  
                </div>
                
                
                <button className = "btn btn-danger btn-block " type = "submit">Log in</button>
            </form>
        </div>
        </div>
      </div>
      </center>
    )


}

export default LoginUser;