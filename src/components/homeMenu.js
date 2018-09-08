import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import EbabaIcon from '../static/img/ebaba-icon.png';
import SearchForm from '../components/form/searchForm';
import EbabaLogo from '../shared/svg-icons/EbabaLogo';
import Header from './Header/Header';

class homeMenu extends Component {
  render() {
    return (
      <div className="home-menu">
        <Header {...this.props}/>
        {/* <div className="row">
          <div
            className="col-2 col-sm-2"
            style={{margin: 'auto auto', textAlign: 'left'}}>
            <Link to="/">
              <div className="home-icon" style={{width: '2rem'}}>
                <EbabaLogo />
              </div>
          </Link>
          </div>
          <div className="col-10 col-sm-10">
            <Link to="/search">
              <SearchForm />
            </Link>
          </div>
        </div> */}
      </div>
    );
  }
}

export default homeMenu;
