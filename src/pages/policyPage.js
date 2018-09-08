import React, {Fragment, Component} from 'react';

import * as Components from '../components';
import BottomMenu from '../components/bottomMenu';
import MenuCard from '../components/MenuPage/MenuCard';
import {POLICY} from '../_constants/menuPageConstants';
import {PolicyWrap} from '../components/MenuPage/MenuContentWrap';
import {logPageView, initGA} from '../shared/utils/Analytics';

class Policy extends Component {
  componentDidMount(){
    initGA();
    logPageView();
  }
  render() {
    return (
      <Fragment>
        <Components.topMenu>
          <Components.pageMenu>Kebijakan Pengembalian</Components.pageMenu>
        </Components.topMenu>
        <Components.contentWrapper contentName="menupage-content">
          <MenuCard type={1}>
            <PolicyWrap>
              <span className="question">{POLICY.first.q}</span>
              <p>{POLICY.first.a}</p>

              <span className="question">{POLICY.second.q}</span>
              <p>{POLICY.second.a}</p>
              <p>catatan: {POLICY.second.note}</p>

              <span className="question">{POLICY.third.q}</span>
              <p>{POLICY.third.a}</p>
              <ol>
                {POLICY.third.list.map((lis, value) => {
                  return <li key={value}>{lis.desc}</li>;
                })}
              </ol>

              <span className="question">{POLICY.fourth.q}</span>
              <p>{POLICY.fourth.a}</p>

              <span className="question">{POLICY.fifth.q}</span>
              {POLICY.fifth.option.map((opt, value) => {
                return (
                  <div key={value}>
                    <u>{opt.optList}</u>
                    <p>{opt.optDesc}</p>
                  </div>
                );
              })}
              <span className="question">Perhatian :</span>
              <p>{POLICY.fifth.note}</p>
            </PolicyWrap>
          </MenuCard>
        </Components.contentWrapper>
        <BottomMenu />
      </Fragment>
    );
  }
}

export default Policy;
