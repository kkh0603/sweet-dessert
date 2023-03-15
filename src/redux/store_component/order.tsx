/* eslint-disable */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CardState {
  itemKeys : Array<string>,
  itemValues : {}[][],
  items : {
    subMenu : string,
    item : {
      id : number,
      pName : string,
      price : number,
    }[]
  }
}


const initialOrderSlice : CardState = {
  itemKeys : [""],
  itemValues : [[{}]],
  items : {
      subMenu : 'pudding',
      item : [{
        id : 0,
        pName : 'custard',
        price : 4500,
      },
      {
        id : 1,
        pName : 'chocolate',
        price : 4500,
      },
      {
        id : 2,
        pName : 'greentea',
        price : 4500,
      },
      {
        id : 3,
        pName : 'milk',
        price : 4500,
      }]
  }
}

const orderSlice = createSlice({
  name : 'card',
  initialState : initialOrderSlice,
  reducers : {
    itemListSet (state, action:PayloadAction<number>){
    }
  }
})

export const { itemListSet } = orderSlice.actions
export default orderSlice.reducer