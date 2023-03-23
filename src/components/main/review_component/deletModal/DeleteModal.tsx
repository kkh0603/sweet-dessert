import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Styled from './delete.module.css'

interface modalPropsState {
  deleteBtn : boolean,
  setDeleteBtn :  React.Dispatch<React.SetStateAction<boolean>>
  nickname : string,
  password : string,
}

export const DeeleteModal = ({setDeleteBtn, nickname, password}:modalPropsState) => {

  const dispatch = useDispatch()

  const closeModal = () => {
    setDeleteBtn(false);
  }

  useEffect(()=>{},[dispatch])

  console.log(nickname)
  console.log(password)

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
            <p className={Styled.modal_message}>
              Are you sure you want to delete?
            <input className={Styled.modal_input}/>
            </p>
          </div>
          <div className={Styled.modal_answer_area}>
            <button className={Styled.modal_no_btn}
                    onClick={()=>{closeModal()}}> No </button>
            <button className={Styled.modal_sure_btn}
                    > Sure </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
