import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import * as spaceActions from '../../_actions/Space'
import { PlusIcon } from 'mdi-react'
import ProgressiveImage from '../../shared/components/ProgressiveImage/ProgressiveImage'
import './style.scss'

class MySpaces extends Component {

  componentWillMount() {
    this.props.dispatch(spaceActions.getMySpaces())
  }

  render() {
    let { Space } = this.props
    return (
      <Fragment>
        {Space.my_spaces.length > 0 && (
          <div className="list">
            {Space.my_spaces.map((space, index) => (
              <div className="item">
                <div className="image-container">
                  <div className="image">
                    <ProgressiveImage cover image={space.images[0].original_path} preview={space.images[0].original_path} />
                  </div>
                </div>
                <label className="title">{space.name}</label>
                <label className="caption">{space.address}</label>
              </div>
            ))}
            <div className="item item-button">
              <div className="image-container">
                <div className="image">
                  <PlusIcon className="plus" color="#ffffff"/>
                </div>
              </div>
              <label className="title">Tambah Ruang</label>
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
    User: state.User,
    Space: state.Space
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MySpaces));