/* eslint-disable */
import Styled from './navbar.module.css';
import React from 'react';
import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { displayPath } from '../../../redux/store_component/operate';

export const Navbar = () => {
  

  let [shopMenu] = useState(['전체', '푸딩', '찹쌀젤라또', '마카롱'])
  let [userMenu] = useState(['전체', '내정보 설정', '주문내역', '문의'])

  const location = useLocation().pathname

  let navigate = useNavigate();
  let dispatch = useDispatch()

  return (
    <React.Fragment>
      <nav>
        <div className={Styled.gnb_box}>
          <ul className={Styled.gnb_list}>
            <li className={Styled.gnb_itm} onClick={()=>{
                                            navigate('/');
                                            dispatch(displayPath('home'))
                                            }}>
              <div className={Styled.containerBtn}>
                <img src={process.env.PUBLIC_URL + '/navicon/home.png'} alt='Home'/>
                <span className='testSpan'>HOME</span>
              </div>
            </li>
            <li className={Styled.gnb_itm} onClick={()=>{
                                            navigate('/shop');
                                            dispatch(displayPath('shop'))
                                            }}>
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
            <li className={Styled.gnb_itm} onClick={()=>{
                                            navigate('/cart');
                                            dispatch(displayPath('cart'))
                                            }}>
              <div className={Styled.containerBtn}>
                <img src={process.env.PUBLIC_URL + '/navicon/cart.png'} alt='cart'/>
                <span>CART</span>
              </div>
            </li>
            <li className={Styled.gnb_itm} onClick={()=>{
                                            navigate('/user');
                                            dispatch(displayPath('user'))
                                            }}>
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


