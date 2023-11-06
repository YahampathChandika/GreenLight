import React, { useState } from "react";
import "../assets/scss/Login.css"; // Import your CSS file for styling
import { useNavigate  } from "react-router-dom";
import Swal from 'sweetalert2'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  // Set default username and password
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    // Add your login logic here
    if (username === 'green' && password === 'Green123') {
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
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Incorrect Credentials !',
      })
      console.log("Login failed");
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h1>WELCOME !</h1>
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
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="password-toggle-button"
            onClick={togglePasswordVisibility}
          >
            <FontAwesomeIcon
              icon={showPassword ? faEyeSlash : faEye}
            />
          </button>
        </div>
        <button className="btn btn-primary login-button" onClick={handleLogin}>
          Log In
        </button>
      </div>
    </div>
  );
};

export default Login;
