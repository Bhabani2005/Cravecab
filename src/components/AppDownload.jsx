import React from 'react'
import { assets } from '../assets/assets/assets'

function AppDownload() {
  return (
    <div className='m-auto mt-24 text-3xl text-center font-medium' id='app-download'>
      <p>For better experience download <br />Cravecabs app</p>
      <div className="flex justify-center gap-3 mt-10">
        <img className=' max-w-44 transition duration-500 cursor-pointer hover:scale-105' src={assets.play_store} alt="" />
        <img  className=' max-w-44 transition duration-500 cursor-pointer hover:scale-105' src={assets.app_store} alt="" />
      </div>
    </div>
  )
}

export default AppDownload
