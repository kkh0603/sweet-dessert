import React from 'react';
import Styled from './contents.module.css'
import { MainRoute } from '../../router/MainRoute';


export const Contents = () => {

  return(
    <React.Fragment>
      <main>
        <div className={Styled.main}>
        </div>
      </main>
      <MainRoute/>
    </React.Fragment>

  )
}