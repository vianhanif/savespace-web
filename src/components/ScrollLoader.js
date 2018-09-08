import React, {Fragment} from 'react';

import styled, {keyframes} from 'styled-components';

const Spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const ScrollLoader = styled.div`
  border: 5px solid #d3d3d3;
  border-top: 5px solid #ec9d00;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  z-index: 88;
  position: fixed;
  bottom: ${props => (props.active ? `75px` : `-40px`)};
  left: calc(50% - 15px);
  transform: translateX(-50%);
  animation: ${Spin} 2s linear infinite;
  transition: all 0.3s ease;
`;

export default props => <ScrollLoader active={props.load} />;
