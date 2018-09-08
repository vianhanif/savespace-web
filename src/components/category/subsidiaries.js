import React, {Component} from 'react';

import './Subsidiaries.scss';

class subsidiaries extends Component {
  render() {
    let ImgCommunity = require('../../static/img/kombutton.gif');
    let ImgCharity = require('../../static/img/berbutton.gif');
    let bgCommunity = {
      backgroundImage: `url(${ImgCommunity})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    };

    let bgCharity = {
      backgroundImage: `url(${ImgCharity})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    };
    return (
      <div className="row subsidiaries-content no-gutters">
        <div className="col-6">
          <div className="subsidiaries-community">
            <a
              href="//ebaba.co.id/komunitas"
              target="_blank"
              rel="noopener noreferrer">
              <img
                className="img-fluid"
                src={ImgCommunity}
                alt="komunitas"
                style={{
                  borderTopLeftRadius: '8px',
                  borderBottomLeftRadius: '8px'
                }}
              />
            </a>
          </div>
        </div>
        <div className="col-6">
          <div className="subsidiaries-charity">
            <a
              href="//ebaba.co.id/berbagi"
              target="_blank"
              rel="noopener noreferrer">
              <img
                className="img-fluid"
                src={ImgCharity}
                alt="charity"
                style={{
                  borderTopRightRadius: '8px',
                  borderBottomRightRadius: '8px'
                }}
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default subsidiaries;
