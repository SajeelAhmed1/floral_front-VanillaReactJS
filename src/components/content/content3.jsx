import React from 'react'
import './content3.css';
// import Offercomp from '../offercomp';
import Productrowfour from '../productrowfour';
import wedbanner from '../../assets/Elements/wedbanner.png'

export default function Content3() {
  return (
    <div className='container' >
        <div className='uppertext'>
            <h1>Wedding</h1><br /><p>A preview of exqusiste array of flower options</p>
    
            <img className='wedbanner' src={wedbanner} alt="ff" />
        </div>
  
  
        <div className='prodrow' > 
            <Productrowfour  />
        </div>
    

    </div>)
    


  
}
