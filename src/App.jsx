import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import Home from './pages/home/Home'
import Auth from './pages/authentication/Auth'
import Dashboard from './pages/dashboard/Dashboard'
import Feed from './pages/feed/Feed'
import Shop from './pages/shop/Shop'
import Notification from './pages/notification/Notification'
import Profile from './pages/profile/Profile'
import Activities from './pages/activities/Activities'
import ViewFeed from './pages/viewPost/ViewFeed'
import ProductDetails from './pages/productDetails/ProductDetails'
import ShoppingCart from './pages/shoping-cart/ShoppingCart'
import PageNotFound from './pages/Error/ErrorHandling/PageNotFound'
import ProtectedRoute from './components/protectedRoute/ProtectedRoute'

import './App.css'

function App() {

  return (
    <>
<BrowserRouter>
<Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/auth' element={<Auth/>} />
  <Route path='/dashboard' element={<ProtectedRoute Component={Dashboard} />}/>
  <Route path='/feed' element={<ProtectedRoute Component={Feed} />} />
  <Route path='/shop' element={<ProtectedRoute Component={Shop} />} />
  <Route path='/notification' element={<ProtectedRoute Component={Notification} />} />
  <Route path='/profile' element={<ProtectedRoute Component={Profile} />} />
  <Route path='/activities' element={<ProtectedRoute Component={Activities} />} />
  <Route path='/post' element={<ProtectedRoute Component={ViewFeed} />} />
  <Route path='/productdetail' element={<ProtectedRoute Component={ProductDetails} />} />
  <Route path='/cart' element={<ProtectedRoute Component={ShoppingCart} />} />
  <Route path="*" element={<PageNotFound />} />

</Routes>

</BrowserRouter>
    </>
  )
}

export default App
