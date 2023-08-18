import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import './register.css';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
export default function Register() {
  const [uname,setUname]=useState();
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
const history=useHistory()
  const handleSubmit=(e)=>{
    e.preventDefault();
    axios.post('http://localhost:3001/register',{uname,email,password})
    .then(result=>{console.log(result)
    history.push('/login')
    })
    .catch(err=>console.log(err))
  }
  return (
    <div className="register">
    <span className="registerTitle">Register</span>
    <form className="registerForm" onSubmit={handleSubmit}>
    <label>Username</label>
        <input className="registerInput" type="text" placeholder="Enter your username..." onChange={(e)=>setUname(e.target.value)}/>
      <label>Email</label>
      <input className="registerInput" type="text" placeholder="Enter your email..." onChange={(e)=>setEmail(e.target.value)} />
      <label>Password</label>
      <input className="registerInput" type="password" placeholder="Enter your password..." onChange={(e)=>setPassword(e.target.value)}/>
      <button className="registerButton">Register</button>
    </form>
    <span className='orspan'> OR</span>
    <Link to="/login" style={{ textDecoration: 'none'}}>
      <button className="loginRegisterButton">Login</button>
      </Link>
  </div>
  )
}
