import React from 'react'
import {assets} from '../assets/assets.js'
import { NavLink } from 'react-router-dom'
import './Sidebar.css'

function Sidebar() {
  return (
    <div className='w-1/5 min-h-screen ' style={{border: '1.5px solid #a9a9a9', borderTop:'0', fontSize:'max(1vw,10px)'}}>
      <div  className="pt-12 pl-6 flex flex-col gap-5 ">
        <NavLink id='sidebar-options' to='/add' className="flex items-center gap-3 border-r-0 cursor-pointer border-2 border-gray-400" style={{ padding:'8px 10px', borderRadius:'3px 0px 0px 3px'}}>
          <img src={assets.add_icon} alt="" />
          <p className='custom:hidden'>Add Items</p>
        </NavLink>
        <NavLink id='sidebar-options' to='/List' className="flex items-center gap-3 border-r-0
        border-2 border-gray-400 cursor-pointer  " style={{ padding:'8px 10px', borderRadius:'3px 0px 0px 3px'}}>
          <img src={assets.order_icon} alt="" />
          <p className='custom:hidden'>List Items</p>
        </NavLink>
        <NavLink id='sidebar-options' to='/orders' className="flex items-center gap-3 border-r-0 border-2 border-gray-400 cursor-pointer " style={{ padding:'8px 10px', borderRadius:'3px 0px 0px 3px'}}>
          <img src={assets.order_icon} alt="" />
          <p className='custom:hidden'>Orders</p>
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar
