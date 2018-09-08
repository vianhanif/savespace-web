import React, {Fragment, Component} from 'react';

import * as Components from '../components';
import BottomMenu from '../components/bottomMenu';
import MenuCard from '../components/MenuPage/MenuCard';
import {logPageView, initGA} from '../shared/utils/Analytics';

class ContactUs extends Component {
  componentDidMount(){
    initGA();
    logPageView();
  }
  render() {
    return (
      <Fragment>
        <Components.topMenu>
          <Components.pageMenu>Kontak &amp; Alamat Ebaba</Components.pageMenu>
        </Components.topMenu>
        <Components.contentWrapper contentName="category-content">
          <MenuCard type={1}>
            <h1>PT Ebaba Muslim Indonesia</h1>
            <div className="address">
              Menara Imperium Lt.15 <br />
              Jl. HR Rasuna Said No. 1 <br />
              Jakarta Selatan 12980 DKI Jakarta <br />
              Indonesia
            </div>
            <div className="contact">
              <div className="contact-item">Line</div>
              <div className="contact-item">@ebaba</div>
              <div className="contact-item">Whatsapp</div>
              <div className="contact-item">+6213129312983</div>
              <div className="contact-item">Instagram</div>
              <div className="contact-item">@ebaba.id</div>
              <div className="contact-item">Youtube</div>
              <div className="contact-item">Ebaba Indonesia</div>
              <div className="contact-item">Email</div>
              <div className="contact-item">cs@ebaba.co.id</div>
            </div>
          </MenuCard>
        </Components.contentWrapper>
        <BottomMenu />
      </Fragment>
    );
  }
}

export default ContactUs;
