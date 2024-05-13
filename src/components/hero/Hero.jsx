import './Hero.css'

import pauseicon from '../../assets/pause_icon.png'
import playicon from '../../assets/play_icon.png'

import arrowbtn from '../../assets/arrowbtn.png'
function Hero({heroData,setHeroCount,heroCount,setPlayStatus,playStatus}) {
  return (
    <div className='hero'>
 <div className="hero-text">
  
  
  
  <p>{heroData.text1}</p>
  <p>{heroData.text2}</p>
  
  </div>   
  <div className="hero-explore">
    
    <p>Explore the features</p>
    <img src={arrowbtn} alt="" />
    </div> 
    <div className="hero-dot-play">
      
      <ul className="hero-dots" >
        <li onClick={()=>setHeroCount(0)} className={heroCount===0?"hero-dot orange":"hero-dot"}></li>
        <li  onClick={()=>setHeroCount(1)} className={heroCount===1?"hero-dot orange":"hero-dot"}></li>
        <li  onClick={()=>setHeroCount(2)} className={heroCount===2 ?"hero-dot orange":"hero-dot"}></li>
      {console.log(heroCount)}
      
      </ul>
      <div className="hero-play">

<img onClick={()=>{setPlayStatus(!playStatus)}} src={playStatus?pauseicon:playicon} alt="" />

      </div>
      </div> 
    </div>
  )
}

export default Hero;
