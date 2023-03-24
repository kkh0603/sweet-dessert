/* eslint-disable */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface reviewModalType {
  nickname: string,
  password: string,
  rating : number,
  textbox: string,
}
interface reviewType {
  modalData : reviewModalType,
  reviewObj : {[key:string]: reviewModalType}
  reviewList : {[key:string]: reviewModalType}[]
  totalValue : number
}

const initialReviewSlice : reviewType = {
  modalData : {
    nickname : '',
    password : '',
    rating : 0,
    textbox : ''
  },
  reviewObj : {},
  reviewList : [],
  totalValue : 0
}

const reviewSilce = createSlice({
  name : 'review',
  initialState : initialReviewSlice,
  reducers : {
    addReview (state, action:PayloadAction<reviewModalType>){
      let combiKey : string = (action.payload.nickname + action.payload.password)
      state.reviewObj[combiKey] = action.payload
      state.reviewList.push(state.reviewObj)
    },//delete
    reviewDelete(state, action:PayloadAction<string>){
      state.reviewList.map((e) => e)
    },
  }
})

export const { addReview, reviewDelete } = reviewSilce.actions
export default reviewSilce.reducer