import React from "react";
import Styled from "./card.module.css"

export const Card = () => {

  return (
    <React.Fragment>
      <div className={Styled.card_container}>
        <h4 className={Styled.card_title}>Custard Pudding</h4>
        <div className={Styled.card_image_Area}>
          <img  className={Styled.card_image} src={process.env.PUBLIC_URL + '/item/pudding/custard.png'} alt="in"/>
        </div>
      </div>
    </React.Fragment>
  )
}