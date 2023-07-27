import React from 'react'
import SignUpUser from '../components/SignUpUser'
import { Padding } from '@mui/icons-material'

export default function SignUp() {
  return (
    <div>
      
       
      <div style={{ width : 350, height : 60, margin : "auto"}}>
        Create an Account Now!</div>
       <div id= "AddUserForm">
        
                      <SignUpUser/>
          </div>

    </div>
  )
}
