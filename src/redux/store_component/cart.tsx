/* eslint-disable */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { standardItem } from './order';

export interface cartListState {
  cartList : {[key:string]: standardItem},
  totalPayment : number,
}

const initialCartSlice : cartListState = {
  cartList : {},
  totalPayment : 0,
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
    //update
    cartIncreUpdate(state, action:PayloadAction<string>){
      state.cartList[action.payload].count += 1
    },
    //update
    cartDecreUpdate(state, action:PayloadAction<string>){
      state.cartList[action.payload].count -= 1
    },
    //delete
    cartDelete(state, action:PayloadAction<string>){
      delete state.cartList[action.payload]
    }
  }
})

export const { cartAdd,cartIncreUpdate,cartDecreUpdate,cartDelete, } = cartSlice.actions
export default cartSlice.reducer