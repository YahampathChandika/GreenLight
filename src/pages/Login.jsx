import React, { useState } from "react";
import "../assets/scss/Login.css"; // Import your CSS file for styling
import { useNavigate  } from "react-router-dom";
import Swal from 'sweetalert2'

const Login = () => {
  // Set default username and password
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  

  const handleLogin = () => {
    // Add your login logic here
    if (username === 'bk' && password === 'bkp') {
      console.log("Login successful");
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: 'Signed in successfully'
      })
      navigate("/home")
    } else {
      console.log("Login failed");
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h1>Login</h1>
        <div className="input-container">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-container">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="login-button" onClick={handleLogin}>
          Log In
        </button>
      </div>
    </div>
  );
};

export default Login;
