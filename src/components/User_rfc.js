import React from 'react' //react function component example

function User_rfc(props) {                  // props kullanimi
  return (          
    <div>
          <h3>Name: Serkan Sahinoglu </h3>
          <h3>Depertment: Developer </h3>
          <h3>Salary: 10000 </h3>
          <h2>{props.title}</h2>
    </div>
  )
}


export default  User_rfc;

