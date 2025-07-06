import { useRouter } from 'next/router';
import React, { useState } from 'react'

function HeroSection() {
  const [search,SetSearch]=useState('');
  const route=useRouter();
  const searchHandler=()=>{
    if (search.trim()){
      route.push(`/search?q=${search}`)
    }
  }
  const searchHandlerEnter=(event)=>{
    if (event.key=='Enter' && search.trim())
      route.push(`/search?q=${search}`)
  }
  return (
    <div>
      <h2 className='text-3xl text-white font-bold w-2/3 '>
        Find the best
       coffee for you
      </h2>
      <div onKeyDown={searchHandlerEnter} className='bg-[var(--gray-dark)]/30 flex gap-2 rounded-2xl p-3 mt-6'>
        <span  onClick={searchHandler}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill={search?'black':'white'} xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M2 10.67C2 5.88178 5.84034 2.00012 10.5776 2.00012C12.8526 2.00012 15.0343 2.91356 16.6429 4.53948C18.2516 6.16541 19.1553 8.37064 19.1553 10.67C19.1553 15.4583 15.3149 19.34 10.5776 19.34C5.84034 19.34 2 15.4583 2 10.67ZM19.0134 17.6544L21.568 19.7165H21.6124C22.1292 20.2389 22.1292 21.0859 21.6124 21.6083C21.0955 22.1307 20.2576 22.1307 19.7407 21.6083L17.6207 19.1786C17.4203 18.9767 17.3076 18.7025 17.3076 18.4165C17.3076 18.1305 17.4203 17.8563 17.6207 17.6544C18.0072 17.2705 18.6268 17.2705 19.0134 17.6544Z" fill={search?'orange':'white'}/>
          </svg>
        </span>
        <input onChange={(e)=>SetSearch(e.target.value)} type='text' className='outline-none ml-3 text-white text-sm' placeholder='Find Your Coffee...' />
      </div>
    </div>
  )
}

export default HeroSection;
