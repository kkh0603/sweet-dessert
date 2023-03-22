import React, {useEffect, useState} from "react";
import Styled from './payModal.module.css'
import { useDispatch } from 'react-redux';
import { cartClear } from "../../../../redux/store_component/cart";
import { useNavigate } from 'react-router-dom';

interface modalPropsState {
  paymentBtn : boolean,
  setPaymentBtn :  React.Dispatch<React.SetStateAction<boolean>>
}

export const PayModal = ({paymentBtn, setPaymentBtn}:modalPropsState) => {

  const [changeReviewBtn, setChangeReviewBtn] = useState<boolean>(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const closeModal = () => {
    setPaymentBtn(false);
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
            <p className={Styled.modal_message}>
              {
                changeReviewBtn === false ? 
                `Would you like to proceed with payment?` : `Would you like to leave a review?`
              }
            </p>
          </div>
          <div className={Styled.modal_answer_area}>
            <button className={Styled.modal_no_btn}
                    onClick={()=>{closeModal()}}> No </button>
            <button className={Styled.modal_sure_btn}
                    onClick={()=>{ dispatch(cartClear()) 
                                  if(changeReviewBtn === false) {
                                    setChangeReviewBtn(true)}
                                  else if (changeReviewBtn === true){
                                    closeModal()
                                    navigate('/review');
                                  }}}> Sure </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}


