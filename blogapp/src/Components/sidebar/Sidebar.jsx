import React from 'react';
import './sidebar.css';
import { Link } from 'react-router-dom';
export default function Sidebar() {
  return (
    <div className='Sidebarleft'>
        <ul className='list'>
       <li className='listitem'><Link className="link" to="/" style={{ textDecoration: 'none'}}>
                Home
              </Link></li>
       <li className='listitem'><Link className="link" to="/" style={{ textDecoration: 'none'}}>
                About
              </Link>
       </li>
  <li className='listitem'><Link className="link" to="/login" style={{ textDecoration: 'none'}}>
               Login
              </Link></li>
  <li className='listitem'><Link className="link" to="/create" style={{ textDecoration: 'none'}}>
                Create
              </Link></li>
        </ul>
      
    </div>
  )
}
