import React, { Component } from 'react'
import './style.scss'

export default class Group extends Component {
  render() {
    return (
      <div className="card-group">
        <label className="title">{this.props.title}</label>
        <div className="list">
          {this.props.children}
        </div>
      </div>
    )
  }
}
