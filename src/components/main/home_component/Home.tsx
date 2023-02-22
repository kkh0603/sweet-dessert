import React from "react";
import Styled from './home.module.css'

export const Home = () => {
  return (
    <React.Fragment>
      <div className={Styled.home_contents}>
        <div className={Styled.home_cnt_img}>
          <img 
            src={process.env.PUBLIC_URL + '/main_image.jpg'} 
            alt='mainIMG' 
            className={Styled.home_main_image}/>
        </div>
        <div className={Styled.market_info}>
          <p>
            안녕하세요🥰  Sweet Dessert 입니다 <br/>
            좋은 재료와 좋은 품질의 디저트를 만들어 즐거움을 선사하도록 최선을 다하곘습니다 <br/>
            달콤한 디져트와 함께 Sweet한 하루가 되시길 바랍니다
          </p>
        </div>
      </div>
    </React.Fragment>
  )
}