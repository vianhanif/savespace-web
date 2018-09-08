import React, { Component } from 'react'
import './style.scss'

export default class FloatingButton extends Component {
  render() {
    return (
      <div className="floating-btn">
        {this.props.children}
      </div>
    )
  }
}
