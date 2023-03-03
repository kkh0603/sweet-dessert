import React from "react"
import { Routes, Route } from 'react-router-dom'
import { Home } from '../components/main/home_component/Home';
import { Shop } from '../components/main/shop_component/Shop';
import { Cart } from '../components/main/cart_component/Cart';
import { ShopRoute } from "./component/ShopRoute";

export const MainRoute = () =>{
  return (
    <React.Fragment>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/shop/*' element={<ShopRoute/>}/>
        <Route path='/cart' element={<Cart/>}/> 
        <Route path='/user' element={<div>개인정보</div>}/> 
      </Routes>
    </React.Fragment>

  )
}