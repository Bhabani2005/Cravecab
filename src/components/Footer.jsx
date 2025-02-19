import React from 'react'
import { assets } from '../assets/assets/assets'

function Footer() {
  return (
    <div className=' flex flex-col items-center gap-5 pt-20 mt-24' style={{color:'#d9d9d9', backgroundColor:'#323232', padding:'20px 8vw'}} id='footer'>
      <div className="w-full grid gap-20 " style={{gridTemplateColumns:'2fr 1fr 1fr'}}>
        <div className="flex flex-col items-start gap-5">
            <img src={assets.logo} alt='' height='80px' width='80px'/>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos atque labore debitis illo, impedit quae eveniet ea libero? Beatae, mollitia.</p>
            <div className="flex flex-row gap-4 w-10">
                <img className='cursor-pointer' src={assets.facebook_icon} alt=''/>
                <img className='cursor-pointer' src={assets.twitter_icon} alt=''/>
                <img className='cursor-pointer' src={assets.linkedin_icon} alt=''/>
            </div>
        </div>
        <div className="flex flex-col items-start gap-5">
            <h2 className='text-3xl font-medium text-white'>COMPANY</h2>
            <ul >
                <li className='mb-2 cursor-pointer'>Home</li>
                <li className='mb-2 cursor-pointer'>About us</li>
                <li className='mb-2 cursor-pointer'>Delivery</li>
                <li className='mb-2 cursor-pointer'>Privacy policy</li>
            </ul>
        </div>
        <div className="flex flex-col items-start gap-5 ">
            <h2 className='text-3xl font-medium text-white'> Get In Touch</h2>
            <ul >
                <li className='cursor-default'>+91-7438029843</li>
                <li className='cursor-default'>contact@cravecabs.com</li>
            </ul>
        </div>
      </div>
      <hr className='w-full h-0.5 mt-5 mb-5 bg-gray-400 border-none '/>
      <p className="footer-copyright">Copyright 2024@ Cravecabs.com- All Right Reserved.</p>
    </div>
  )
}

export default Footer
