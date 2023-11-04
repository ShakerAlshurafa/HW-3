import React, { useState , useEffect} from 'react'
import Card from './Card'

export default function Onion() {
    let [onion,setData] = useState([]);
    const getData = async()=>{
      let response = await fetch('https://forkify-api.herokuapp.com/api/search?q=onion');
      let data = await response.json();
      data = data.recipes;
      setData(data);
    }
    useEffect(()=>{
      getData();
    })
  return (
    <div className='container'>
      <div className='cards my-5 row'>
        {onion.map((ele)=> <Card key={ele.recipe_id} {...ele} /> )}
      </div>
    </div>
  )
}
