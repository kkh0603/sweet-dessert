/* eslint-disable */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialOperatePathSlice = {
  orderMenu : ['All', 'Pudding', 'Macaroon'],
  displayPath : [''],
  category : 0
}

const operatePathSlice = createSlice({
  name: 'operatePath',
  initialState: initialOperatePathSlice,
  reducers : {
    displayPath (state, action:PayloadAction<string>) {
      state.displayPath = []
      state.displayPath.push(action.payload);
    },
    categoryUpdate (state, action:PayloadAction<number>) {
      state.category = action.payload
    }
  }
})

export const { displayPath, categoryUpdate } = operatePathSlice.actions
export default operatePathSlice.reducer
