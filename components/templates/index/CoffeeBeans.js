import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Card from '@/components/modules/ProductsCart/Card';
import Filters from '@/components/modules/ProductsCart/Filters';
import Link from 'next/link';
function CoffeeBeans({coffeeBeans}) {
  return (
    <div className='mt-5'>
      <div className='mb-5 mt-10 flex justify-between items-center'>
        <p className='text-white text-xl font-bold'>Coffee beans menu</p>
        <Link href="/menu/coffeeBeans" className='text-blue-400'>
          See All
        </Link>
      </div>
      
    <Swiper
        slidesPerView={2.3}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        className='mt-4'
      >        
      {
      coffeeBeans.length &&  coffeeBeans?.map(item=>(
        <SwiperSlide  key={item.id}>
           <Card item={item} />
        </SwiperSlide>
        ))
      }
    </Swiper>
  </div>
  )
}

export default CoffeeBeans;
