import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reviewDelete } from '../../../../redux/store_component/review';
import Styled from './delete.module.css'
import { RootState } from '../../../../redux/store';

interface modalPropsState {
  deleteBtn : boolean,
  setDeleteBtn :  React.Dispatch<React.SetStateAction<boolean>>
  nickname : string,
  password : string,
}

export const DeeleteModal = ({setDeleteBtn, nickname, password}:modalPropsState) => {

  const dispatch = useDispatch()
  const [deletePw, setDeletePw] = useState<string>('')

  const closeModal = () => {
    setDeleteBtn(false);
  }

  const pwChange = (e : React.ChangeEvent<HTMLInputElement>) =>{
    setDeletePw(e.target.value)
  }

  const deleteComplete = () => {
    password === deletePw ? 
      dispatch(reviewDelete(nickname + ',' + [password]))
    : alert('Wrong Number')
  }

  useEffect(()=>{},[dispatch])

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
            <input className={Styled.modal_input}
                    onChange={(e)=>{pwChange(e)}}
                    value={deletePw}/>
            </p>
          </div>
          <div className={Styled.modal_answer_area}>
            <button className={Styled.modal_no_btn}
                    onClick={()=>{closeModal()}}> No </button>
            <button className={Styled.modal_sure_btn}
                    onClick={()=>{deleteComplete()
                                  closeModal()}}> Sure </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
