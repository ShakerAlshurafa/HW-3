import React from 'react'
import { Link } from 'react-router-dom'

export default function Restarunt() {
  return (
    <div className='container my-5 d-flex justify-content-evenly align-items-center'>
      <Link to='/restarunt/pizza' className='bg-info py-3 px-5 rounded-4'>Pizza</Link>
      <Link to='/restarunt/salad' className='bg-info py-3 px-5 rounded-4'>Salad</Link>
      <Link to='/restarunt/onion' className='bg-info py-3 px-5 rounded-4'>Onion</Link>
    </div>
  )
}

