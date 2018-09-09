import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import Button from '../../components/Button'
import * as spaceActions from '../../_actions/Space'
import './style.scss'
import { StarRateIcon, HeartIcon } from 'mdi-react'
import { CurrencyFormatter } from '../../_helpers/CurrencyFormatter'
import FloatingBtn from '../../components/FloatingButton'

class Space extends Component {

  componentWillMount() {
    const { id } = this.props.match.params
    this.props.dispatch(spaceActions.getSpace(id))
  }

  render() {
    const { data } = this.props.Space
    let star = []
    if (data) {
      while (star.length <= 5) {
        if (star.length <= data.rate - 1) {
          star.push(1)
        } else {
          star.push(0)
        }
      }
    }
    return (
      <Fragment>
        {data && (
          <div className="detail-container">
             <div className="header" style={{
               background: `url('${data.images[0].original_path}') no-repeat center`,
               backgroundSize: 'cover'
             }}>
                <div className="text">
                  <label className="title">
                    {data.name}
                    <br/>
                    <smal>
                      {star.map((item, index) => (
                        <StarRateIcon style={{opacity: (item ? 1 : .5)}} color="#ffffff" key={index}/>
                      ))}
                    </smal>
                    <label className="address">{data.address}</label>
                  </label>
                </div>
            </div>
            <div className="love" >
              <FloatingBtn>
                <HeartIcon color="#ffffff" style={{opacity: (data.loved ? 1 : .5)}}/>
              </FloatingBtn>
            </div>
            <div className="detail">
              <div className="row">
                <div className="col-xs-6">
                  <label className="price">{CurrencyFormatter(data.display_price, 'IDR', 0)}</label>
                  <br/>
                  <span className="text">Average per Hour</span>
                </div>
                <div className="col-xs-6">
                  <label>Fasilitas</label>
                   {data.space_facilities.map((item, index) => (
                     <div className="perk">
                        <i className="mdi mdi-bell"/>
                        <span>{item.name}</span>
                    </div>
                   ))}
                </div>
              </div>
              <div className="devider"></div>
            </div>
            <div className="detail-bottom">
               <div className="row">
                  <div className="col-xs-12">
                    <label>Location</label>
                  </div>
                  <div className="col-xs-12">
                    <div className="perk-big">
                      <i className="mdi mdi-pin"/>
                      <span>{data.address}</span>
                    </div>
                    <div className="perk-big">
                      <i className="mdi mdi-phone"/>
                      <span>{data.phone}</span>
                    </div>
                    <div className="perk-big">
                      <i className="mdi mdi-email"/>
                      <span>{data.email}</span>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        )}
      </Fragment>
    )
  }
}

const mapDispatchToProps = dispatch => ({
    dispatch
});
const mapStateToProps = state => ({
  Space: state.Space
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Space));