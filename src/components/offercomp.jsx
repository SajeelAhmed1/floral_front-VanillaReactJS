import React from 'react'
import offer from '../assets/Elements/offer.png'
import '../components/offercomp.css'

export default function Offercomp() {
  return (
    <div>
        <img src={offer} alt="" />
        <div className='offertxtt'> 
            <h1 >HELLO SUMMER</h1> <br /> <h2 className='saletxt' >Sale 10%</h2>
            <button onClick={console.log("NOPPPP")}>
                Shop Now
            </button>
        </div>

    </div>
  )
}
