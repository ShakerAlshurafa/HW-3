import React from 'react'

export default function ProductCard(props) {
  return (
    <div className="col-md-3" key={props.id}>
          <img src={props.image} alt="" className='img-fluid' />
          <h2>{props.title}</h2>
    </div>
  )
}
