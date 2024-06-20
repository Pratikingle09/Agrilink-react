import { React, useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";


import Style from '../../components/auth/auth.module.css'

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = JSON.parse(localStorage.getItem("profile"));

  const navigate = useNavigate();

  useEffect(()=>{
    if(user.isLogin == true)
      {
        alert("user already logged in")
        navigate('/')
      }
  },[])

  const authenticateUser = (e) => {
    e.preventDefault();
    if (email && password) {
      if (user.email == email && user.password == password) {
        user.isLogin=true
        localStorage.setItem('profile',JSON.stringify(user))
        alert("Login Successful");
        navigate('/')
      } else {
        alert("invalid credentials");
      }
    } else {
      console.log("please enter the credentials");
    }
  };
  return (
    <div>
      <form className={Style.login_container}>
      <h1>login</h1>

        <input
          type="email"
          placeholder="Email"
          className={Style.input}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className={Style.input}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button onClick={authenticateUser} className={Style.submit}>Login</button>
      </form>
    </div>
  );
}

export default Login;
