import React from 'react'
import nav_data from "../data/nav_data"
import './datanavbar.css';

export default function Datanavbar() {
    console.log(nav_data);
    const listItems = nav_data.map((item)=> 
    
    <div className='apidiv' key={item.id}> 

        <ul className='jsonul'>
            <li>{item.nav_item}</li>
        </ul>
            
        

    </div>)
  return (
    <div className='main'>
         
          
              {listItems}
              
          
      
    </div>
  )
}
