/* eslint-disable */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialOperatePathSlice = {
  firstPath : '',
  secondPath : '',
  shopMenu : ['All', 'Pudding', 'Macaroon','Gelato'],
  userMenu : ['My_information', 'Order_information', 'Customer_services'],
  displayPath : [''],
}

const operatePathSlice = createSlice({
  name: 'operatePath',
  initialState: initialOperatePathSlice,
  reducers : {
    displayPath (state, action:PayloadAction<string>) {
      state.displayPath = []
      state.displayPath.push(action.payload);
    },
    display (state, action:PayloadAction<string>) {
      
    }
  }
})

export const { displayPath } = operatePathSlice.actions
export default operatePathSlice.reducer
