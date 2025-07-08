import React from 'react'

function ProductDetails({data}) {
  console.log(data);
  
  return (
    <div>
      
      <div className={`bg-[url(${data.img})] bg-center relative h-[500px] w-full bg-cover`}>
        <div className='bg-black/50 flex flex-col gap-4 text-white rounded-t-4xl absolute bottom-0 p-5 left-0 right-0 '>
        <div  className=' flex justify-between items-center'>
          <div>
          <p className='text-[20px] font-semibold'>
          {data?.name}
           </p>
          <p className='text-[14px] text-gray-300'>
            {data?.contents}
          </p>
        </div>  
        <span className='inline-block p-3 rounded-2xl bg-[#141921]'>
            <svg width="34" height="29" viewBox="0 0 34 29" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.08643 13.3864C5.95526 14.1038 8.10303 16.7314 8.10303 19.8474C8.10313 22.0387 8.77841 24.2991 11.1069 25.2605C11.7762 25.5368 12.432 25.8586 13.0952 26.1667C13.3183 26.2704 13.5432 26.37 13.7661 26.4665C12.5788 26.8228 11.159 26.9695 9.71826 26.819C7.76595 26.6151 5.82495 25.874 4.39502 24.444C2.6859 22.707 1.67 20.6076 1.40088 18.6384C1.13172 16.6681 1.61069 14.8633 2.8374 13.6364C2.93147 13.5423 3.00775 13.4651 3.08643 13.3864Z" fill="#D17842" stroke="#141921"/>
              <path d="M2.75781 12.7333C3.84447 12.5538 5.11683 12.5297 6.41309 12.7392C8.26589 13.0387 10.1325 13.8103 11.5713 15.249C13.3092 16.9869 14.3385 19.0873 14.6143 21.0566C14.89 23.026 14.4114 24.8306 13.1846 26.0576C13.0937 26.1484 13.0276 26.2114 12.9688 26.2636C10.0325 25.6119 7.86328 22.9786 7.86328 19.8466C7.86329 18.8238 7.88981 17.9432 7.66113 17.1308C7.42196 16.2813 6.9196 15.539 5.96094 14.7001L5.92773 14.6708L5.88867 14.6474C4.74464 13.961 3.97775 13.4675 3.30273 13.0566C3.11256 12.9408 2.93242 12.8334 2.75781 12.7333Z" fill="#D17842" stroke="#141921"/>
              <path d="M12.2992 10.0279C15.0992 5.17836 19.7152 2.48636 23.7171 2.66862C22.5713 3.58743 21.5664 4.72416 20.8207 6.01573C19.1978 8.82674 18.7791 11.991 19.6149 15.1104C20.8304 19.6472 18.6555 24.2413 14.7187 26.3322C14.6562 26.3028 14.5954 26.2731 14.5357 26.2417L14.1658 26.0345C11.9312 24.7444 10.5592 22.3319 10.1993 19.4228C9.83948 16.5143 10.5002 13.1438 12.2992 10.0279Z" fill="#D17842" stroke="#141921"/>
              <path d="M24.9096 3.34088C25.2406 3.47445 25.5111 3.59091 25.5999 3.64219L25.6035 3.64426C27.8682 4.92571 29.2396 7.33531 29.5914 10.2452C29.9432 13.1554 29.266 16.5306 27.4663 19.6479C24.7203 24.4039 20.0155 26.5981 15.975 26.3676C16.3357 26.1472 16.6946 25.9228 17.0234 25.6884C17.7538 25.1677 18.435 24.5442 18.945 23.661C20.5679 20.85 20.9856 17.6859 20.1499 14.5666C18.9149 9.95749 20.4626 5.17622 24.3239 3.10959C24.4873 3.17377 24.6873 3.25119 24.9096 3.34088Z" fill="#D17842" stroke="#141921"/>
            </svg>
        </span>
        </div>
         <div className='flex justify-between items-center'>
          <p className='flex gap-2'>
          <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.7486 1.34458L13.3829 4.61315C13.6057 5.06815 14.2 5.50458 14.7014 5.58815L17.6636 6.0803C19.5579 6.39601 20.0036 7.7703 18.6386 9.12601L16.3357 11.4289C15.9457 11.8189 15.7321 12.571 15.8529 13.1096L16.5121 15.9603C17.0321 18.2167 15.8343 19.0896 13.8379 17.9103L11.0614 16.2667C10.56 15.9696 9.73357 15.9696 9.22286 16.2667L6.44643 17.9103C4.45929 19.0896 3.25214 18.2074 3.77214 15.9603L4.43143 13.1096C4.55214 12.571 4.33857 11.8189 3.94857 11.4289L1.64572 9.12601C0.290002 7.7703 0.726431 6.39601 2.62072 6.0803L5.58286 5.58815C6.075 5.50458 6.66929 5.06815 6.89214 4.61315L8.52643 1.34458C9.41786 -0.428988 10.8664 -0.428988 11.7486 1.34458Z" fill="#D17842"/>
          </svg>
          <span>
            {data?.rate}
          </span>
        </p>
        <button className='bg-[#141921] w-fit px-5 py-3 rounded-2xl text-white'>
          {data.type?data.type:data.roast}
        </button>
         </div>
        
        </div>
        
      </div>
      <div className='text-white pt-6 w-11/12 m-auto'>
          <h5 className='text-xl'>
            Description
          </h5>
          <div>
            <p>
            {data.description}
          </p>
          <div className='text-white flex items-center justify-between mt-10 '>
           <div ><p>
              Price
            </p>
            <p className='text-[24px]'>
            <span className=' text-orange-400'>$</span>  {data?.price}</p></div>
            
            
              <button className='bg-[var(--orange-accent)] w-fit px-5 py-3 rounded-2xl text-white'>
                 Add To Cart
            </button>
          
          </div>
        </div>
        </div>
    
    </div>
  )
}
export async function getStaticPaths(){
    const res = await fetch('http://localhost:4000/products');
    const data=await res.json();
    const paths=data?.slice(0,10)?.map(path=>(
      {params:{id:String(path.id)},}
    ));
    return {
      paths,fallback:"blocking"
    }
}
export async function getStaticProps({params}){
  console.log(params);
  
  const res=await fetch(`http://localhost:4000/products/${params.id}`);
    if (!res.ok) {
    return {
      notFound: true,
    };
  }
  const data=await res.json();
  console.log(data);
  
  return {
    props:{
      data
    }
  }

}
export default ProductDetails;
