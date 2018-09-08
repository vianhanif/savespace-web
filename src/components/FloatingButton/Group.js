import React, { Component } from 'react'
import './style.scss'

export default class Group extends Component {
  render() {
    return (
      <div className="floating-group fixed-bottom">
        {this.props.children}
      </div>
    )
  }
}
