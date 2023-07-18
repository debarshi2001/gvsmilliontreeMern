import React from 'react';
import axios from 'axios';
import './Members.css'
import { useState } from 'react';
import { useEffect } from 'react';

export default function Members() {

  const [item, setItem] = useState([])
  
  const getData = async () => {
    const { data } = await axios.get('https://154.41.253.161:8000/fetch');
    console.log(data)
    setItem(data)
  }

  
 

  useEffect(() => {
    getData();
  }, []);


  function allMembers(info) {

    return (
      <div className=' row p-2 m-1' id="Records">
        <span className='col'>{info.id}</span>
        <span className='col'>{info.name}</span>
        <span className='col'>{info.email}</span>
        <span className='col'>{info.phone}</span>
        <span className='col'>{info.amount}</span>
      </div>
    )
  }


  return (
    <div>
      <div className="d-flex flex-column align-items-center m-2">
        <h2>All Members</h2>
        
        <div className="container text-center d-flex flex-column">
          <div className="row fs-5 p-3 m-1" id="Heading">
            <span className='col'>No</span>
            <span className='col'>Name</span>
            <span className='col'>Email</span>
            <span className='col'>Phone</span>
            <span className='col'>Donation</span>


          </div>
          {
            item.map(allMembers)
          }
        </div>

      </div>
    </div>
  );
}
