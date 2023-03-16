/* eslint-disable */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { stat } from 'fs';

export interface standardItem {
    id : number,
    pName : string,
    price : number,
}
export interface CardState {
  itemKeys : Array<string>,
  itemValues : {[key:string] :standardItem}[][],
  itemTempArr : {[key:string] :standardItem}[]
  items : {
    subMenu : string,
    item : Array<standardItem>
  }
}


const initialOrderSlice : CardState = {
  itemKeys : [],
  itemValues : [],
  itemTempArr : [],
  items : {
      subMenu : 'pudding',
      item : [{
        id : 0,
        pName : 'custard',
        price : 5000,
      },
      {
        id : 1,
        pName : 'chocolate',
        price : 5500,
      },
      {
        id : 2,
        pName : 'greentea',
        price : 4300,
      },
      {
        id : 3,
        pName : 'milk',
        price : 4200,
      },
      {
        id : 4,
        pName : 'sesame',
        price : 5000,
      }]
  }
}

const orderSlice = createSlice({
  name : 'card',
  initialState : initialOrderSlice,
  reducers : {
    itemListSet (state, action:PayloadAction<number>){
      //초기화
      state.itemValues = []
      state.itemTempArr = []
      //
      let arrIndex : number = 4
      let itemLength : number = state.items.item.length
      state.items.item.map((a)=> {state.itemTempArr.push({[state.items.subMenu] : a})})
      //실작업
      for (let i : number = 0; i <itemLength; i += arrIndex){
        let blockItem : {[key:string] :standardItem}[]
        blockItem = state.itemTempArr.slice(i, i+arrIndex)
        state.itemValues.push(blockItem)
      }
    }
  }
})

export const { itemListSet } = orderSlice.actions
export default orderSlice.reducer