import React from "react";
import '../style/login.css';


function Login() {
	function CheckPassword() {
					{ 
						var dec=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
						if(document.form1.pswd.match(dec)) 
						{ 
						alert('Correct, try another...')
						return true;
						}
						else
						{ 
						alert('Wrong...!')
						return false;
						}
					} 	
				}	
  return (
		<div className="out" >
			<div class="main">  	
				<input type="checkbox" id="chk" aria-hidden="true"></input>
			<div class="signup">
				<form name="form1">
					<label for="chk" aria-hidden="true">Sign up</label>
					<input type="text" name="txt" placeholder="User name" required=""></input>
					<input type="email" name="email" placeholder="Email" required=""></input>
					<input type="password" name="pswd" placeholder="Password" required=""></input>
					<button onClick={CheckPassword} >Sign up</button>
				</form>
			</div>

			<div class="login">
					<form name="form1">
						<label for="chk" aria-hidden="true">Login</label>
						<input type="email" name="email" placeholder="Email" required=""></input>
						<input type="password" name="pswd" placeholder="Password" required=""></input>
						<button onClick={CheckPassword} >Login</button>
					</form>
				</div>
			</div>
		</div>
    );
}

export default Login;
