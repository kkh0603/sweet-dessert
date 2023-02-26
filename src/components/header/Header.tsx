import Styled from './header.module.css';
import React from 'react';
import { Logo } from './logo_component/Logo';
import { Navbar } from './navbar_component/Navbar';
import { SubNavbar } from './subNavbar_component/SubNavbar';


export const Header = () => {
  
  return (
    <React.Fragment>
      <header>
        <div className={Styled.header_area}>
          <div className={Styled.shadow_bot_line}>
            <div className={Styled.ico_gnb_area}>
              <Logo/>
              <Navbar/>
            </div>
          </div>
          <div className={Styled.shadow_bot_line}>
            <SubNavbar/>
          </div>
        </div>
      </header>
    </React.Fragment>
  )
}