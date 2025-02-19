import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../context/StoreContext'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function PlaceOrder() {
  const { getTotalCartAmount, token, food_list, cartItems, url } = useContext(StoreContext)
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: ""
  })
  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }))
  }
  const placeOrder = async (event) => {
    event.preventDefault();
    let orderItems = [];
    food_list.map((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    })
    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + 2,
    }
    let response = await axios.post(url + "/api/order/place", orderData, { headers: { token } })
    if (response.data.success) {
      const { session_url } = response.data;
      window.location.replace(session_url);
    }
    else {
      alert("Error");
    }
  }
  const navigate= useNavigate();
  useEffect(() => {
    if (!token) {
      navigate('/cart');
    }
    else if(getTotalCartAmount()===0){
      navigate('/cart');
    }
  },[token])
  return (
    <form onSubmit={placeOrder} className='flex items-start justify-between gap-4 mt-24'>
      <div className="w-full " style={{ maxWidth: 'max(30%,500px)' }}>
        <p className='text-3xl font-semibold mb-12'>Delivery Information</p>
        <div className="flex gap-2">
          <input required name='firstName' onChange={onChangeHandler} value={data.firstName} className='mb-4 w-full p-2 rounded outline-orange-500' style={{ border: '1px solid #c5c5c5' }} type="text" placeholder='First name' />
          <input required name='lastName' onChange={onChangeHandler} value={data.lastName} className='mb-4 w-full p-2 rounded outline-orange-500' style={{ border: '1px solid #c5c5c5' }} type="text" placeholder='Last Name' />
        </div>
        <input required name='email' onChange={onChangeHandler} value={data.email} className='mb-4 w-full p-2 rounded outline-orange-500' style={{ border: '1px solid #c5c5c5' }} type="email" placeholder='Email address' />
        <input required name='street' onChange={onChangeHandler} value={data.street} className='mb-4 w-full p-2 rounded outline-orange-500' style={{ border: '1px solid #c5c5c5' }} type="text" placeholder='Street' />
        <div className="flex gap-2">
          <input required name='city' onChange={onChangeHandler} value={data.city} className='mb-4 w-full p-2 rounded outline-orange-500' style={{ border: '1px solid #c5c5c5' }} type="text" placeholder='City' />
          <input required name='state' onChange={onChangeHandler} value={data.state} className='mb-4 w-full p-2 rounded outline-orange-500' style={{ border: '1px solid #c5c5c5' }} type="text" placeholder='State' />
        </div>
        <div className="flex gap-2">
          <input required name='zipcode' onChange={onChangeHandler} value={data.zipcode} className='mb-4 w-full p-2 rounded outline-orange-500' style={{ border: '1px solid #c5c5c5' }} type="text" placeholder='Zip code' />
          <input required name='country' onChange={onChangeHandler} value={data.country} className='mb-4 w-full p-2 rounded outline-orange-500' style={{ border: '1px solid #c5c5c5' }} type="text" placeholder='Country' />
        </div>
        <input required name='phone' onChange={onChangeHandler} value={data.phone} className='mb-4 w-full p-2 rounded outline-orange-500' style={{ border: '1px solid #c5c5c5' }} type="text" placeholder='Phone' />
      </div>
      <div className="w-full" style={{ maxWidth: 'max(40%,500px)' }}>
        <div className="cart-total">
          <h2 className='text-3xl font-semibold'>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery fees</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
            </div>
          </div>
          <button type='submit' className='mt-7' onClick={() => navigate('/order')}>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder