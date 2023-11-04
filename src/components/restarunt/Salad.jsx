import React, { useState , useEffect} from 'react'
import Card from './Card'

export default function Salad() {
    let [salad,setData] = useState([]);
    const getData = async()=>{
      let response = await fetch('https://forkify-api.herokuapp.com/api/search?q=salad');
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
        {salad.map((ele)=> <Card key={ele.recipe_id} {...ele} /> )}
      </div>
    </div>
  )
}
