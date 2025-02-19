import React from 'react'
import Sidebar from './Sidebar'
import {assets} from '../assets/assets.js'
function Navbar() {
  return (
    <div className='flex justify-between items-center'>
      <img className='logo' src={assets.logo2} height='80px' width='100px' alt="" />
      <img className='profile' src={assets.profile} width='80px' alt="" />
    </div>
  )
}

export default Navbar
