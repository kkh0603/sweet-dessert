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
    },
    cartIncreUpdate(state, action:PayloadAction<string>){
      state.cartList[action.payload].count += 1
    },
    cartDecreUpdate(state, action:PayloadAction<string>){
      state.cartList[action.payload].count -= 1
    }
  }
})

export const { cartAdd,cartIncreUpdate,cartDecreUpdate } = cartSlice.actions
export default cartSlice.reducer