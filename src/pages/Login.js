import React from 'react'
import LoginUser from '../components/LoginUser'

export default function Login() {
  return (
    <div>
       <div style={{ width : 270, height : 60, margin : "auto"}}>
        Welcome to Login</div>

       <div id= "AddUserForm">
                      <LoginUser/>
          </div>
    </div>
  )
}
