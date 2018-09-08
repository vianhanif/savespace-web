import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import Layout, {Container} from './Layout/Layout';
import BottomMenu from '../components/bottomMenu';
import ImgBannerBerbagi from '../static/img/banner_berbagi.jpg';
import ImgBannerKomunitas from '../static/img/banner_komunitas.jpg';
import MenuItem from '../components/MenuPage/MenuItem';
import {logPageView, initGA} from '../shared/utils/Analytics';

const MenuWrap = styled.div`
  margin-top: 1rem;
  overflow: hidden;
`;

const LinkBanner = styled.div`
  width: 100%;
  min-width: 328px;
  margin-bottom: 12px;
  height: 120px;
  min-height: 120px;
  background: url(${({imgUrl}) => imgUrl}) no-repeat center;
  background-size: cover;
  border-radius: 4px;
  .linnier {
    border-radius: 4px;
    background: linear-gradient(transparent 0%, rgba(0, 0, 0, 0.65) 100%);
    height: 100%;
    position: relative;
    overflow: hidden;
    padding: 8px;
    h2 {
      font-family: Roboto;
      font-size: 24px;
      font-weight: bold;
      color: #fff;
      letter-spacing: 0.5px;
      position: absolute;
      bottom: 0;
      small {
        font-size: 12px;
        font-weight: 300;
        line-height: 1.83;
        display: block;
      }
    }
  }
`;

class MenuPage extends Component {
  state = {
    sortActive: false,
    bottomHide: true
  };

  componentDidMount() {
    initGA();
    logPageView();
  }
  
  render() {
    const layoutProps = {
      type: 1,
      headerProps: {
        sortActive: this.state.sortActive,
        bottomHide: this.state.bottomHide
      }
    };

    return (
      <Layout {...layoutProps}>
        <Container>
          <a
            href="//ebaba.co.id/komunitas"
            target="_blank"
            rel="noopener noreferrer">
            <LinkBanner imgUrl={ImgBannerKomunitas}>
              <div className="linnier">
                <h2>
                  ebaba Komunitas
                  <small>Join Ebaba Community</small>
                </h2>
              </div>
            </LinkBanner>
          </a>
          <a
            href="//ebaba.co.id/berbagi"
            target="_blank"
            rel="noopener noreferrer">
            <LinkBanner imgUrl={ImgBannerBerbagi}>
              <div className="linnier">
                <h2>
                  ebaba Berbagi
                  <small>Yuk sedekah sekarang</small>
                </h2>
              </div>
            </LinkBanner>
          </a>

          <MenuWrap>
            <Link to="/shipping-cost">
              <MenuItem icon={'currency-usd'} item={'Cek Ongkos Kirim'} />
            </Link>

            <Link to="/shipping-status">
              <MenuItem icon={'truck'} item={'Status Pengiriman'} />
            </Link>
          </MenuWrap>
          <MenuWrap>
            <Link to="/faq">
              <MenuItem icon={'help-circle'} item={'Syarat Dan Ketentuan'} />
            </Link>

            <Link to="/policy">
              <MenuItem
                icon={'backup-restore'}
                item={'Kebijakan Pengembalian'}
              />
            </Link>
          </MenuWrap>

          <MenuWrap>
            <Link to="/about">
              <MenuItem icon={'emoticon'} item={'Tentang Kami'} />
            </Link>
            <Link to="/contact-us">
              <MenuItem icon={'phone'} item={'Kontak Kami'} />
            </Link>

            {/* <MenuItem icon={'briefcase'} item={'Karir'} /> */}
          </MenuWrap>
        </Container>
        <BottomMenu />
      </Layout>
    );
  }
}

export default MenuPage;
