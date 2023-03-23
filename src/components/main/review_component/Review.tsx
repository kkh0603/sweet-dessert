import React, {useEffect, useState} from "react";
import Styled from './review.module.css'
import { WriteModal } from "./wirteModal/WriteModal";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../redux/store';
import { reviewModalType } from "../../../redux/store_component/review";
import { ViewStar } from "./star/ViewStar";
import { TotalStar } from './star/TotalStar';
import { DeeleteModal } from "./deletModal/DeleteModal";

export const Review = () => {

  const dispatch = useDispatch()
  const [writeBtn, setWirteBtn] = useState<boolean>(false)
  const modalList = useSelector((state : RootState)=> state.review.reviewList)
  let totalStarValue = useSelector((state : RootState)=> state.review.totalValue)
  const [reviewDelete, setReviewDelete] = useState<boolean>(false)
  const [sendNick, setSendNick] = useState<string>('')
  const [sendPw, setSendPw] = useState<string>('')
  
  if (modalList.length !== 0) (
    modalList.map((e,i) => {
      let objValue = Object.values(e)
      return( 
        totalStarValue += objValue[i].rating/modalList.length
      )
    }))

    
  useEffect(() => {},[dispatch])

  return (
    <React.Fragment>
      <div className={Styled.review_container}>
        <div className={Styled.review_bar_area}>
          <div className={Styled.review_rating_text}> Total Rating 
            <span className={Styled.rating_tag}>
              <TotalStar totalValue={totalStarValue}/> 
            </span>
            <span className={Styled.rating_value_display}>
              {`(${totalStarValue.toFixed(2)})`}
            </span>
          </div>
          <div className={Styled.review_btn_container}>
            <span className={Styled.review_wirte_area}>
              <button className={Styled.review_write_btn}
                      onClick={()=>{setWirteBtn(true)}}>
                <img className={Styled.icon} 
                      src={process.env.PUBLIC_URL + '/navIcon/write.png'}
                      alt={'write'}/>
                        Write
              </button>
            </span>
            <span className={Styled.review_rating_area}>
            </span>
          </div>
        </div>
        <div className={Styled.review_history_area}>
          {
            modalList.map((e , i) => {
              let keys : Array<string>= Object.keys(e)
              let oneItem : reviewModalType = e[keys[i]]

              return (
                <div key={i} className={Styled.review_block_container}>
                  <div className={Styled.list_infor}>
                    <span className={Styled.item_title_nick}>Nickname : 
                      <span>{oneItem.nickname}</span>
                    </span>
                    <span className={Styled.review_star_rating}>
                      <ViewStar valueStar={oneItem.rating}/>
                    </span>
                    <span>
                      <button className={Styled.review_delete_btn} 
                              onClick={()=>{setReviewDelete(true);
                                            setSendNick(oneItem.nickname);
                                            setSendPw(oneItem.password)}} >X</button>
                    </span>
                  </div>
                  <div className={Styled.list_text_area}>
                    <textarea readOnly 
                              className={Styled.text_box} 
                              cols={70} rows={3}
                              value={oneItem.textbox}></textarea>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
      {
        writeBtn === true ? <WriteModal writeBtn={writeBtn} setWirteBtn={setWirteBtn}/> : null
      }
      {
        reviewDelete === true ? <DeeleteModal deleteBtn={reviewDelete} 
                                              setDeleteBtn={setReviewDelete}
                                              nickname={sendNick}
                                              password={sendPw}/> : null
      }
    </React.Fragment>
  )
}