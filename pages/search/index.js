import Result from '@/components/templates/Search/Result';
import React from 'react'

function Search({data}) {
  console.log(data);
  
  return (
    <div>
      <Result data={data} />
    </div>
  )
}
export async function getServerSideProps(context){
  const query=context.query.q.toLowerCase();
  console.log(query)
  const res = await fetch('http://localhost:4000/products');
  const data= await res.json();
  const filtredData=data.filter(product=>product.name.toLowerCase().includes(query));
  

  return {
    props:{
      data:filtredData
    }
  }
}

export default Search;
