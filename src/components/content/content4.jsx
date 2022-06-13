import React from 'react'
import './content4.css';
import Offercomp2 from '../offercomp2';
import Productfour from '../productfour';

export default function Content4() {
  return (
    <div className='container'>
      <h1>
        Shop By Collection
      </h1> <span><br /> <p>All category of jenstore</p></span>
      

      <div className='c2main' >
        <Productfour className='p4'/>
        <Offercomp2 className='offer'/>
        

    </div>
    </div>)
    


  
}
