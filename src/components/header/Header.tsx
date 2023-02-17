import Styled from './header.module.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'
import { Logo } from './logo_component/Logo';

export const Header = () => {


  let [shopMenu] = useState(['전체', '푸딩', '찹쌀젤라또', '마카롱'])
  let [userMenu] = useState(['전체', '내정보 설정', '주문내역', '문의'])

  let navigate = useNavigate();
  
  return (
    <React.Fragment>
      <header>
        <div className={Styled.header_area}>
          <div className={Styled.shadow_bot_line}>
            <div className={Styled.ico_gnb_area}>
              <Logo/>
              <div className={Styled.gnb_box}>
                <ul className={Styled.gnb_list}>
                  <li className={Styled.gnb_itm} onClick={()=>{navigate('/')}}>
                    <img src={process.env.PUBLIC_URL + '/navicon/home.png'} alt='Home'/>
                    <span>HOME</span>
                  </li>
                  <li className={Styled.gnb_itm} onClick={()=>{navigate('/shop')}}>
                    <img src={process.env.PUBLIC_URL + '/navicon/shop.png'} alt='Home'/>
                    <span>SHOP</span>
                  </li>
                  <li className={Styled.gnb_itm} onClick={()=>{navigate('/cart')}}>
                    <img src={process.env.PUBLIC_URL + '/navicon/cart.png'} alt='Home'/>
                    <span>CART</span>
                  </li>
                  <li className={Styled.gnb_itm} onClick={()=>{navigate('/user')}}>
                    <img src={process.env.PUBLIC_URL + '/navicon/user.png'} alt='Home'/>
                    <span>USER</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={Styled.shadow_bot_line}>
            <div className={Styled.lnb_area}>
              <div className={Styled.menu_path}>
                
              </div>
              <div className={Styled.shop_sub_menu}>
                <ul className={Styled.shop_sub_menu_list}>
                  {
                    shopMenu.map((a)=> {
                      return (
                        <li key={a} className={Styled.shop_sub_menu_item}>- {a}</li>
                      )
                    })
                  }
                </ul>
              </div>
              <div className={Styled.user_sub_menu}>
                <ul className={Styled.user_sub_menu_list}>
                  {
                    userMenu.map((a)=> {
                      return (
                        <li key={a} className={Styled.shop_sub_menu_item}>- {a}</li>
                      )
                    })
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  )
}