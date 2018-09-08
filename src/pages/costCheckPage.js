import React, {Fragment, Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';

import styled from 'styled-components';

import * as Components from '../components';
import BottomMenu from '../components/bottomMenu';
import MenuCard from '../components/MenuPage/MenuCard';

import {CurrencyFormatter} from '../_helpers/CurrencyFormatter';
import {
  getListProvince,
  getListCity,
  getListDistrict,
  calculateJNE
} from '../_actions/shippingActions';
import {logPageView, initGA} from '../shared/utils/Analytics';

const CostTotal = styled.div`
  margin-top: 40px;
  color: #152934;
  font-family: Roboto;
  text-align: center;
  .label {
    font-size: 12px;
    line-height: 4;
  }
  .total {
    font-size: 32px;
    font-weight: bold;
    line-height: 1.5;
    letter-spacing: 0.9px;
  }
`;
class CostCheck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: 'no-value',
      province: 'no-value',
      district: 'no-value',
      ongkir: 0
    };
    const {history} = this.props;
    this.props.actions.getListProvince();
  }
  componentDidMount(){
    initGA();
    logPageView();
  }
  handleSelectChange = e => {
    const {value: val, name} = e.target;
    let state = {
      ...this.state
    };
    switch (name) {
      case 'province':
        state = {
          province: val,
          city: 'no-value',
          district: 'no-value',
          ongkir: 0
        };
        break;
      default:
        state = {
          [name]: val
        };
    }
    return this.setState(() => {
      // console.log(name)
      if (name === 'province') {
        this.props.actions.getListCity(val);
      } else if (name === 'city') {
        this.props.actions.getListDistrict(val);
      }
      return {...state};
    });
  };

  onChangeProvince = e => {
    const val = e.target.value;
  };

  onChangeCity = e => {
    this.props.actions.getListDistrict(e.target.value);
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.actions.calculateJNE(this.state).then(res => {
      this.setState({
        ongkir: res.data.estimated_fee
      });
    });
  };

  render() {
    const {allProvinces, allCity, allDistrict} = this.props.shippingReducers;
    return (
      <Fragment>
        <Components.topMenu>
          <Components.pageMenu>Cek Biaya Pengiriman</Components.pageMenu>
        </Components.topMenu>
        <Components.contentWrapper
          contentName="menupage-content"
          padding="no-padding">
          <MenuCard type={1}>
            <form>
              <div className="shipping-card">
                <div className="shipping-card-body">
                  <div className="form-group">
                    <label htmlFor="inputProvince">Pilih provinsi</label>
                    <select
                      name="province"
                      component="select"
                      className="form-control"
                      value={this.state.province}
                      id="inputProvince"
                      onChange={this.handleSelectChange}>
                      <option value="no-value" disabled="disabled">
                        Pilih Provinsi
                      </option>
                      {allProvinces.length > 0
                        ? allProvinces.map((province, index) => {
                            return (
                              <option key={index} value={province.id}>
                                {province.name}
                              </option>
                            );
                          })
                        : null}
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="inputCity">Pilih Kota/ Kabupaten</label>
                    <select
                      name="city"
                      component="select"
                      className="form-control"
                      id="inputCity"
                      value={this.state.city}
                      onChange={this.handleSelectChange}>
                      <option value="no-value" disabled="disabled">
                        Pilih Kota/ Kabupaten
                      </option>
                      {allCity.length > 0
                        ? allCity.map((city, index) => {
                            return (
                              <option key={index} value={city.id}>
                                {city.name}
                              </option>
                            );
                          })
                        : null}
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="inputSubDistrict">Pilih Kecamatan</label>
                    <select
                      name="district"
                      component="select"
                      className="form-control"
                      value={this.state.district}
                      id="inputSubDistrict"
                      onChange={this.handleSelectChange}>
                      <option value="no-value" disabled="disabled">
                        Pilih Kecamatan
                      </option>
                      {allDistrict.length > 0
                        ? allDistrict.map((district, index) => {
                            return (
                              <option key={index} value={district.id}>
                                {district.name}
                              </option>
                            );
                          })
                        : null}
                    </select>
                  </div>
                  <div className="card-footer bg-light">
                    <button
                      className="btn shipping-btn btn-block"
                      onClick={this.handleSubmit}
                      disabled={this.state.district === 'no-value'}>
                      Cek Ongkos Kirim
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </MenuCard>
          <CostTotal>
            <div className="label">Ongkos Kirim</div>
            <div className="total">
              {CurrencyFormatter(this.state.ongkir, 'IDR')}
            </div>
          </CostTotal>
        </Components.contentWrapper>
        <BottomMenu />
      </Fragment>
    );
  }
}

// const mapDispatchToProps = dispatch => ({
//   dispatch,
//   getListProvince: () => dispatch(getListProvince())
// })

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        getListProvince,
        getListCity,
        getListDistrict,
        calculateJNE
      },
      dispatch
    )
  };
}

// mapStateToProps = state => ({
//   shipping: state.shippingReducers
// })
const mapStateToProps = state => {
  return {
    shippingReducers: state.shippingReducers
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CostCheck)
);
