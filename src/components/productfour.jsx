import React from 'react'



import './productfour.css';
import f1 from '../assets/Elements/f1.PNG'
import f2 from '../assets/Elements/f2.PNG'
import f3 from '../assets/Elements/f3.PNG'
import { FaRegStar } from 'react-icons/fa'

export default function Productfour() {
  return (
   
        <div className="wrapper1">
            <div className="item">
                <img src={f1} alt="" />
                <h5>Red Roses</h5>
                <i><FaRegStar /> <FaRegStar /> <FaRegStar /> <FaRegStar /> <FaRegStar />  </i>
                <p>$200</p>
            </div>
            <div className="item">
                <img src={f2} alt="" />
                <h5>Flower Lilies</h5>
                <i><FaRegStar /> <FaRegStar /> <FaRegStar /> <FaRegStar /> <FaRegStar />  </i>
                <p>$200  <span > <s className='oldprice'> $250</s> </span></p>
            </div>
            <div className="item">
                <img src={f1} alt="" />
                <h5>White Daisies</h5>
                <i><FaRegStar /> <FaRegStar /> <FaRegStar /> <FaRegStar /> <FaRegStar />  </i>
                <p>$200 <span > <s className='oldprice'>$250</s> </span></p> 
            </div>
            <div className="item">
                <img src={f3} alt="" />
                <h5>Red Blossoms</h5>
                <i><FaRegStar /> <FaRegStar /> <FaRegStar /> <FaRegStar /> <FaRegStar />  </i>
                <p>$200</p>
            </div>
    </div>
    
  )
}
