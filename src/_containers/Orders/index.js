import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import Button from '../../components/Button'
import * as orderActions from '../../_actions/Order'
import ProgressiveImage from '../../shared/components/ProgressiveImage/ProgressiveImage'
import './style.scss'

class Orders extends Component {

  state = {
    openDetail: false
  }

  componentWillMount() {
    this.props.dispatch(orderActions.getOrders())
  }

  pickOrder(item) {
    this.props.dispatch(orderActions.pickOrder(item))
  }

  render() {
    return (
      <Fragment>
        {this.props.Order.list.length > 0 && (
          <div className="order-container">
            {this.props.Order.list.map((item, index) => (
              <div className="order-item" key={index}>
                <div className="content">
                  <label className="date">{item.date}</label>
                  <label className="room">{item.room}</label>
                  <div className="line"></div>
                  <div className="time">
                    <label className="value">{item.start_time}</label>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <label className="value">{item.end_time}</label>
                  </div>
                  <label className="status">{item.status}</label>
                  <Button>Detail</Button>
                </div>
                <div className="image-container">
                  <div className="image-view">
                    <ProgressiveImage cover image={item.image} preview={item.image} />
                  </div>
                  {item.owned && (
                    <div className="action">
                      <Button type="secondary">Tolak</Button>
                      <Button type="primary">Terima</Button>
                    </div>
                  )}
                  {!item.owned && (
                    <Button type="primary">Bayar</Button>
                  )}
                </div>
              </div>
            ))}
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
  Order: state.Order
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Orders));