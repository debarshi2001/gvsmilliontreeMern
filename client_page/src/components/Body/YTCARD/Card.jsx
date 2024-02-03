import React from 'react';
import './Card.css'
import ImageDataApi from '../ImageDataAPI'
export default function Card() {

    const Data = ImageDataApi
    function DisplayData(info){
        return(
            <img src={info.image} alt="" srcset="" className='image_card' />
        )
    }
    return (
        <div className="main_card">
            {Data.map(DisplayData)}
            {/* <img src="/Photos/SideBar/Photo1.jpg" alt="" srcset="" className='w-100'/> */}
        </div>
    );
}
