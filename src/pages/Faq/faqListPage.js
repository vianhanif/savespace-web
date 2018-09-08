import React, {Fragment, Component} from 'react';
import history from '../../routers/history';

import * as Components from '../../components';
import BottomMenu from '../../components/bottomMenu';
import {Faq} from '../../components/MenuPage/MenuContentWrap';

const FAQLIST = [
  {name: 'Definisi'},
  {name: 'Konten'},
  {name: 'Pendaftaran Penggunaan Ebaba'},
  {name: 'Transaksi Pembelian'},
  {name: 'Transaksi Penjualan'},
  {name: 'Harga'},
  {name: 'Tarif Pengiriman'},
  {name: 'Jenis Barang'},
  {name: 'Promo'},
  {name: 'Pengiriman Barang'},
  {name: 'Penolakan Jaminan & Batasan Tanggung Jawab'},
  {name: 'Pelepasan'},
  {name: 'Ketidakabsahan'},
  {name: 'Ganti Rugi'},
  {name: 'Pilihan Hukum'},
  {name: 'Kebijakan & Perubahan Pembaharuan'}
];
class FaqList extends Component {
  constructor(props) {
    super(props);
    this.refCuy = React.createRef;
  }
  onFaqChoosen(value) {
    history.push('/faq/detail', {FaqTarget: value});
  }
  render() {
    return (
      <Fragment>
        <Components.topMenu>
          <Components.pageMenu>SYARAT DAN KETENTUAN</Components.pageMenu>
        </Components.topMenu>
        <Components.contentWrapper
          contentName="menupage-content"
          padding="no-padding">
          {FAQLIST.map((list, value) => {
            return (
              <div key={value} onClick={() => this.onFaqChoosen(value)}>
                {/* <a key={value} href={`faq/detail#${value}`}> */}
                <Faq>
                  <div className="item-title">{list.name}</div>
                  <div className="item-arrow">
                    <i className="mdi mdi-chevron-right" />
                  </div>
                </Faq>
                {/* </a> */}
              </div>
            );
          })}
        </Components.contentWrapper>
        <BottomMenu />
      </Fragment>
    );
  }
}

export default FaqList;
