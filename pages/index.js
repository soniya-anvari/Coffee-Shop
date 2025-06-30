import HeroSection from '@/components/templates/index/HeroSection'
import Menu from '@/components/templates/index/Menu'
import { consumeDynamicAccess } from 'next/dist/server/app-render/dynamic-rendering';
import React from 'react'

function Home({menuItems}) {
  
  return (
    <div>
      <HeroSection />
      <Menu menuItems={menuItems} />
      
    </div>
  )
}
export async function getStaticProps(){
  const res=await fetch('http://localhost:4000/menu');
  const data=await res.json()
  console.log({res})
  console.log('skns')
    return{
    props:{
      menuItems:data
    },
    revalidate: 20, 
  }
}

export default Home
