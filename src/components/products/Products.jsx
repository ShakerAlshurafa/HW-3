import React from 'react'
import { useEffect,useState } from 'react';
import ProductCard from './ProductCard';

export default function Products() {
  let [products,setProducts] = useState([]);
  const getData = async () =>{
    let response = await fetch("https://fakestoreapi.com/products");
    let data = await response.json();
    setProducts(data);
  }
  useEffect( ()=> {
    getData();
  } , [])
  return (
    <div className='container my-5'>
      <div className='row  text-center'>
          {products.map( (ele)=> {
            return <ProductCard key={ele.id} {...ele} />
          })}
      </div>
    </div>
  )
}
