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
    
    mainMenu (state, action : PayloadAction<string>) {
      state.mainPath = action.payload
    },

    subMenu (state, action : PayloadAction<string>) {
      state.mainPath = action.payload
    },

    printPath (state, action : PayloadAction<string>) {
      if (state.displayPath[1] == ""){
        `${state.displayPath} `
      }
    },

    displayPath (state, action : PayloadAction<string>) {
      state.resultPath = action.payload
    }

  }
})

export let { printPath } = operatePathSlice.actions
export default operatePathSlice.reducer
