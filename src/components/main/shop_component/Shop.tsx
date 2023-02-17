import React from "react";
import Styled from './shop.module.css'


export const Shop = () => {
  return (
    <React.Fragment>
      <div className={Styled.shop_contents}>

        <div className={Styled.shop_items_list}>
          <div className={Styled.shop_item}></div>
          <div className={Styled.shop_item}></div>
          <div className={Styled.shop_item}></div>
          <div className={Styled.shop_item}></div>
        </div>

        <div className={Styled.shop_pagenation}>
          <div className={`${Styled.carousel} ${Styled.carousel_left}`}></div>
          <div className={`${Styled.carousel} ${Styled.carousel_no}`}></div>
          <div className={`${Styled.carousel} ${Styled.carousel_right}`}></div>
        </div>
      </div>
    </React.Fragment>
  )
}