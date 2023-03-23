import React, {useEffect, useState} from "react";
import Styled from './WirteModal.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { SetStar } from "../star/SetStar";
import { reviewModalType } from '../../../../redux/store_component/review';
import { RootState } from '../../../../redux/store';
import { addReview } from "../../../../redux/store_component/review";

interface modalPropsState {
  writeBtn : boolean,
  setWirteBtn :  React.Dispatch<React.SetStateAction<boolean>>
}

export const WriteModal = ({writeBtn, setWirteBtn}:modalPropsState) => {

  const dispatch = useDispatch()
  let modalObj : reviewModalType = useSelector((state : RootState) => state.review.modalData)

  const [nick, setNick] = useState<string>('')
  const [pw, setPw] = useState<string>('')
  const [ratingValue, setRatingValue] = useState<number>(0) 
  const [longTxt, setLongTxt] = useState<string>('')

  const closeModal = () => {setWirteBtn(false)}
  useEffect(() => {},[dispatch])

  const completeReview = () => {
    if (pw !== '' && ratingValue !== 0 && longTxt !== ''){
      modalObj = {
        nickname : nick,
        password : pw,
        rating : ratingValue,
        textbox : longTxt
      }
      dispatch(addReview(modalObj))
      closeModal()
    } 
    else if (nick === '') {alert('Empty Nickname');
    } else if (pw === '') {alert('Empty Password');
    } else if (nick === '') {alert('Not Checked');
    } else if (nick === '') {alert('Empty TextBox')};
  }

  return(
    <React.Fragment>
      <div className={Styled.modal_area}>
        <div className={Styled.modal_container}>
          <div className={Styled.modal_close_area}>
            <button className={Styled.modal_close_btn}
                    onClick={()=>{closeModal()}}>X
            </button>
          </div>
          <div className={Styled.modal_message_area}>
            <div className={Styled.modal_input_area}>
              <span>NickName : </span>
              <input className={Styled.modal_message}
                      onChange={(e)=> setNick((e.target.value).toString())}
                      value={nick}
                      maxLength={8}/>
            </div>
            <div className={Styled.modal_input_area}>
              <span>Password : </span>
              <input className={Styled.modal_message}
                      onChange={(e)=> setPw((e.target.value).toString())}
                      value={pw}/>
              <div className={Styled.text_message}>
                Password is used for erasing.
              </div>
            </div>
            <div className={Styled.star_area}>
              <span className={Styled.star_area_title}>
                Rating : 
              </span>
              <SetStar rating={ratingValue} setRating={setRatingValue}/>
              {ratingValue}
            </div>
            <div className={Styled.modal_coment_area}>
              <textarea className={Styled.modal_text_box} 
                        cols={40} 
                        rows={4}
                        onChange={(e)=>setLongTxt(e.target.value)}
                        value={longTxt}></textarea>
            </div>
          </div>
          <div className={Styled.modal_answer_area}>
            <button className={Styled.modal_no_btn}
                    onClick={()=>{closeModal()}}> No </button>
            <button className={Styled.modal_sure_btn}
                    onClick={()=>{completeReview()}}> Complete </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}


