import React from 'react'
import offer2 from '../assets/Elements/offer2.png'
import '../components/offercomp2.css'

export default function Offercomp2() {
  return (
    <div>
        <img src={offer2} alt="" />
        <div className='offertxt'> 
            <h1 >Happy Mother's Day</h1> <br /><p>Lorem ipsum dolor sit amet consectetur adi eos quibusdam</p> <br /> <h2 className='saletxt' >-30%</h2>
            <button onClick={console.log("NOPPPP")}>
                Shop Now
            </button>
        </div>

    </div>
  )
}
