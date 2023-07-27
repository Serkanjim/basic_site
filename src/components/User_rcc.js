import React, { Component } from 'react' //react class component example
import PropTypes from 'prop-types'
import Checkbox from '@mui/material/Checkbox';
import UserConsumer from '../context';
import SvgMaterialIcons from './SvgMaterialIcons';
import { Password } from '@mui/icons-material';



class User_rcc extends Component {

  state = {
    test : "Person",
    isVisible : true

  }

/*
  constructor(props){
    super(props);
      
      this.state = {
        test : "Person",
        isVisible : false
      }
    }
  */

    handleChange = () => {
      this.setState({
         isVisible : !this.state.isVisible
      })
    }

    handleDelete = (dispatch,e) => {
      const {id,deleteUser} =this.props;
      dispatch({type : "DELETE_USER",payload: id});
    }


    

  render() {

    //Destructing 
    const{name,department,salary} = this.props;  //instead of write this.props.name we can write just name 
    const{isVisible} = this.state;
  return(
    <UserConsumer>
    {
          value => {
            const {dispatch} = value;

            return (                        // props kullanimi
      <div>
            <nav className="topmenu omega">
              <ul>
              <li><Checkbox
              checked={isVisible}
              onChange={this.handleChange}
              inputProps={{ 'aria-label': 'controlled' }}
            /></li>
              <li><SvgMaterialIcons/></li>
          
              </ul>
            </nav>
            

            <h1>{this.state.test} </h1>
            <h1>{this.state.isVisible} </h1>
            
                {
                isVisible ? <div>
            
                <h3>Name: {name} </h3>  
                <h3>Department: {department} </h3>
                <h3>Salary: {salary} </h3>
                <h3>Mail: {mail} </h3>
                <h3>Password: {Password} </h3>  

                </div> : null
              // if is visible true show else dont
              
              }
              
                
        </div>
        )
        }
    }
    </UserConsumer>
    )

    
  }
}

User_rcc.propTypes =  {

  name: PropTypes.string.isRequired,
  department: PropTypes.string.isRequired,
  salary: PropTypes.string.isRequired,
  mail: PropTypes.string.isRequired,
  Password: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
}

export default User_rcc;


