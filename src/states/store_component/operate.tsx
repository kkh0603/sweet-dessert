/* eslint-disable */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface operateType {
  path : string,
  displayPath : string[],
  navbarBtn : boolean,
  indexNo : number,
}

const initialOperatePathSlice : operateType= {
  path : '', 
  displayPath : [],
  navbarBtn : false,
  indexNo : 0,
}

const operatePathSlice = createSlice({
  name: 'operatePath',
  initialState: initialOperatePathSlice,
  reducers : {
    
    menuSelect (state, action : PayloadAction<string>){
      state.path = action.payload
      state.path = ''
    },

    


    
  }
})

export const {  } = operatePathSlice.actions
export default operatePathSlice.reducer
