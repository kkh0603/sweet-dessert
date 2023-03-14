/* eslint-disable */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type CardProps = {
  itemName : string,
  itemInfor : {
    id : number,
    pName : string,
    price : number
  }
}

const itemTypes : {[key:string]: any }= {}

const initialOrderSlice = {
  itemList : itemTypes,
  itemKeys : [""],
  itemValues : [{}],
  items : {
    itemType : [{
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
        price : 4600,
      },
      {
        id : 1,
        pName : 'bluebarry',
        price : 4700,
      },
      {
        id : 2,
        pName : 'yuja',
        price : 4800,
      },
      {
        id : 3,
        pName : 'melon',
        price : 4900,
      },
      {
        id : 4,
        pName : 'earlgray',
        price : 5000,
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
        let itemKey = state.items.itemType[action.payload].submenu.toString()
        let itemValue = state.items.itemType[action.payload].item
        state.itemList[itemKey] = itemValue
        state.itemKeys = Object.keys(state.itemList)
        state.itemValues = Object.values(state.itemList)
      }
      else if(action.payload === 0) {
        for (let i = 1; i< state.items.itemType.length; i++) {
          let itemKey = state.items.itemType[i].submenu.toString()
          let itemValue = state.items.itemType[i].item 
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