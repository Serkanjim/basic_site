import React, { Component } from 'react'

const UserContext = React.createContext();

const reducer = (state,action) =>{

if(action.type == "DELETE_USER"){
  return{
    ...state,
    users: state.users.filter(user => action.user.payload !== user.id)
  }
}
else{
  return state
}

}

export class UserProvider extends Component {
    state = {
    users:[
        {
        id: 1,
        name: "Serkan",
        department: "Developer",
        salary: "10000",
        mail:   "",
        password:  "serkan12345",
        imageUrl: "",

      },
      {
        id: 2,
        name: "Eylul",
        department: "Developer",
        salary: "5000",
        password:  "eylul12345",
        mail:   "",
        imageUrl: "fsdfdfsdsdfsdfd", 
        
      },
      {
        id: 3,
        name: "Omer",
        department: "Developer",
        salary: "20000",
        password:  "omer12345",
        mail:   "",
        imageUrl: "", 
        
      }
    ],
    
  }

  render() {  //this.props.children symbolize app component and this props automatically send by react
    return (
      <UserContext.Provider value ={this.state}>
        {this.props.children} 

      </UserContext.Provider>
    )
  }
}
const UserConsumer = UserContext.Consumer;

export default UserConsumer;