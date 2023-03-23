import React, {useEffect, useState} from "react";
import Styled from './review.module.css'
import { WriteModal } from "./wirteModal/WriteModal";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../redux/store';
import { reviewModalType } from "../../../redux/store_component/review";
import { ViewStar } from "./star/ViewStar";

export const Review = () => {

  const dispatch = useDispatch()
  const [writeBtn, setWirteBtn] = useState<boolean>(false)
  const modalList = useSelector((state : RootState)=> state.review.reviewList)

  useEffect(() => {},[dispatch])

  return (
    <React.Fragment>
      <div className={Styled.review_container}>
        <div className={Styled.review_bar_area}>
          <div className={Styled.review_rating_text}> Total Rating 
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
                  <div>
                    <ViewStar valueStar={0}/>
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
    </React.Fragment>
  )
}