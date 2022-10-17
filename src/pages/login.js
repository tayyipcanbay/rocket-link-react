import React from "react";
import '../style/login.css';
function Login() {
	const [username, setUsername] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [email , setEmail] = React.useState("");
	const checkUsername=()=>  {
		if(username.length<5){
			alert("Username must be more than 5 characters");
			return false;
		}
		return true;
	}
	const checkPassword=()=>  {
		if(password.length<8){
			alert("Password must be more than 8 characters");
			return false;
		}
		return true;
	}
	const checkEmail=()=>  {
		if(email.length<8){
			alert("Email must be more than 8 characters");
			return false;
		}
		return true;
	}
	const handleLogin=(e)=>{
		e.preventDefault();
		if(checkUsername() && checkPassword()){
			let data={
				firstName:username,
				username:username,
				password:password,
			}
			loginRequest(data);
		}
		else{
			return false;
		}
	}
	const handleRegister=(e)=>{
		e.preventDefault();
		if(checkUsername() && checkPassword() && checkEmail()){
			let data={
				firstName:username,
				username:username,
				password:password,
				email:email
			}
			registerRequest(data);
		}
		else{
			return false;
		}
	}
	const loginRequest=(data)=>{
		fetch("http://localhost:9000/api/users/login",{
			method:"POST",
			headers:{
				"Content-Type":"application/json"
			},
			body:JSON.stringify(data)
		})
		.then(res=>res.json())
		.then(data=>{
			console.log(data);
		})
		.catch(err=>{
			console.log(err);
		})
	}
	const registerRequest=(data)=>{
		fetch("http://localhost:9000/api/users/register",{
			method:"POST",
			headers:{
				"Content-Type":"application/json"
			},
			body:JSON.stringify(data)
		})
		.then(res=>res.json())
		.then(data=>{
			console.log(data);
		})
		.catch(err=>{
			console.log(err);
		})
	}
  return (
		<div className="out" >
			<div className="main">  	
				<input type="checkbox" id="chk" aria-hidden="true"></input>
			<div className="signup">
				<form onSubmit={handleRegister} name="form1">
					<label htmlFor="chk" aria-hidden="true">Register</label>
					<input onChange={(e)=>{setUsername(e.target.value)}} type="text"  name="username" placeholder="Username" required=""></input>
					<input onChange={(e)=>{setEmail(e.target.value)}} type="email"  name="email" placeholder="Email" required=""></input>
					<input onChange={(e)=>{setPassword(e.target.value)}} type="password"  name="pswd" placeholder="Password" required=""></input>
					<button >Register</button>
				</form>
			</div>
			<div className="login">
					<form onSubmit={handleLogin} name="form2">
						<label htmlFor="chk" aria-hidden="true">Login</label>
						<input onChange={(e)=>{setUsername(e.target.value)}} type="text"  name="username" placeholder="Username" required=""></input>
						<input onChange={(e)=>{setPassword(e.target.value)}} type="password"  name="pswd" placeholder="Password" required=""></input>
						<button onClick={handleLogin} >Login</button>
					</form>
				</div>
			</div>
		</div>
    );
}

export default Login;
