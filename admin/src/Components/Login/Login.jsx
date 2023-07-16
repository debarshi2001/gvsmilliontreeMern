import './Login.css'
import { useState } from 'react';

import { useNavigate } from "react-router-dom";
export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [authenticated, setauthenticated] = useState(false);
  const users = [{ username: "gvs@gmail.com", password: "gvstree" }];
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const account = users.find((user) => user.username === username);
    if (account && account.password === password) {
        setauthenticated(!authenticated)
        console.log(authenticated)
        localStorage.setItem("auth",authenticated);
        navigate("/dashboard")
    }
  };

  return (
    <div>
      <div className="login_container">
        <h2>Admin Login</h2>
        <form action="" onSubmit={handleSubmit }>
          <input type="text" name="username" placeholder="user" onChange={(e) => setUsername(e.target.value)} />
          <input type="password" placeholder="password" name="pass" id="" onChange={(e) => setPassword(e.target.value)} />
          <input type="submit" value="Login"  />
        </form>
      </div>
    </div>
  );
}
