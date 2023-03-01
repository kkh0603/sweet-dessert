/* eslint-disable */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialOperatePathSlice = {
  mainPath : '', 
  subPath : '', 
  displayPath : ["",""],
  resultPath : '',
  navbashopBtn : false,
  navbaUsertBtn : false,
  indexNo : 0,
}

const operatePathSlice = createSlice({
  name: 'operatePath',
  initialState: initialOperatePathSlice,
  reducers : {

  }
})

export let {  } = operatePathSlice.actions
export default operatePathSlice.reducer
