import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import Card from '@/components/modules/ProductsCart/Card';
import Filters from '@/components/modules/ProductsCart/Filters';
function Menu({menuItems}) {
    console.log(menuItems)
  return (
    <div>
        <Filters />
    <Swiper
        slidesPerView={2.3}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        className='mt-10'
      >        
      {
      menuItems.length &&  menuItems?.map(item=>(
        <SwiperSlide  key={item.id}>
           <Card item={item} />
        </SwiperSlide>
        ))
      }
    </Swiper>
  </div>
  )
}

export default Menu
