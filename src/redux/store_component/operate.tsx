/* eslint-disable */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialOperatePathSlice = {
  path : '',
  displayPath : [''],
}

const operatePathSlice = createSlice({
  name: 'operatePath',
  initialState: initialOperatePathSlice,
  reducers : {
    displayPath (state, action:PayloadAction<string>) {
      if (action.payload == '/'){
        state.displayPath = ['']
        state.displayPath.push('home');
      }
    }
  }
})

export const { displayPath } = operatePathSlice.actions
export default operatePathSlice.reducer
