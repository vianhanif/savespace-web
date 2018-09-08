import React from 'react';
import styled from 'styled-components';

export const Faq = styled.div`
  padding: 16px;
  font-size: 16px;
  letter-spacing: 0.5px;
  color: #152934;
  background-color: #ffffff;
  box-shadow: inset 0 -1px 0 0 #dfe3e6;
  height: 56px;
  position: relative;
  .item-title {
    top: 50%;
    left: 0;
    transform: translate(0, -50%);
    position: relative;
  }
  .item-arrow {
    font-size: 23px;
    position: absolute;
    color: #8c9ba5;
    top: 50%;
    right: 5px;
    transform: translate(-50%, -50%);
    transition: all ease 0.4s;
  }
`;

export const PolicyWrap = styled.div`
  font-size: 12px;
  font-weight: 300;
  line-height: 1.5;
  letter-spacing: normal;
  color: #152934;
  .question {
    font-weight: bold;
  }
  p,
  u,
  ul,
  .question {
    margin-bottom: 1.5rem;
    display: block;
  }
`;
