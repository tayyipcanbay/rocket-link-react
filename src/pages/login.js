import React from "react";
import '../style/login.css';


function Login() {
  const loginHandler = (e) => {
    e.preventDefault();
    console.log("login");
  };
  return (
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
    );
}

export default Login;
