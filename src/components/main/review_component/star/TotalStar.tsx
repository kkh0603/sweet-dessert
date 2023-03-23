import React from "react";
import Styled from './totalStar.module.css'

interface starSate {
  totalValue :number
}

export const TotalStar = ({totalValue}: starSate) => {


  return (
    <React.Fragment>
      <div className={Styled.startRating}>
        <div style={{width:totalValue*60}} className={Styled.starRating_fill}>
        </div>
      </div>
    </React.Fragment>
  )
}