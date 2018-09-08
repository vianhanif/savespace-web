import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';

import styled, {css} from 'styled-components';

import * as Components from '../components';
import ShippingMenu from '../components/menu/shippingMenu';
import FormEmail from '../components/form/formEmail';
import {logPageView, initGA} from '../shared/utils/Analytics';

const FormEmailWrap = styled.div`
  color: #152934;
  font-family: roboto;
  h1 {
    font-size: 32px;
    font-weight: bold;
    line-height: normal;
    letter-spacing: 0.9px;
    margin: 24px 0;
    small {
      font-size: 12px;
      font-weight: 300;
      line-height: 1.83;
      letter-spacing: normal;
      display: block;
      margin-top: 8px;
    }
  }
  h2 {
    font-size: 14px;
    font-weight: 500;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
  }
`;

const Separator = styled.div`
  margin: 40px 0;
  text-align: center
  &:before,
  :after {
    display: inline-block;
    margin: 4px 0;
    height: 2px;
    content: ' ';
    text-shadow: none;
    background-color: #999;
    width: 40%;
    @media (max-width: 420px) {
      width: 20%;
    }
  }
  &:before {
    margin-right: 23px;
  }
  &:after {
    margin-left: 23px;
  }
`;

class FormEmailPage extends Component {
  componentDidMount(){
    initGA();
    logPageView();
  }
  render() {
    return (
      <FormEmailWrap className="bg-light full-100vh">
        <ShippingMenu />
        <Components.contentWrapper contentName="form-check">
          <h1>
            Sudah pernah belanja di ebaba?
            <small>
              Masukkan email atau nomor handphone yang pernah kamu gunakan di
              ebaba untuk memudahkan proses checkout
            </small>
          </h1>

          <FormEmail>
            <button
              type="submit"
              className="btn shipping-btn btn-block"
              style={{padding: '8px', borderRadius: '10px'}}>
              Selanjutnya
            </button>
          </FormEmail>

          <Separator>atau</Separator>
          <Link to="/shipping">
            <h2>SAYA BELUM PERNAH BELANJA DI EBABA</h2>
          </Link>
        </Components.contentWrapper>
      </FormEmailWrap>
    );
  }
}

export default FormEmailPage;
