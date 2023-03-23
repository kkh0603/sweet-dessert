import React from "react";
import Styled from './setStar.module.css'

interface starSate {
  rating :number,
  setRating : React.Dispatch<React.SetStateAction<number>>
}

export const SetStar = ({setRating}: starSate) => {

  const setStar = (x:number) => {
    setRating(x)
  }
  

  return (
    <React.Fragment>
      <div className={Styled.startRadio}>
        <label className={Styled.startRadio_box}>
          <input type="radio" onClick={()=>{setStar(0.5)}} name="star" id=""/>
          <span className={Styled.startRadio_img}>
            <span className={Styled.blind}>별 0.5개</span>
          </span>
        </label>
        <label className={Styled.startRadio_box}>
          <input type="radio" onClick={()=>{setStar(1)}} name="star" id=""/>
          <span className={Styled.startRadio_img}>
            <span className={Styled.blind}>별 1개</span>
          </span>
        </label>
        <label className={Styled.startRadio_box}>
          <input type="radio" onClick={()=>{setStar(1.5)}} name="star" id=""/>
          <span className={Styled.startRadio_img}>
            <span className={Styled.blind}>별 1.5개</span>
          </span>
        </label>
        <label className={Styled.startRadio_box}>
          <input type="radio" onClick={()=>{setStar(2)}} name="star" id=""/>
          <span className={Styled.startRadio_img}>
            <span className={Styled.blind}>별 2개</span>
          </span>
        </label>
        <label className={Styled.startRadio_box}>
          <input type="radio" onClick={()=>{setStar(2.5)}} name="star" id=""/>
          <span className={Styled.startRadio_img}>
            <span className={Styled.blind}>별 2.5개</span>
          </span>
        </label>
        <label className={Styled.startRadio_box}>
          <input type="radio" onClick={()=>{setStar(3)}} name="star" id=""/>
          <span className={Styled.startRadio_img}>
            <span className={Styled.blind}>별 3개</span>
          </span>
        </label>
        <label className={Styled.startRadio_box}>
          <input type="radio" onClick={()=>{setStar(3.5)}} name="star" id=""/>
          <span className={Styled.startRadio_img}>
            <span className={Styled.blind}>별 3.5개</span>
          </span>
        </label>
        <label className={Styled.startRadio_box}>
          <input type="radio" onClick={()=>{setStar(4)}} name="star" id=""/>
          <span className={Styled.startRadio_img}>
            <span className={Styled.blind}>별 4개</span>
          </span>
        </label>
        <label className={Styled.startRadio_box}>
          <input type="radio" onClick={()=>{setStar(4.5)}} name="star" id=""/>
          <span className={Styled.startRadio_img}>
            <span className={Styled.blind}>별 4.5개</span>
          </span>
        </label>
        <label className={Styled.startRadio_box}>
          <input type="radio" onClick={()=>{setStar(5)}} name="star" id=""/>
          <span className={Styled.startRadio_img}>
            <span className={Styled.blind}>별 5개</span>
          </span>
        </label>
      </div>
    </React.Fragment>
  )
}