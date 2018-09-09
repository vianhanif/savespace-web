import React, { Component } from 'react'
import ProgressiveImage from '../../shared/components/ProgressiveImage/ProgressiveImage'
import './style.scss'

export default class Cards extends Component {
  render() {
    const { props } = this
    return (
      <div className="card" {...props}>
        <div className="card-img-top">
          <ProgressiveImage cover image={props.image} preview={props.image} />
        </div>
        <div className="card-body">
            <label className="title">{props.title || 'Space Title'}</label>
            <br/>
            <label className="caption">{props.description || 'Description'}</label>
        </div>
      </div>
    )
  }
}
