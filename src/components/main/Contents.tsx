import React from 'react';
import Styled from './contents.module.css'
import { Routes, Route } from 'react-router-dom'
import { Home } from './home_component/Home';
import { Shop } from './shop_component/Shop';
import { Cart } from './cart_component/Cart';


export const Contents = () => {

  return(
    <React.Fragment>
      <main>
        <div className={Styled.main}>

        </div>
      </main>
        <Routes>
          <Route path='/home' element={<div className={Styled.main_contents}><Home/></div>}/>
          <Route>
            <Route path="/pudding" element={<Shop/>}/> 
            <Route path="/gelato" element={<Shop/>}/> 
            <Route path="/macaroon" element={<Shop/>}/> 
          </Route>
          <Route path='/cart' element={<div className={Styled.main_contents}><Cart/></div>}/> 
          <Route path='/user' element={<div className={Styled.main_contents}>개인정보</div>}/> 
        </Routes>

    </React.Fragment>

  )
}