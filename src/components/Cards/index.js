import React, { Component } from 'react'
import './style.scss'

export default class Cards extends Component {
  render() {
    const { props } = this
    return (
      <div class="card">
        <div class="card-img-top" style={{
          backgroundSize: 'cover',
          background: `url('${props.image}') no-repeat center`
        }} alt={props.alt}>
        </div>
        <div class="card-body">
            <label className="title">{props.title || 'Space Title'}</label>
            <br/>
            <label className="caption">{props.description || 'Description'}</label>
        </div>
      </div>
    )
  }
}
