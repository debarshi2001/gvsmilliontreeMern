import React from 'react';
import './Body.css'
import Card from './YTCARD/Card';

export default function Body() {
  return (
    <div>
      <div className="main-body">
        <div className="sub-body1">
          <div className="about">
            <h2>WHAT WE ARE?</h2>
            <div className="line"></div>
            <p className="body-text">
              Gramin Vikash Society is a trust who believes not only 5th June but every day is a World  Environmental Day.In order to that we started a tree plantation and awareness program GVS MILLION TREE CLUB, where every citizen of india can join and be a part of our journey.
            </p>
          </div>
          <div className="mission">
            <h2>OUR MISSION</h2>
            <div className="line"></div>
            <p className="body-text">
              Tree plantations today aim to increase tree growth in order to lessen climate change, improve air quality, and create a healthier environment for all. Less greenhouse gas emissions are produced as a result of trees' ability to absorb carbon dioxide from the air. They also produce oxygen, which is necessary for life. Trees help to improve the air quality by eliminating toxins from the atmosphere. Additionally, trees help to stop soil erosion and offer wildlife both food and shelter.
              <br />
              Here are a few current goals for planting trees in more detail:

              <li>to plant <span style={{ "color": "red", "text-decoration": "underline" }}>1 Million trees</span> by the year 2032.</li>
              <li>In metropolitan areas, 20% more trees should be planted.</li>
              <li>to reforest areas like deserts and coastal areas that are most at risk from climate change.</li>
              <li>to educate the populace</li>
            </p>
          </div>
          <div className="vision">
            <h2>OUR VISION</h2>
            <div className="line"></div>
            <p className="body-text">
              A vision for tree plantation is a future where trees are abundant and healthy, and where everyone has access to clean air and a healthy environment. This vision can be achieved by planting trees in urban and rural areas, and by protecting existing forests accross the India.<br /><br />

              The following are a few advantages of tree plantations:<br />

              <li>Mitigate climate change: Trees absorb carbon dioxide from the atmosphere, which helps to reduce greenhouse gas emissions. This is important because greenhouse gases trap heat, which contributes to climate change.</li>
              <li>Improved respiratory health is possible thanks to trees' ability to filter airborne contaminants.</li>
              <li>Trees provide shade in hot weather, which can lower the risk of heatstroke and other heat-related illnesses. This also helps to lessen the heat island effect.</li>
            </p>
          </div>
        </div>
        <div className="sub-body2">
          <div className="frame">
            <h6>Our Environment Our Life</h6>
            <div className="yt_card">
              <Card />
            </div>
          </div>
        </div>

      </div>
      <h4 className='qoute'>Let's Make Our Earth Green Together</h4>
    </div>
  );
}
