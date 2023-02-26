/* eslint-disable */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialTestSlice = {
  testString : '',
  qqq : '',
}

const testSlice = createSlice({
  name : 'test1',
  initialState : initialTestSlice,
  reducers : {

    resultTest (state, action : PayloadAction <string>) {
      let a = action.payload.split('/').join(' > ')
      console.log(a.length)
      state.qqq = a
    }

  }
})


export const {resultTest} = testSlice.actions
export default testSlice.reducer