import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar.jsx'
import Products from './components/products/Products.jsx'
import Restarunt from './components/restarunt/Restarunt.jsx'
import Home from './components/home/Home.jsx'
import Pizza from './components/restarunt/Pizza.jsx'
import Salad from './components/restarunt/Salad.jsx'
import Onion from './components/restarunt/Onion.jsx'
import { BrowserRouter, Route,Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/products' element={<Products />}/>
          <Route path='/restarunt' element={<Restarunt />}/>
          <Route path='/restarunt/pizza' element={<Pizza />}/>
          <Route path='/restarunt/salad' element={<Salad />}/>
          <Route path='/restarunt/onion' element={<Onion />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
