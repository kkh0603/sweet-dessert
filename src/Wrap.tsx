import React from 'react';
import Styled from './wrap.module.css';
import {Reset} from 'styled-reset'
import { Routes, Route } from 'react-router-dom'
import { Header } from './components/header/Header';

function Wrap() {
  return (
    <React.Fragment>
      <Reset/>
        <div id={Styled.Wrap}>
          <Header/>
        </div>


        <Routes>
          <Route path='/' element={<div>홈</div>}/>
          <Route path='/shop' element={<div>상품</div>}/> 
          <Route path='/cart' element={<div>장바구니</div>}/> 
          <Route path='/user' element={<div>개인정보</div>}/> 
        </Routes>

    </React.Fragment>
  );
}

export default Wrap;
