import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

function Filters() {
    const [filter,setFilter]=useState('All');
const categories = [
  'All',
  'Cappuccino',
  'Espresso',
  'Americano',
  'Macchiato',
  'Latte',
  'Mocha',
  'Flat White'
];
  return (
    <Swiper
      slidesPerView="auto"
      spaceBetween={26}
      
    >
      {categories.map((category, index) => (
        <SwiperSlide
        onClick={()=>setFilter(category)}

          key={index}
          style={{ width: 'auto' }} 
        >
          <span className={`${filter==category?'text-orange-400 border-b border-b-orange-300 ':'text-white'}  text-sm whitespace-nowrap block`}>
            {category}
          </span>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Filters
