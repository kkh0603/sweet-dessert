/* eslint-disable */
import { createSlice } from "@reduxjs/toolkit";
import { standardItem } from './order';

export interface cartListState {
  cartList : {[key:string] :standardItem}[]
}

const initialCartSlice : cartListState = {
  cartList : []
}

const cartSlice = createSlice({
  name : 'cart',
  initialState : initialCartSlice,
  reducers : {

  }
})

export default cartSlice.reducer