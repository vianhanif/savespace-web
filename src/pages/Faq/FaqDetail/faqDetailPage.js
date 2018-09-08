import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';

import {FAQDETAIL} from '../../../_constants/menuPageConstants';
import * as Components from '../../../components';
import BottomMenu from '../../../components/bottomMenu';
import MenuCard from '../../../components/MenuPage/MenuCard';

class definePage extends Component {
  state = {
    faqTarget: 0
  };
  componentWillMount() {
    // console.log(this.props);
    const {location} = this.props;
    if (location.state && location.state.FaqTarget) {
      this.setState({faqTarget: location.state.FaqTarget});
    }
  }

  componentDidMount() {
    // console.log(this.state.faqTarget);
    const {location} = this.props;
    // find refs dom
    const findTarget = ReactDOM.findDOMNode(this.refs[this.state.faqTarget]);
    const faqTargetPos = findTarget.getBoundingClientRect();
    // console.log(faqTargetPos);
    // console.log(window.pageYOffset);
    // set scroll
    if (this.state.faqTarget != 0) {
      window.scrollTo({
        top: faqTargetPos.top + window.pageYOffset - 70,
        behavior: 'smooth'
      });
    }
  }

  render() {
    return (
      <Fragment>
        <Components.topMenu>
          <Components.pageMenu>SYARAT DAN KETENTUAN</Components.pageMenu>
        </Components.topMenu>
        <Components.contentWrapper contentName="menupage-content">
          {FAQDETAIL.map((DETAIL, value) => {
            return (
              <MenuCard type={1} key={value}>
                {value === 0 ? (
                  <div>
                    <p>
                      Selamat datang di website dan/atau aplikasi mobile Ebaba.
                    </p>

                    <p>
                      Dibawah ini adalah Syarat dan Ketentuan yang mengatur
                      terkait penggunaan dan pemakaian Layanan dari PT. Ebaba
                      Muslim Indonesia (Ebaba). Silahkan Pengguna membaca dengan
                      seksama Syarat dan Ketentuan Penggunaan dan Pemakaian
                      Layanan yang berpengaruh pada Hak dan Kewajiban Pengguna
                      terhadap Hukum.
                    </p>

                    <p>
                      Dengan mengunduh, mendaftar, dan/atau menggunakan website
                      dan/atau aplikasi Ebaba, maka Pengguna Setuju bahwa telah
                      membaca, mengerti, memahami, menerima dan menyetujui semua
                      isi Syarat & ketentuan dan Mengikatkan Pengguna secara
                      otomatis. Jika Pengguna tidak menyetujui Syarat &
                      Ketentuan baik salah satu, sebagian, atau seluruh isi,
                      maka Pengguna tidak disarankan/tidak diperkenankan
                      menggunakan Layanan di website dan/atau aplikasi mobile
                      Ebaba.
                    </p>
                  </div>
                ) : null}
                <h2 ref={value}>
                  {value + 1}. {DETAIL.ITEM.title}
                </h2>
                {DETAIL.ITEM.content && DETAIL.ITEM.content}
                <ol type="1">
                  {DETAIL.ITEM &&
                    DETAIL.ITEM.list &&
                    DETAIL.ITEM.list.map(list => {
                      return (
                        <li key={list.id}>
                          {list.content}
                          <ol type="a">
                            {list &&
                              list.child &&
                              list.child.map(child => {
                                return <li key={child.id}>{child.content}</li>;
                              })}
                          </ol>
                        </li>
                      );
                    })}
                </ol>
              </MenuCard>
            );
          })}
        </Components.contentWrapper>
        <BottomMenu />
      </Fragment>
    );
  }
}

export default definePage;
