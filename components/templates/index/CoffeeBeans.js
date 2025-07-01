import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Card from '@/components/modules/ProductsCart/Card';
import Filters from '@/components/modules/ProductsCart/Filters';
function CoffeeBeans({coffeeBeans}) {
  return (
    <div className='mt-5'>
      <h3 className='text-white text-md'>
        Coffee beans
      </h3>
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
