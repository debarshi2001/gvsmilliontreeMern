import React from 'react';
import { Outlet, Link } from "react-router-dom";
import './Header.css'


export default function Header() {
  return (
    <>
      <div className='navbar'>
        <div className="logo">
          <h1 className='logo-name'><span style={{ 'color': 'red' }}>GVS</span>Million Tree Club</h1>
          <p>Organised By-Gramin Vikash Society</p>
          <p>Reg No.-IV/190302140/2017</p>
          
        </div>

        <div className='options'>
          <Link to="/">Home</Link>
          <Link to="/photos">Photos</Link>
          <Link to="/membership">
            Membership</Link>
        </div>


      </div>
      


      <Outlet />

    </>
  );
}
