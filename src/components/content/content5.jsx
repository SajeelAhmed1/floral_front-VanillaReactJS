import React from 'react'
import './content5.css';
// import Offercomp from '../offercomp';
import selsec from '../../assets/Elements/selsec.png'

export default function Content5() {
  return (
    <div className='container' >
        <div className='uppertext'>
            
    
            <img className='selbanner' src={selsec} alt="ff" />
        </div>
        <div className='seltxtt'> 
            <h1 >Sale upto 40%</h1> <br /> <p>Other sort of text etc etcOther sort of text etc etcOther sort of text etc etcOther sort of text etc etcOther sort of text etc etc</p>
            <button onClick={console.log("huhu")}>
            Shop Now
            </button>
      </div>
  
  
        
    

    </div>)
    


  
}
