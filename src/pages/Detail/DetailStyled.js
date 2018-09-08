import React from 'react';
import styled from 'styled-components';

export const DetailContainer = styled.div`
  z-index: 10000;
  transition: all 0.3s;
  padding: 48px 0 57.19px;
  min-height: 100vh;
  max-width: 28rem;
  margin: 0 auto;
  /* background: #ffffff; */
`;

export const White = styled.div`
  background: #ffffff;
`;

export const FixedTop = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  left: 0;
  z-index: 3;
  box-shadow: 0 -2px 20px rgba(0,0,0,0.015);
`;
