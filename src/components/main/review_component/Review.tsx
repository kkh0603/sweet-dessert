import React from "react";
import Styled from './review.module.css'

export const Review = () => {
  return (
    <React.Fragment>
      <div className={Styled.review_container}>
        <div className={Styled.review_bar_area}>
          <div className={Styled.review_rating_text}> Total Rating 
          </div>
          <div className={Styled.review_fullstar_frame}>
            <img className={Styled.review_fullstar_img}
                  src={process.env.PUBLIC_URL + '/star.png'} 
                  alt="fullstar" />
          </div>
          <div className={Styled.review_empty_frame}>
            <img  className={Styled.review_empty_img}
                  src={process.env.PUBLIC_URL + '/star.png'} 
                  alt="enptystarr" />
          </div>
        </div>
        <div className={Styled.review_history_area}>
        </div>
      </div>
    </React.Fragment>
  )
}