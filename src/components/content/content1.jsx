import React from 'react'
import './content1.css';
import who from '../../assets/Elements/who.png';
import { FaArrowDown } from 'react-icons/fa';


export default function Content1() {
  return (
    <div className='container' >
        <div className='uppertext'>
            <p>Never face a day with out flowers</p>
       
            <FaArrowDown   />
        </div>
      
      <img className='whobanner' src={who} alt="ff" />
      <div className='whotxt'> 
        <h1 >WHO  WE  ARE ?</h1> <br /> <p> t is a long established fact  established fact ttablished fact th is a long established fact  established fact thag established fact  established fact thag established fact  established fact that a reader will be distracted by the r Lorr will be distractedean</p>
        
      </div>

    </div>
    
  )
}
