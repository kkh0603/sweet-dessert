import React from 'react';
import Styled from './wrap.module.css';
import {Reset} from 'styled-reset'
import { Header } from './components/header/Header';
import { Contents } from './components/main/Contents';

function Wrap() {
  return (
    <React.Fragment>
      <Reset/>
        <div id={Styled.Wrap}>
          <Header/>
          <Contents/>
        </div>


        

    </React.Fragment>
  );
}

export default Wrap;
