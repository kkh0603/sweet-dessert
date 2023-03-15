/* eslint-disable */
import { createSlice } from "@reduxjs/toolkit";

export interface CartProps {
  paymentInfor : {
    pNmae : string,
    count : number,
    price : number,
    total : number,
  },
  deliveryInfor : {
    location : string,
    
  }
}

const initialCardSlice = {

} 
