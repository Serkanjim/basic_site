import React, { Component } from 'react'
import User_rcc from ".User_rcc";
import UserConsumer from '../context';

class Users extends Component {
  render() {
        return (
            <UserConsumer>
                {
                    value =>{
                        const {users}=value;
                        return (

                            <div>
                            {
                                
                                users.map(user =>{
                                    return (
                                        <User_rcc
                                            key = {user.id}
                                            id = {user.id}
                                            name = {user.name}
                                            department = {user.department}
                                            salary = {user.salary}
                                            mail = {user.mail}
                                            password = {user.password}
                                        
                                        />
                                    )
                                })
                            }
                        </div>
                        )
                    }
                }

            </UserConsumer>
        )
    
   }
}

export default Users;