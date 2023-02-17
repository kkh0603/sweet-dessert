import React from "react";
import Styled from './home.module.css'

export const Home = () => {
  return (
    <React.Fragment>
      <div className={Styled.home_contents}>
        <div className={Styled.home_cnt_img}>
          이미지 태그 추가 필요
        </div>
        <div className={Styled.market_info}>
          소제지? 기타 등등 
        </div>
      </div>
    </React.Fragment>
  )
}