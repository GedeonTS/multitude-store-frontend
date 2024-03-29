import { useState } from 'react'
import './Login.scss'
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = () => {
      // Implement your login logic here
      console.log('Logging in with:', { username, password });
    };
  
    return (
      <div className="login-container">
      <div className="login-container-inner1">
      <div className="login-container-inner2">
      <div className="login-container-inner3">
        <h2>Login</h2>
        <form className="login-form">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
  
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
  
          <button type="button" onClick={handleLogin}>
            Login
          </button>

          <a className="google-connect" href='/google'>Connect with Google</a>
        </form>
      </div>
      </div>
      </div>
      </div>
    );
}

export default Login
