import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';
import styled from 'styled-components';
import history from '../routers/history';

const PageMenuContainer = styled.div`
  margin: auto 0;
  padding: 10px 16px;
  width: 100%;
  background: #ffffff;
  .innerWrap {
    display: flex;
    background: #ffffff;
    max-width: 480px;
    margin: 0 auto;
  }
  .backLink {
    color: #ec9d00;
    margin-right: 32px;
  }
`;
class PageMenu extends Component {
  handleBack = e => {
    e.stopPropagation();
    return history.goBack();
  }
  render() {
    return (
      <PageMenuContainer>
        <div className="innerWrap">
          <div className="backLink">
            <div onClick={this.handleBack} className="color-gold">
              <i className="mdi mdi-arrow-left arrow-back" />
            </div>
          </div>
          <div className="page-menu-title">{this.props.children}</div>
        </div>
      </PageMenuContainer>
    );
  }
}

export default withRouter(PageMenu);
