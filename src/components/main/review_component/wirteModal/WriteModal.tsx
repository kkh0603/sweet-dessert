import React, {useEffect, useState} from "react";
import Styled from './WirteModal.module.css'
import { useDispatch } from 'react-redux';
import { SetStar } from "../start/SetStar";

interface modalPropsState {
  writeBtn : boolean,
  setWirteBtn :  React.Dispatch<React.SetStateAction<boolean>>
}

export const WriteModal = ({writeBtn, setWirteBtn}:modalPropsState) => {

  const dispatch = useDispatch()
  const [rating, setRating] = useState<number>(0) 
  const closeModal = () => {
    setWirteBtn(false);
  }

  useEffect(() => {},[dispatch])

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
              <input className={Styled.modal_message}/>
            </div>
            <div className={Styled.modal_input_area}>
              <span>Password : </span>
              <input className={Styled.modal_message}/>
              <div className={Styled.text_message}>
                Password is used for erasing.
              </div>
            </div>
            <div className={Styled.star_area}>
              <span className={Styled.star_area_title}>
                Rating : 
              </span>
              <SetStar rating={rating} setRating={setRating}/>
              {rating}
            </div>
            <div className={Styled.modal_coment_area}>
              <textarea className={Styled.modal_text_box} 
                        cols={40} 
                        rows={4}></textarea>
            </div>
          </div>
          <div className={Styled.modal_answer_area}>
            <button className={Styled.modal_no_btn}
                    onClick={()=>{closeModal()}}> No </button>
            <button className={Styled.modal_sure_btn}
                    onClick={()=>{}}> Complete </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}


