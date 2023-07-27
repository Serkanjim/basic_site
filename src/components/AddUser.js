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
function AddUser(){

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

    const user = {
      id: uniqid(),
      name:  "",
      password:  "",
      department:   "",
      salary:   "",
      email:   "",
      imageUrl: "",       //or file
      //imageSize: 90,    //area of photo
    };

    const[name,setName] =useState("")
    const[password,setPassword] =useState("")
    const[department,setDepartment] =useState("")
    const[salary,setSalary] =useState("")
    const[email,setEmail] =useState("")

    function handleSubmit(event){
      event.preventDefault();
    }
    

    return (
      <center>

      <div className='col'>
        <div className='form'>
        <div className='card-header'>
            <h4>Edit Profile</h4>
        </div>
        <div className='card-body'>
            <form className='usernameform'>

                <div className='imagepicker'>
                Click Photo to Change
                <UploadPicture/>
            
                </div>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input 
                    
                    type="text"
                    name="name"
                    id="name"
                    placeholder='Enter Name'
                    className= "form-control" 
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
                        className= "form-control" />
                    </div>

                <div className="form-group">
                
                    <label className="form-group" htmlFor="password">Password</label> <br />
                    
                    <div className="form-control-password" >
                      
                    <Input 
        placeholder={'Enter Password'}
				type={values.showPassword ? "text" : "password"}
				onChange={handlePasswordChange("password")}
				value={values.password}
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
                
                
                <button className = "btn btn-danger btn-block " type = "submit">Save</button>
            </form>
        </div>
        </div>
      </div>
      </center>
    )


}

export default AddUser;