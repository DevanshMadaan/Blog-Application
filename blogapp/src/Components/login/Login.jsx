import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import './login.css';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
export default function Login() {
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  const history=useHistory()
  const handleSubmit=(e)=>{
    e.preventDefault();
    axios.post('http://localhost:3001/login',{email,password})
    .then(result=>{console.log(result)
    history.push('/')
    })
    .catch(err=>console.log(err))
  }
 
  return (
    <div className="login">
    <span className="loginTitle">Login</span>
    <form className="loginForm" onSubmit={handleSubmit}>
      <label>Email</label>
      <input className="loginInput" type="text" placeholder="Enter your email..." onChange={(e)=>setEmail(e.target.value)}/>
      <label>Password</label>
      <input className="loginInput" type="password" placeholder="Enter your password..." onChange={(e)=>setPassword(e.target.value)}/>
      <button className="loginButton">Login</button>
    </form>
    <span className='orspan'> OR</span>
     <Link to="/register" style={{ textDecoration: 'none'}}><button className="loginRegisterButton">Register</button></Link>
  </div>
  )
}
