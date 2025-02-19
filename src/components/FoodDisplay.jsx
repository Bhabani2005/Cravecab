import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import FoodItem from './FoodItem'

function FoodDisplay({category}) {

    const {food_list}=useContext(StoreContext)
  return (
    <div className='mt-7' id='food-display'>
      <h2 style={{fontSize:'max(2vw,24px)', fontWeight:'600'}}>Top dishes near you</h2>
      <div className='grid mt-7 gap-7 gap-y-12' style={{gridTemplateColumns:'repeat(auto-fill,minmax(240px,1fr))'}}>
        {food_list.map((item,index)=>{
          if(category=== "All" || category===item.category){
            return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
          }
            
        })}
      </div>
    </div>
  )
}

export default FoodDisplay
