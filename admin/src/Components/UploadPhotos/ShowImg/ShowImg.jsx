import React from 'react'

function ShowImg(props) {
    const { images } = props
    return (
        <div className='img_plate'>
            {images.map(data => {
                return (
                    <img src={`http://192.168.29.199:4001/` + data.image} alt="Nil" srcset="" className='img_card' />
                )
            })}
        </div>
    )
}

export default ShowImg