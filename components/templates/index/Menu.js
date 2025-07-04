import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import Card from '@/components/modules/ProductsCart/Card';
import Filters from '@/components/modules/ProductsCart/Filters';
import Link from 'next/link';
function Menu({menuItems}) {
  return (
    <div>
      <div className='mb-5 mt-10 flex justify-between items-center'>
        <p className='text-white text-xl font-bold'>Drink menu</p>
        <Link href="/menu/drink" className='text-blue-400  '>
          See All
        </Link>
      </div>
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
