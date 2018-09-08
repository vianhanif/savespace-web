import React, {Fragment, Component} from 'react';

import * as Components from '../components';
import BottomMenu from '../components/bottomMenu';
import MenuCard from '../components/MenuPage/MenuCard';
import {logPageView, initGA} from '../shared/utils/Analytics';

class AboutPage extends Component {
  componentDidMount(){
    initGA();
    logPageView();
  }
  render() {
    return (
      <Fragment>
        <Components.topMenu>
          <Components.pageMenu>Tentang Kami</Components.pageMenu>
        </Components.topMenu>
        <Components.contentWrapper contentName="menupage-content">
          <MenuCard type={1}>
            <p>
              Saat ini Instagram sudah menjadi social channel yang
              sangat desirable di kalangan urban society. Suksesnya
              Instagram membawa kesadaran bagi local brand untuk memanfaatkan
              channel ini sebagai tempat berjualan dan mengembangkan brandnya.
            </p>

            <p>
              Fenomena ini menimbulkan semacam encouragement sehingga muncullah
              entrepreneur-2 baru yang tumbuh subur di channel Instagram.{' '}
            </p>

            <p>
              Menyadari fenomena tersebut serta semakin semaraknya usaha kecil
              mandiri yang bergerak di fashion muslimah, Ebaba shop melihat
              adanya window of opportunity yang dapat dilakukan untuk ikut
              mendukung dan membesarkan bisnis entrepreneur instagram.
              Ebaba shop bertujuan menjadi solusi
              sekaligus memberikan kemudahan bagi masyarakat untuk belanja
              online produk-produk brand instagram.{' '}
            </p>

            <p>
              Ebaba Shop berfungsi menjadi
              "rumah" bagi brand-brand instagram, menghadirkan teknologi terbaru
              dalam berbelanja.{' '}
            </p>
            <p>
              Ebaba shop tidak sekedar menjadi
              tempat berkumpulnya brand-brand, tetapi juga sebagai source of
              fashion inspiration bagi Muslim fashionista yang dihadirkan
              melalui pendekatan OOTD (Outfit Of The Day). Curated fashion
              inspiration diambil dari brand yang sudah berkembang maupun yang
              emerging yang dibawakan oleh key influencers yang meng-inspirasi.
              Selamat berselancar, berbelanja dan menjadi partner ebaba.
            </p>
          </MenuCard>
        </Components.contentWrapper>
        <BottomMenu />
      </Fragment>
    );
  }
}

export default AboutPage;
