import React,{useState,useRef} from 'react'
import Background from "./components/background/Background"
import Navbar from "./components/navbar/Navv.jsx"

import './App.css'




function App() {


  let heroData=[

    {text1:"Dive  into",text2:"what you love"},
    {text1:"Indulge",text2:"your passions"},
    {text1:"Give in to ",text2:" your passion"},

  ]
  const [heroCount,setheroCount]=useState(2);
  const [playStatus,setPlayStatus]=useState(false);
  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount}/>
<Navbar/>
    </div>
  )
}

export default App;