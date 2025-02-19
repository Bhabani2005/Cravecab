import React, { useState } from 'react'
import { assets } from '../assets/assets'
import axios from "axios"
import { toast } from 'react-toastify';

function Add({url}) {
  const[image,setImage]=useState(false)
  const[data,setData]=useState({
    name:'',
    description:"",
    price:"",
    category:"Salad"
  })
  const onChangeHandler = (event) => {
    const name=event.target.name;
    const value= event.target.value;
    setData(data=>({...data,[name]:value}))
  }
  const onSubmitHandler = async(event) => {
    event.preventDefault();
    const formData=new FormData();
    formData.append("name",data.name)
    formData.append("description",data.description)
    formData.append("price",Number(data.price))
    formData.append("category",data.category)
    formData.append("image",image)
    const response= await axios.post(`${url}/api/food/add`,formData);
    if(response.data.success){
      setData({
        name:'',
        description:"",
        price:"",
        category:"Salad"
      })
      setImage(false)
      toast.success(response.data.message)
    } else{
      toast.error(response.data.message)
    }
  }
  return (
    <div className='add w-3/4 ml-[max(5vw,25px)] mt-12 text-text text-base'>
      <form className='flex-col gap-5 ' onSubmit={onSubmitHandler}>
        <div className="add-img-upload flex-col ">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img className='w-28 cursor-pointer' src={image?URL.createObjectURL(image):assets.upload_area} alt="" />
          </label>
          <input onChange={(e)=>setImage(e.target.files[0])} type="file" id='image' hidden required />
        </div>
        <div className="add-product-name flex-col w-[max(40%,280px)]">
          <p>Product name</p>
          <input onChange={onChangeHandler} value={data.name} className='p-3' type="text" name='name'placeholder='Type here' />
        </div>
        <div className="add-product-description flex-col w-[max(40%,280px)]">
          <p>Product description</p>
          <textarea onChange={onChangeHandler} value={data.description} className='p-3' name="description" rows='6' placeholder='Write content here.'></textarea>
        </div>
        <div className="add-category-price flex gap-7">
          <div className="add-category flex-col">
            <p>Product category</p>
            <select onChange={onChangeHandler} value={data.category} className='max-w-32
            p-3' name="category">
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>
          <div className="add-price flex-col">
            <p>Product price</p>
            <input onChange={onChangeHandler} value={data.price}  className='max-w-32
            p-3' type="number" name='price' placeholder='$20' />
          </div>
        </div>
        <button type='submit' className='add-btn max-w-32 p-3 bg-black text-white cursor-pointer'>ADD</button>
      </form>
    </div>
  )
}

export default Add
