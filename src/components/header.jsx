import React from 'react'
import { FaSearch,FaPhone,FaTruck,FaShoppingBasket,FaUser } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import './header.css';
import companylogo from '../assets/Elements/companylogo.PNG';

export default function Header() {
  return (
        <nav>
            
            
            <ul>
                
                <li> <span> <FiMail />  </span> info@sample.com</li>
                <li> <span> <FaPhone />  </span>  +1234567890</li>
            </ul>
            <div className='logo'><img src={companylogo} alt="ff" /></div>
            
            <div className='search'>
                <ul> 
                    <li><FaUser /></li>
                    <li><FaShoppingBasket /></li>
                    <li><FaTruck /></li>
                    <li><FaSearch /></li>
    
                </ul>

            </div>
            
        </nav>
    
  )
}
