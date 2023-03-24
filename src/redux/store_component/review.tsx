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
  finalComplete : boolean
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
  totalValue : 0,
  finalComplete : false
}

const reviewSilce = createSlice({
  name : 'review',
  initialState : initialReviewSlice,
  reducers : {
    addReview (state, action:PayloadAction<reviewModalType>){
      let combiKey : string = (action.payload.nickname + action.payload.password)
      state.reviewObj[combiKey] = action.payload
      state.reviewList.push(state.reviewObj)
    },
    reviewDelete(state, action:PayloadAction<string>){
      const actionArr : Array<string> = action.payload.split(',')
      const findIndex : number = Number(actionArr[0])
      const keys : string = actionArr[1] + actionArr[2]
      const findPassword : string = actionArr[2]
      if (state.reviewList[findIndex][keys].password===findPassword) {
        state.reviewList.splice(findIndex,1)
        state.finalComplete = true
      } 
    }
  }
})

export const { addReview, reviewDelete } = reviewSilce.actions
export default reviewSilce.reducer