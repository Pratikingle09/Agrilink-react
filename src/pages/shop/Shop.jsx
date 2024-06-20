import React from 'react'

import Navbar from '../../components/navbar/Navbar'

import './shop.css'
import Store from '../../components/shop/Store'


function Shop() {
  return (
    <div>
      <Navbar/>
      <div className="store">
      <Store/>
      </div>
    </div>
  )
}

export default Shop
