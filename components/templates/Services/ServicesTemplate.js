import React from 'react'

function Services() {
    const services=[
        {id:1,title:"Coffee & Espresso Bar",
        description:'From classic Americanos to velvety cappuccinos, our coffee bar offers handcrafted brews made with freshly roasted beans.',
        img:'/images/service1.jpg'
        },
        {id:1,title:"Fresh Pastries & Bites",
        description:'Enjoy our daily selection of fresh pastries, sandwiches, and sweet treats.Baked locally, our offerings pair perfectly with any beverage.',
        img:'/images/service2.jpg'
        },
        {id:1,title:"Coffee & Espresso Bar",
        description:'From classic Americanos to velvety cappuccinos, our coffee bar offers handcrafted brews made with freshly roasted beans.',
        img:'/images/service3.jpg'
        },
        {id:1,title:"Events & Community Nights",
        description:'From classic Americanos to velvety cappuccinos, our coffee bar offers handcrafted brews made with freshly roasted beans.',
        img:'/images/service4.jpg'
        }
    ]
  return (
    <div className='w-11/12 m-auto'>
        <p className='text-white flex justify-center text-3xl font-bold'>Services</p>
        {
            services?.map(servic=>(
                <div className='my-10 flex gap-5 items-center '>
                    <img src={servic.img}  className='w-full h-[200px] rounded-xl'/>
                    <div className='text-white'>
                        <h5 className='text-2xl text-[#ffcd88]'>
                            {servic.title}
                        </h5>
                        <p className='text-md mt-4'>
                            {servic.description}
                        </p>
                    </div>
                </div>
            ))
        }
      
    </div>
  )
}

export default Services
