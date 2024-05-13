import React,{useState,useEffect} from 'react';
import './Background.css';
import video1 from '../../assets/video1.mp4';
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';

function Background({ playStatus, heroCount }) { // Destructuring props here


  if (playStatus) {
    return (
      <div>
        <video className='background' autoPlay loop muted src={video1} typeof='video/mp4'></video>
      </div>
    );
  } else if (heroCount === 0) {
    return <img src={image1} className='background' alt="" />;
  } else if (heroCount === 1) {
    return <img src={image2} className='background' alt="" />;
  } else if (heroCount === 2) {
    return <img src={image3} className='background' alt="" />;
  } 
  
console.log(heroCount)
}


export default Background;
