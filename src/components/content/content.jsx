import React from 'react'
import './content.css';
// import Topbanner from '../assets/Elements/Topbanner.jpg';

import Topbanner from '../../assets/Elements/Topbanner.jpg';



export default function Content() {
  return (
    <div >
      
      <img className='tbanner' src={Topbanner} alt="ff" />
      <div className='tbannertxt'> 
        <h1 >Unveil the untold story of exquisite flowers</h1> <br /> <p>Other sort of text etc etcOther sort of text etc etcOther sort of text etc etcOther sort of text etc etcOther sort of text etc etc</p>
        <button onClick={console.log("huhu")}>
          Shop Now
      </button>
      </div>
      
    </div>
    
  )
}
