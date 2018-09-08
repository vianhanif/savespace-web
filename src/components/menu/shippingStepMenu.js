import React, {Component} from 'react';
import classNames from 'classnames';

class shippingStepMenu extends Component {
  constructor(props) {
    super(props);
    const {location} = this.props;
    this.state = {
      activeLink: ''
    };
  }

  componentWillMount() {
    this.setState({
      activeLink: location.pathname
    });
  }

  render() {
    return (
      <div className="bg-light border-top border-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-xs-12">
              <div className="row">
                <div
                  className={`shipping-step-menu col-4 align-center border-right ${
                    this.state.activeLink == '/shipping'
                      ? 'color-gold'
                      : 'color-black'
                  }`}>
                  <div
                    className={`shipping-step-box ${
                      this.state.activeLink == '/shipping'
                        ? 'circle-border-gold'
                        : 'circle-border-grey'
                    }`}>
                    1
                  </div>
                  <span className="title-step-box">Pengiriman</span>
                </div>

                <div
                  className={`shipping-step-menu col-4 align-center border-right ${
                    this.state.activeLink == '/shipping/select-payment'
                      ? 'color-gold'
                      : 'color-black'
                  }`}>
                  <div
                    className={`shipping-step-box ${
                      this.state.activeLink == '/shipping/select-payment'
                        ? 'circle-border-gold'
                        : 'circle-border-grey'
                    }`}>
                    2
                  </div>
                  <span className="title-step-box">Pembayaran</span>
                </div>
                <div
                  className={`shipping-step-menu col-4 align-center  ${
                    this.state.activeLink == '/shipping/review'
                      ? 'color-gold'
                      : 'color-black'
                  }`}>
                  <div
                    className={`shipping-step-box ${
                      this.state.activeLink == '/shipping/review'
                        ? 'circle-border-gold'
                        : 'circle-border-grey'
                    }`}>
                    3
                  </div>
                  <span className="title-step-box">Review</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default shippingStepMenu;
