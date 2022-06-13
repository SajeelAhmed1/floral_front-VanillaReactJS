import React from 'react'
import './content2.css';
import Offercomp from '../offercomp';
import Productfour from '../productfour';

export default function Content2() {
  return (
    <div className='container'>
      <h1>
        Shop By Collection
      </h1> <span><br /> <p>All category of jenstore</p></span>
      

      <div className='c2main' >
      
        <Offercomp className='offer'/>
        <Productfour className='p4'/>

    </div>
    </div>)
    


  
}
