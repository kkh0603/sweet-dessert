/* eslint-disable */
import Styled from './navbar.module.css';
import React from 'react';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
  

  let [shopMenu] = useState(['전체', '푸딩', '음료'])
  let [userMenu] = useState(['전체', '내정보 설정', '주문내역', '문의'])

  let navigate = useNavigate();

  return (
    <React.Fragment>
      <nav>
        <div className={Styled.gnb_box}>
          <ul className={Styled.gnb_list}>
            <li className={Styled.gnb_itm} onClick={()=>{navigate('/')}}>
              <div className={Styled.containerBtn}>
                <img src={process.env.PUBLIC_URL + '/navicon/home.png'} alt='Home'/>
                <span className='testSpan'>HOME</span>
              </div>
            </li>
            <li className={Styled.gnb_itm} onClick={()=>{navigate('/shop')}}>
              <div className={Styled.containerBtn}>
                <img src={process.env.PUBLIC_URL + '/navicon/shop.png'} alt='shop'/>
                <span>SHOP</span>
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
            </li>
            <li className={Styled.gnb_itm} onClick={()=>{navigate('/cart')}}>
              <div className={Styled.containerBtn}>
                <img src={process.env.PUBLIC_URL + '/navicon/cart.png'} alt='cart'/>
                <span>CART</span>
              </div>
            </li>
            <li className={Styled.gnb_itm} onClick={()=>{navigate('/user')}}>
              <div className={Styled.containerBtn}>
                <img src={process.env.PUBLIC_URL + '/navicon/user.png'} alt='user'/>
                <span>USER</span>
              </div>
              <div className={Styled.user_sub_menu}>
                <ul className={Styled.user_sub_menu_list}>
                  {
                    userMenu.map((a)=> {
                      return (
                        <li key={a} className={Styled.user_sub_menu_item}>- {a}</li>
                      )
                    })
                  }
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  )
}


