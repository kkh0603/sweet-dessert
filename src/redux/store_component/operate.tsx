/* eslint-disable */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialOperatePathSlice = {
  orderMenu : ['All', 'Pudding', 'Macaroon','Gelato'],
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
  }
})

export const { displayPath } = operatePathSlice.actions
export default operatePathSlice.reducer
