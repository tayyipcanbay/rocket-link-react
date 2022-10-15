import React from "react";
import '../style/login.css';
import {Link} from 'react-router-dom';


function Login() {
	// create a function for checks password length and characters
	const checkPassword = (e) => {
		let password=e.target.value;
		// check password length
		if (password.length < 8) {
			return false;
		}
		// check password characters
		let hasNumber = false;
		let hasUpperCase = false;
		let hasLowerCase = false;
		let hasSpecial = false;
		for (let i = 0; i < password.length; i++) {
			if (password.charCodeAt(i) >= 48 && password.charCodeAt(i) <= 57) {
				hasNumber = true;
			} else if (password.charCodeAt(i) >= 65 && password.charCodeAt(i) <= 90) {
				hasUpperCase = true;
			} else if (password.charCodeAt(i) >= 97 && password.charCodeAt(i) <= 122) {
				hasLowerCase = true;
			} else {
				hasSpecial = true;
			}
		}
		if (hasNumber && hasUpperCase && hasLowerCase && hasSpecial) {
			e.target.style.border = "3px solid green";
			return true;
		} else {
			e.target.style.border = "3px solid red";
			return false;
		}
	}
	const checkUsername = (e) => {
		let username = e.target.value;
		if (username.length < 8) {
			e.target.style.border = "3px solid red";
			return false;
		} else {
			e.target.style.border = "3px solid green";
			return true;
		}
	}
	//create a function for check email



  return (
		<div className="out" >
			<div className="main">  	
				<input type="checkbox" id="chk" aria-hidden="true"></input>
			<div className="signup">
				<form name="form1">
					<label htmlFor="chk" aria-hidden="true">Sign up</label>
					<input type="text" onChange={checkUsername} name="txt" placeholder="Username" required=""></input>
					<input type="email" name="email" placeholder="Email" required=""></input>
					<input type="password" onChange={checkPassword} name="pswd" placeholder="Password" required=""></input>
					<button >Sign up</button>
				</form>
			</div>

			<div className="login">
					<form name="form1">
						<label htmlFor="chk" aria-hidden="true">Login</label>
						<input type="text" onChange={checkUsername} name="username" placeholder="Username" required=""></input>
						<input type="password" onChange={checkPassword} name="pswd" placeholder="Password" required=""></input>
						<button >Login</button>
					</form>
				</div>
			</div>
		</div>
    );
}

export default Login;
