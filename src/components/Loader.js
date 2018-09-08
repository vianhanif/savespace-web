import React, {Fragment} from 'react';
import styled from 'styled-components';

const Loader = styled.div`
  min-height: ${({withWrapper}) => (withWrapper ? `calc(100vh - 150px)` : `initial`)};
  @keyframes loader-spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .loader {
    position: absolute;
    margin: -18px 0 0 -18px;
    border: 3.6px solid #ec9d00;
    box-sizing: border-box;
    overflow: hidden;
    width: 36px;
    height: 36px;
    left: 50%;
    top: 50%;
    animation: loader-spin 2s linear infinite reverse;
    filter: url(#goo);
    box-shadow: 0 0 0 1px #ec9d00 inset;
  }
  .loader:before {
    content: '';
    position: absolute;
    animation: loader-spin 2s cubic-bezier(0.59, 0.25, 0.4, 0.69) infinite;
    background: #ec9d00;
    transform-origin: top center;
    border-radius: 50%;
    width: 150%;
    height: 150%;
    top: 50%;
    left: -12.5%;
  }
`;

export default props => (
  <Loader withWrapper={props.withWrapper}>
    <div className="loader">
      <svg>
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 5 -2"
              result="gooey"
            />
            <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
          </filter>
        </defs>
      </svg>
    </div>
  </Loader>
);
