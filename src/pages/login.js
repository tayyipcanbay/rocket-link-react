import React from "react";
import '../style/login.css';


function Login() {
  const loginHandler = (e) => {
    e.preventDefault();
    console.log("login");
  };
  return (
<<<<<<< HEAD
    <div className="main" >
      <div className="login">
        <h1>Log in!</h1>
        <form>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button onClick={loginHandler} type="submit">Login</button>
        </form>
        </div>
    </div>
=======
    
    <body>
      <link href="https://fonts.googleapis.com/css2?family=Jost:wght@500&display=swap" rel="stylesheet"></link>
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
>>>>>>> 2436bdc (yeni login)
    );
}

export default Login;
