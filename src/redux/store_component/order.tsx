/* eslint-disable */
import { createSlice } from "@reduxjs/toolkit";

const initialOrderSlice = {
  count : 0,
  items : {
    type : [{
      no : 0,
      submenu : 'All'
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

  }
})

export default orderSlice.reducer