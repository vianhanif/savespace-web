import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const ImageWrap = styled.div`
  width: 100%;
  position: relative;
  height: 350px;
  overflow: hidden;
`;

const Badge = styled(Link)`
  font-size: 12px;
  line-height: normal;
  letter-spacing: normal;
  font-weight: 500;
  padding: 4px 9px;
  margin-right: 4px;
  height: 24px;
  border-radius: 4px;
  background: #8c9ba5;
  color: #ffffff;
  margin-bottom: 10px;
  display: inline-flex;
  &:hover {
    color: #ffffff;
  }
`;

export const CategoryBadge = ({category}) => (
  <Badge to={`/category/${category.name}`}>{category.name}</Badge>
);

export const VendorName = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  color: #78838b;
  margin-bottom: 8px;
  line-height: 1.5;
  height: 18px;
`;

export const ProductTitle = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 0.875rem;
  font-weight: bold;
  line-height: normal;
  letter-spacing: 0.035rem;
  color: #152934;
`;
