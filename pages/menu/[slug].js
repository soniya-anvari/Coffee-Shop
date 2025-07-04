import Card from '@/components/modules/ProductsCart/Card';
import { useRouter } from 'next/router';
import React from 'react'

function ShopMenu({data}) {
  const route = useRouter();
  console.log(data);
  const name=route.query.slug;
  return (
     <div className='w-11/12 m-auto text-xl font-bold'>
      <h5 className='text-white flex justify-center mb-4'>
        {name=='coffeeBeans'?'Coffee Beans':name}
      </h5>
       <div className='grid grid-cols-2 gap-7'>
        
      {
        data.length>0 && data.map(item=>(
            <Card item={item}/>
            
        ))
      }
    </div>
     </div>
  )
}
export async function getStaticPaths(){
   return {
    paths: [
      {
        params: {
          slug: 'drink-menu',
        },
      }, 
       {
        params: {
          slug: 'CoffeeBeans',
        }, 
      },
    ],
    fallback: "blocking", 
  }
}
export async function getStaticProps(context){
  console.log(context.params.slug)
const res=await fetch(`http://localhost:4000/${context.params.slug}`)
if (res.status=='404')
  return{
     props:{
      data:[]
     }}
const data=await res.json();
return{
  props:{
    data
  },
  revalidate:60*60*1
}
}
export default ShopMenu;
