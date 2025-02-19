import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets/assets'
import { StoreContext } from '../context/StoreContext'

function FoodItem({id,name,price,image,description}) {

  const{cartItems,addToCart,removeFromCart,url}=useContext(StoreContext);

  return (
    <div className='w-full m-auto rounded-2xl shadow-lg transition duration-300 ' style={{animation:'fadeIn 1s'}}>
      <div className="relative">
        <img className='w-full rounded-2xl' src={url+"/images/"+image} alt=''/>
        {!cartItems[id]
          ?<img className='w-9 absolute bottom-4 right-4 cursor-pointer rounded-3xl' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt=''/>
          :<div className='absolute bottom-4 right-4 flex items-center gap-2 p-2 rounded-3xl bg-white'>
            <img className='w-8' onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt=''/>
            <p>{cartItems[id]}</p>
            <img className='w-8' onClick={()=>addToCart(id)} src={assets.add_icon_green} alt=''/>
          </div>

        }
      </div>
      <div className='p-5'>
        <div className='flex justify-between items-center mb-3'>
            <p className='text-xl font-medium'>{name}</p>
            <img className='w-16' src={assets.rating_starts} alt=''/>
        </div>
        <p className='text-gray-500 text-xs '>{description}</p>
        <p className="text-orange-500 text-2xl mt-2  ">${price}</p>
      </div>
    </div>
  )
}

export default FoodItem
