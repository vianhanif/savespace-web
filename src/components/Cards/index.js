import React, { Component } from 'react'
import './style.scss'

export default class Cards extends Component {
  render() {
    const { props } = this
    return (
      <div className="card" {...props}>
        <div className="card-img-top" style={{
          background: `url('${props.image}') no-repeat center`,
          backgroundSize: 'cover'
        }} alt={props.alt}>
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
