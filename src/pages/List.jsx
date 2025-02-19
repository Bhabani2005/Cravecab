import React, { useEffect, useState } from 'react'
import axios from "axios"
import {toast} from "react-toastify"
function List({url}) {
  const[list,setList]=useState([]);
  const fetchList = async () =>{
    const response= await axios.get(`${url}/api/food/list`);
    if(response.data.success){
      setList(response.data.data);
    }
    else{
     toast.error("Error")
    }
  }
  const removeFood = async(foodId) =>{
    const response= await axios.post(`${url}/api/food/remove`,{id:foodId})
    await fetchList();
    if (response.data.success) {
      toast.success(response.data.message)
    } else{
      toast.error("Error")
    }
  }
  useEffect(()=>{
    fetchList();
  },[])
  return (
    <div className=' list w-3/4 ml-[max(5vw,25px)] mt-12 text-text text-base flex-col'>
      <p>All Foods List</p>
      <div className="list-table">
        <div className="list-table-format title grid grid-cols-[1fr_3fr_1fr] gap-3 sm:grid-cols-[0.5fr_2fr_1fr_1fr_0.5fr] sm:gap-0 items-center py-3 px-4 border-[1px_solid_#cacaca] text-xs bg-[#f9f9f9] hidden sm:grid">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item,index)=>{
          return(
            <div key={index} className='list-table-format grid grid-cols-[1fr_3fr_1fr] gap-3 sm:grid-cols-[0.5fr_2fr_1fr_1fr_0.5fr]
            sm:grid items-center sm:gap-0 py-3 px-4 border-[1px_solid_#cacaca] text-xs '>
              <img className='min-w-16' src={`${url}/images/`+item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{item.price}</p>
              <p onClick={()=>removeFood(item._id)} className='cursor-pointer'>X</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default List
