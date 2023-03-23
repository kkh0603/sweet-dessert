import React, {useState} from "react";
import Styled from './review.module.css'
import { WriteModal } from "./wirteModal/WriteModal";

export const Review = () => {

  const [writeBtn, setWirteBtn] = useState<boolean>(false)

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
        </div>
      </div>
      {
        writeBtn === true ? <WriteModal writeBtn={writeBtn} setWirteBtn={setWirteBtn}/> : null
      }
    </React.Fragment>
  )
}