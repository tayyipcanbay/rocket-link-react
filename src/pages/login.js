import React from "react";
import '../style/login.css';
function Login() {
	const handleLogin=(e)=>{
		e.preventDefault();
	}
	const handleRegister=(e)=>{
		e.preventDefault();
	}
  return (
		<div className="out" >
			<div className="main">  	
				<input type="checkbox" id="chk" aria-hidden="true"></input>
			<div className="signup">
				<form onSubmit={handleRegister} name="form1">
					<label htmlFor="chk" aria-hidden="true">Register</label>
					<input type="text"  name="username" placeholder="Username" required=""></input>
					<input type="email"  name="email" placeholder="Email" required=""></input>
					<input type="password"  name="pswd" placeholder="Password" required=""></input>
					<button >Register</button>
				</form>
			</div>
			<div className="login">
					<form onSubmit={handleLogin} name="form1">
						<label htmlFor="chk" aria-hidden="true">Login</label>
						<input type="text"  name="username" placeholder="Username" required=""></input>
						<input type="password"  name="pswd" placeholder="Password" required=""></input>
						<button onClick={handleLogin} >Login</button>
					</form>
				</div>
			</div>
		</div>
    );
}

export default Login;
