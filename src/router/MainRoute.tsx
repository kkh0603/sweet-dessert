import React from "react"
import { Routes, Route } from 'react-router-dom'
import { Home } from '../components/main/home_component/Home';
import { Order } from '../components/main/order_component/Order';
import { Cart } from '../components/main/cart_component/Cart';
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export const MainRoute = () =>{

  let orderCategory = useSelector((state:RootState)=> state.operatePath.orderMenu)
  let userCategory = useSelector((state:RootState)=> state.operatePath.userMenu)

  return (
    <React.Fragment>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/order/*'>
          {
            orderCategory.map((a)=>{
              return (
                <Route key={a} path={a} element={<Order/>}/>
              )
            })
          }
          
        </Route>
        <Route path='/cart' element={<Cart/>}/> 
        <Route path='/user/*'>
          {
            userCategory.map((a)=>{
              return (
                <Route key={a} path={a} element={<div>{a}</div>}/>
              )
            })
          }
        </Route>
      </Routes>
    </React.Fragment>

  )
}