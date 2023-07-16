import React from 'react';
import './Home.css'
import Carousel from '../Carousel/Carousel';
import Stats from '../Statistics/Stats';
import Body from '../Body/Body';
import Footer from '../Footer/Footer';

export default function Home() {

  return (
    <div>
      <Carousel/>
      <Stats/>
      <Body/>
      <Footer/>
    </div>
  );
}
