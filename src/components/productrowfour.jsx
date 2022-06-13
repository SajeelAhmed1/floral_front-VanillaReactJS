import React from 'react'



import './productrowfour.css';
import f1 from '../assets/Elements/f1.PNG'
import { FaRegStar } from 'react-icons/fa'

export default function Productrowfour() {
  return (
   
        <div className="wrapper">
            <div className="item">
                <img src={f1} alt="" />
                <h5>Red Roses</h5>
                <i><FaRegStar /> <FaRegStar /> <FaRegStar /> <FaRegStar /> <FaRegStar />  </i>
                <p>$200</p>
            </div>
            <div className="item">
                <img src={f1} alt="" />
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
                <img src={f1} alt="" />
                <h5>Red Blossoms</h5>
                <i><FaRegStar /> <FaRegStar /> <FaRegStar /> <FaRegStar /> <FaRegStar />  </i>
                <p>$200</p>
            </div>
    </div>
    
  )
}
