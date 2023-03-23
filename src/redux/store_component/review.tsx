/* eslint-disable */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface reviewModalType {
  nickname: string,
  password: string,
  rating : number,
  textbox: string,
}
interface reviewType {
  reviewList : {[key:string]: reviewModalType}[]
}

const initialReviewSlice : reviewType = {
  reviewList : []
}

const reviewSilce = createSlice({
  name : 'review',
  initialState : initialReviewSlice,
  reducers : {
    loadReview (state) {
    }
  }
})


export default reviewSilce.reducer