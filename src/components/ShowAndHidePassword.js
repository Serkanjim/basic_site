import React from "react";
import { IconButton } from '@mui/material';
import { InputLabel } from '@mui/material';
import { InputAdornment } from '@mui/material';
import { Input } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';


const ShowAndHidePassword = () => {
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

	return (
		<div 
			style={{
				marginLeft: "30%",
				
			}}

		>
			<h4></h4>
			<InputLabel htmlFor="standard-adornment-password">
			
			</InputLabel>
			<Input 
			
				type={values.showPassword ? "text" : "password"}
				onChange={handlePasswordChange("password")}
				value={values.password}
				endAdornment={
					<InputAdornment position="end" className="showpassword">
						
						<IconButton
							onClick={handleClickShowPassword}
							onMouseDown={handleMouseDownPassword}
						>
							{values.showPassword ? <Visibility /> : <VisibilityOff />}
						</IconButton>
					</InputAdornment>
				}
			/>
		</div>
	);
};

export default ShowAndHidePassword;
