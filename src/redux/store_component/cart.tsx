/* eslint-disable */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { standardItem } from './order';

export interface cartListState {
  cartList : {[key:string]: standardItem}
}

const initialCartSlice : cartListState = {
  cartList : {}
}

const cartSlice = createSlice({
  name : 'cart',
  initialState : initialCartSlice,
  reducers : {
    //create
    cartAdd(state, action:PayloadAction<standardItem>) {
      let id = action.payload.id
      state.cartList[id] = action.payload
    }
  }
})

export const { cartAdd } = cartSlice.actions
export default cartSlice.reducer