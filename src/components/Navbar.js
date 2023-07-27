import React from "react";
import {
  AppBar,
  Toolbar,
  Typography
} from "@material-ui/core";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Password } from "@mui/icons-material";



function Navbar() {


  return (
    <div className="navbardiv">
    <AppBar position="static">

      <Toolbar>
      <Link to="/" className="logolink">
        <Typography variant="h4" className="logo">
          cakebook
        </Typography>
        </Link>
          <div className="navlinks">
            <Link to="/" className="link">
              Home
            </Link>
            <Link to="/login" className="link">
              Login 
            </Link>
            <Link to="/register" className="link">
              Register
            </Link>
          </div>
      </Toolbar>
    </AppBar>
    </div>
  );
}
export default Navbar;