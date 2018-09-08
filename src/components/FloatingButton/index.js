import React, { Component } from 'react'
import './style.scss'

export default class FloatingButton extends Component {
  render() {
    return (
      <div className="floating-btn" onClick={this.props.onClick}>
        {this.props.children}
      </div>
    )
  }
}
