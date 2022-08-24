import React from 'react'
import CardSlider from '../Components/CardSlider/CardSlider'
import Timer from '../Components/TimerCard/Timer'
import HomeLeftCard from '../Components/HomeLeftCard/Match';
import HomeRightCard from '../Components/HomeRightCard/Right';
import Slider from '../Components/HomeSlider/Slider';

import './home.css'
const Home = () => {
  return (
    <React.Fragment>
        <div className='hometopslider'>
          <CardSlider/>
          <Timer/>
        </div>
        <div className='section'>
          <HomeLeftCard/>
          <Slider/>
          <HomeRightCard/>
        </div>
        
    </React.Fragment>
  )
}

export default Home
