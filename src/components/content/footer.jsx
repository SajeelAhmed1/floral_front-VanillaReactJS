import React from 'react'
import './footer.css';

// import Offercomp from '../offercomp';
import footer from '../../assets/Elements/footer.png'
import nletter from '../../assets/Elements/nletter.PNG'
// import FaFacebookSquare from 'react-icons/fa/FaFacebookSquare'

export default function Footer() {
  return (
    <div className='container' >
      <div className="wrapper4footer">
            <div className="col1">
                <ul>
                  <li ><h1>Floral Smart</h1></li>
                  <li><p>Welcome to the world of well preserved exquisite flowers</p></li>
                  <li>Social Links</li>
                  
                </ul>
            </div>
            <div className="col2">
            <ul>
                  <li><b>Quick Links</b></li>
                  <li>two</li>
                  <li>three</li>
                  <li>two</li>
                  <li>three</li>
                  <li>two</li>
                  <li>three</li>
                </ul>
            </div>
            <div className="col3">
            <ul>
                  <li><b>Contact Infromation</b></li>
                  <li>ABC Street</li>
                  <li>info@sample.com</li>
                  <li>123456789
                  </li>
                  <li>
                    <img  src={nletter} alt="" />
                  </li>
                </ul>
            </div>
            
    </div>
        <div className='uppertext'>
            
    
            <img className='footer' src={footer} alt="ff" />
        </div>
        
        
  
  
        
    

    </div>)
    


  
}
