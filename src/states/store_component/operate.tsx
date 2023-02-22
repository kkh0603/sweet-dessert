/* eslint-disable */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface OperatePath {
  point : string,
  path : Array<string>
}

const initialState : OperatePath = {
  point : "",
  path : []
}

export const operatePathSlice = createSlice({
  name: 'operatePath',
  // initialState : {
  //   menu : "",
  //   path : []
  // },
  initialState,
  reducers : {
    addMenu : (state) => {
      state.path.push(state.point)
    }
  },
})

export const { addMenu } = operatePathSlice.actions

export default operatePathSlice.reducer
