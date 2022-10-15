import React from "react";
import '../style/login.css';


function Login() {
  return (
		<body>
			<div class="main">  	
				<input type="checkbox" id="chk" aria-hidden="true"></input>
			<div class="signup">
				<form>
					<label for="chk" aria-hidden="true">Sign up</label>
					<input type="text" name="txt" placeholder="User name" required=""></input>
					<input type="email" name="email" placeholder="Email" required=""></input>
					<input type="password" name="pswd" placeholder="Password" required=""></input>
					<button>Sign up</button>
				</form>
			</div>

			<div class="login">
					<form>
						<label for="chk" aria-hidden="true">Login</label>
						<input type="email" name="email" placeholder="Email" required=""></input>
						<input type="password" name="pswd" placeholder="Password" required=""></input>
						<button>Login</button>
					</form>
				</div>
			</div>
		</body>
    );
}

export default Login;
