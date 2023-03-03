import React from "react";
import Styled from './shop.module.css'


export const Shop = () => {
  return (
    <React.Fragment>
      <div className={Styled.shop_contents}>

        <div className={Styled.shop_items_list}>
          <div className={Styled.shop_item}> 상품 1 </div>
          <div className={Styled.shop_item}> 상품 2 </div>
          <div className={Styled.shop_item}> 상품 3 </div>
          <div className={Styled.shop_item}> 상품 4 </div>
        </div>

        <div className={Styled.shop_pagenation}>
          <div className={`${Styled.carousel} ${Styled.carousel_left}`}> {"<"} </div>
          <div className={`${Styled.carousel} ${Styled.carousel_no}`}> 1,2,3,4,5,6 </div>
          <div className={`${Styled.carousel} ${Styled.carousel_right}`}> {">"} </div>
        </div>
      </div>

      
    </React.Fragment>
  )
}