import CoffeeBeans from '@/components/templates/index/CoffeeBeans';
import HeroSection from '@/components/templates/index/HeroSection'
import Menu from '@/components/templates/index/Menu'
import axios from 'axios';
import { consumeDynamicAccess } from 'next/dist/server/app-render/dynamic-rendering';
import React, { useState } from 'react'

function Home({menuItems,coffeeBeans}) {
 
  return (
    <div className="w-11/12 m-auto">
      <HeroSection />
      <Menu menuItems={menuItems} />
      <CoffeeBeans coffeeBeans={coffeeBeans}/>
      
      
    </div>
  )
}
export async function getStaticProps(){
  const menuRes=await fetch('http://localhost:4000/menu');
  const coffeeBeansRes=await fetch('http://localhost:4000/CoffeeBeans');
  const coffe=await coffeeBeansRes.json()
  const menu=await menuRes.json();

  console.log('skns')
    return{
    props:{
      menuItems:menu,
      coffeeBeans:coffe
    },
    revalidate: 20, 
  }
}

export default Home
