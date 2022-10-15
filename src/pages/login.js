import React from "react";
import '../style/login.css';


function Login() {
  return (
    <div className="main" >
      <div className="login">
        <h1>Log in!</h1>
        <form>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
        </form>
        </div>
    </div>
    );
}

export default Login;
