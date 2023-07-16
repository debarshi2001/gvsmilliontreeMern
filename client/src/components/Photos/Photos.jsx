import React from 'react';
import Footer from '../Footer/Footer';
import './Photos.css'
import PhotoAPI from './PhotoAPI'
// import { useState } from 'react';
export default function Photos() {

  const Data=PhotoAPI
  function Photocard(info) {
    
    return (
      <div className="galary_image">
        <img src={info.image} alt="" srcset="" />

      </div>
    )
  }
  return (
    <div>
      <h2 className='galary_heading'>Galary</h2>
      <div className="galary">
        {Data.map(Photocard)}
      </div>
      <Footer />
    </div>
  );
}
