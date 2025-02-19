 import React from 'react'
 import { menu_list } from '../assets/assets/assets'
 import './ExploreMenu.css'
 function ExploreMenu({category,setCategory}) {
   return (
     <div className=' flex flex-col gap-5 mt-5' id='explore-menu'>
       <h1  className='text-4xl' style={{color:'#262626', fontWeight:'550'}}>Explore our menu</h1>
       <p className='max-w-lg' style={{columns:'#808080'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique nesciunt, rerum numquam quos nostrum minima! Modi incidunt dolorem minus dicta.</p>
       <div className='flex justify-between items-center gap-8 text-center mt-4 overflow-x-scroll ' id='explore-menu-list'>
        {menu_list.map((item,index)=> {
          return(
            <div onClick={()=>setCategory(prev=>prev===item.menu_name? "All":item.menu_name)} key={index} className='min-w-24 flex-shrink-0' id='explore-menu-list-items'>
              <img className={category===item.menu_name?"active":""} id='explore-menulist-img'  src={item.menu_image} alt=''/>
              <p className='mt-3 cursor-pointer'style={{color:'#747474', fontSize:'max(1.4vw,16px)'}}>{item.menu_name}</p>
            </div>
        )
        })}
       </div>
       <hr className='mt-3 h-1 bg-gray-300 border-none'/>
     </div>
   )
 }
 
 export default ExploreMenu
 