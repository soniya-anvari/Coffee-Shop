import Card from '@/components/modules/ProductsCart/Card'
import React from 'react'

function Result({data}) {
  return (

    <div className='w-11/12 m-auto'>
       {data.length>0?
      <>  <h5 className='text-white flex text-2xl font-bold justify-center mb-4'>
          Search
        </h5>
       <div className='grid grid-cols-2 gap-7'>
        
      {
        data.length>0 && data.map(item=>(
            <Card key={item.id} item={item}/>
            
        ))
      }
    </div>
    </>
    :
    <h5 className='text-white flex text-2xl font-bold justify-center mb-4'>
          No products found
        </h5>
    }
    </div>
  )
}

export default Result
