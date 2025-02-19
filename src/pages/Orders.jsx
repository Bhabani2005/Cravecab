import React, { useState } from 'react'
import axios from "axios"
import {toast} from "react-toastify"
import { useEffect } from 'react';
import {assets} from "../assets/assets"
function Orders({url}) {

  const[orders,setOrders]= useState([]);

  const fetchAllOrders= async () => {
    const response = await axios.get(url+"/api/order/list");
    if(response.data.success){
      setOrders(response.data.data);
      console.log(response.data.data);
    }
    else{
      toast.error("Error")
    }
  }
  const statusHandler= async(event,orderId)=>{
    const response= await axios.post(url+"/api/order/status",{
      orderId,
      status:event.target.value
    })    
    if (response.data.success) {
      await fetchAllOrders();
    }
  }
  useEffect(()=> {
    fetchAllOrders();
  },[])
   return (
    <div className='Order add'>
      <h3 className='ml-8 text-xl mt-3'>Order page</h3>
      <div className="order-list">
        {orders.map((order,index)=>(
          <div key={index} className='order-item grid md:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] md:items-start gap-7 border border-[1px_solid_tomato] md:p-5 my-8  md:text-sm text-[#505050] mx-12 grid-cols-[0.5fr_2fr_1fr] py-4 px-2 text-xs '>
            <img className='md:w-[100%] w-10' src={assets.parcel_icon} alt="" />
            <div>
              <p className='order-item-food font-semibold'>
                {order.items.map((item,index)=>{
                  if (index===order.items.length-1) {
                    return item.name + " x " +item.quantity
                  }
                  else{
                    return item.name + " x " +item.quantity + ", "
                  }
                })}
              </p>
              <p className='order-item-name font-semibold mt-7 mb-1 '>{order.address.firstName+" "+order.address.lastName}</p>
              <div className='order-item-address mb-3'>
                <p>{order.address.street+","}</p>
                <p>{order.address.city+", "+order.address.state+", "+order.address.country+", "+order.address.zipcode}</p>
              </div>
              <p className='order-item-phone'>{order.address.phone}</p>
            </div>
            <p>Items: {order.items.length}</p>
            <p>${order.amount}</p>
            <select onChange={(event)=>statusHandler(event,order._id)} value={order.status} className='bg-[#ffe8e4] border border-[1px_solid_tomato] w-[max(10vw,120px) md:p-3 outline-none] p-1 md:text-sm text-xs'>
              <option value="Food Processing">Food Processing</option>
              <option value="Out for delivery">Out for delivery</option>
              <option value="Food Delivered">Food Delivered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Orders