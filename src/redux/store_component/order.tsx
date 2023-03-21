/* eslint-disable */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface standardItem {
    id : string,
    pName : string,
    price : number,
    count : number,
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
        id : 'p00',
        pName : 'custard',
        price : 5000,
        count : 0,
      },
      {
        id : 'p01',
        pName : 'chocolate',
        price : 5500,
        count : 0,
      },
      {
        id : 'p02',
        pName : 'greentea',
        price : 4300,
        count : 0,
      },
      {
        id : 'p03',
        pName : 'milk',
        price : 4200,
        count : 0,
      },
      {
        id : 'p04',
        pName : 'sesame',
        price : 5000,
        count : 0,
      }]
  }
}

const orderSlice = createSlice({
  name : 'card',
  initialState : initialOrderSlice,
  reducers : {
    itemListSet (state){
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
    },
    itemIncrCounting (state, action:PayloadAction<string>){
      let actionArr : Array<string> = action.payload.split(',')
      let type : string = actionArr[0]
      let pageNo : number = Number(actionArr[1])
      let itemNo : number = Number(actionArr[2])
      state.itemValues[pageNo][itemNo][type].count += 1
    },
    itemDecrCounting (state, action:PayloadAction<string>){
      let actionArr : Array<string> = action.payload.split(',')
      let type : string = actionArr[0]
      let pageNo : number = Number(actionArr[1])
      let itemNo : number = Number(actionArr[2])
      state.itemValues[pageNo][itemNo][type].count -= 1
    }
  }
})

export const { itemListSet, itemIncrCounting, itemDecrCounting} = orderSlice.actions
export default orderSlice.reducer