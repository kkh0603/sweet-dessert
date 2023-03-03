/* eslint-disable no-useless-concat */
import React from "react";
import Styled from './subNavbar.module.css'
import { useLocation } from "react-router-dom";

export const SubNavbar = () => {
  
  let location : string = useLocation().pathname
  const locationArr = location.split("/")
  if (locationArr[0] === '')locationArr.shift()

  return (
    <React.Fragment>
      <div className={Styled.lnb_box}>
        <div className={Styled.lnb_area}>
          <div className={Styled.path_root}>
            {
              locationArr.map((a)=>
                <span key={a}>{">" + " " + a.replace("_"," ")}</span>
              )
            }          
          </div>
          <div className={Styled.Sub_menu}>
            
            
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}