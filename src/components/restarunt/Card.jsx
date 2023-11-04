import React from 'react'

export default function Card(props) {
  return (
    <div className="col-md-3" key={props.recipe_id}>
          <img src={props.image_url} alt="" className='img-fluid' />
          <h2>{props.title}</h2>
    </div>
  )
}

