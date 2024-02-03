import React from 'react';
import './Stats.css'
import axios from 'axios'
import { useState } from 'react';
import { useEffect } from 'react';
export default function Stats() {
    const [member, setMember] = useState();
    useEffect(() => {
        axios.get('http://154.41.253.161:4001/get_stat').then((res)=>{
            setMember(res.data)
        })
    },[])

    return (
        <>
            <div className="container">
                <span className="text">Trees Planted till now</span>
                <h1 className='number'>40000+</h1>

                <span className="text">
                    {member}+ Members joined
                </span>

            </div>
        </>
    );
}
