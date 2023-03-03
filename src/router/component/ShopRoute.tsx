import React from "react";
import { Route, Routes } from "react-router-dom";

export const ShopRoute = () => {
  return(
    <Routes>
      <Route path="All" element={<div>전체</div>}/>
      <Route path="pudding" element={<div>푸딩</div>}/>
      <Route path="macaroon" element={<div>마카롱</div>}/>
    </Routes>
  )
}