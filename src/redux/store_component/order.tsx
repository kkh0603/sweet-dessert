/* eslint-disable */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const itemTypes : {[key:string]:Array<object>}  = {}

const initialOrderSlice = {
  itemList : itemTypes,
  itemKeys : [""],
  itemValues : [{}],
  items : {
    type : [{
      no : 0,
      submenu : 'All',
      item : [{}]
    },
    {
      no : 1,
      submenu : 'pudding',
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
    },
    {
      no : 2,
      submenu : 'macaroon',
      item : [{
        id : 0,
        pName : 'strawberry',
        price : 4500,
      },
      {
        id : 1,
        pName : 'creambulee',
        price : 4500,
      },
      {
        id : 2,
        pName : 'blueberry',
        price : 4500,
      },
      {
        id : 3,
        pName : 'melon',
        price : 4500,
      },
      {
        id : 4,
        pName : 'kakao',
        price : 4500,
      }]
    }]
  }
}

const orderSlice = createSlice({
  name : 'card',
  initialState : initialOrderSlice,
  reducers : {
    itemListSet (state, action:PayloadAction<number>){
      state.itemList = {}
      if(action.payload !== 0) {
        let itemKey = state.items.type[action.payload].submenu.toString()
        let itemValue = state.items.type[action.payload].item
        state.itemList[itemKey] = itemValue
        state.itemKeys = Object.keys(state.itemList)
        state.itemValues = Object.values(state.itemList)
      }
      else if(action.payload === 0) {
        for (let i = 1; i< state.items.type.length; i++) {
          let itemKey = state.items.type[i].submenu.toString()
          let itemValue = state.items.type[i].item 
          state.itemList[itemKey] = itemValue
          state.itemKeys = Object.keys(state.itemList)
          state.itemValues = Object.values(state.itemList)
        }
      }
    }
  }
})

export const { itemListSet } = orderSlice.actions
export default orderSlice.reducer