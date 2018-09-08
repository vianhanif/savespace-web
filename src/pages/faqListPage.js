import React, {Fragment, Component} from 'react';

import * as Components from '../components';
import BottomMenu from '../components/bottomMenu';
import Collapse from '../components/Collapse/collapseMenu';
import {logPageView, initGA} from '../shared/utils/Analytics';

class FaqList extends Component {
  componentDidMount(){
    initGA();
    logPageView();
  }
  render() {
    return (
      <Fragment>
        <Components.topMenu>
          <Components.pageMenu>FAQ List</Components.pageMenu>
        </Components.topMenu>
        <Components.contentWrapper
          contentName="category-content"
          padding="no-padding">
          <Collapse id="1" title="Pertanyaan Umum">
            Sorry, On Progress :(
          </Collapse>
          <Collapse id="2" title="Cara Pemesanan">
            Sorry, On Progress :(
          </Collapse>
          <Collapse id="3" title="Persyaratan & Ketentuan">
            Sorry, On Progress :(
          </Collapse>
          <Collapse id="4" title="Kebijakan Privasi">
            Sorry, On Progress :(
          </Collapse>
        </Components.contentWrapper>
        <BottomMenu />
      </Fragment>
    );
  }
}

export default FaqList;
