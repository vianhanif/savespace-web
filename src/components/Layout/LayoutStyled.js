import React from 'react';
import styled from 'styled-components';

export const GUTTER_TYPE = {
  TOP: 'top',
  BOTTOM: 'bottom',
  NONE: 'none',
  BOTH: 'both'
};

export const Container = styled.div`
  max-width: 28rem;
  position: relative;
  margin: 0 auto;
  padding: ${({gutter}) => {
    switch (gutter) {
      case GUTTER_TYPE.TOP:
        return `120px 0 0`;
      case GUTTER_TYPE.BOTTOM:
        return `15px 0 120px`;
      case GUTTER_TYPE.NONE:
        return `0`;
      case GUTTER_TYPE.BOTH:
        return `90px 0 120px`
      default:
        return `65px 0 120px`;
    }
  }};
  @media screen and (max-width: 520px) {
    margin: ${({noMargin}) => (noMargin ? 0 : `0 0`)};
  }
`;
