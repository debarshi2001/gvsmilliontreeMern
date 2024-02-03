import React, {useEffect,useState} from 'react';
import axios from 'axios'
import Footer from '../Footer/Footer';
import './Photos.css'
export default function Photos() {
  const [images, setImages] = useState(["images"]);

  useEffect(() => {
    axios.get('http://192.168.29.199:4001/get-image')
      .then(res => {
        setImages(res.data.data)
      })
      .catch(err => console.log(err))
  }, []);

  return (
    <div>
      <h2 className='galary_heading'>Galary</h2>
      <div className="galary">
        {images.map(data => {
          return (
            <div className="galary_image">
              <img src={`http://192.168.29.199:4001/` + data.image} alt="" srcset="" />
            </div>
          )
        })}
      </div>
      <Footer />
    </div>
  );
}
