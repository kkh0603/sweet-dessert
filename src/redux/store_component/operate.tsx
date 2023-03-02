/* eslint-disable */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialOperatePathSlice = {
  firstPath : '',
  secondPath : '',
  shopMenu : ['전체', '푸딩', '찹쌀젤라또', '마카롱'],
  userMenu : ['전체', '내정보 설정', '주문내역', '문의'],
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
