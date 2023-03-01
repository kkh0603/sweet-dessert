import React, { useEffect } from "react";
import Styled from './subNavbar.module.css'
import { useLocation } from "react-router";

export const SubNavbar = () => {
  
  let readLocation = useLocation().pathname
  
  useEffect(()=>{
  })

  return (
    <React.Fragment>
      <div className={Styled.lnb_box}>git
        <div className={Styled.lnb_area}>
          <div onClick={()=>{}} className={Styled.path_root}>
            {'aaaaas'}
          </div>
          <div className={Styled.Sub_menu}>
            bbbbbb
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}