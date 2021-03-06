import React, { Component } from 'react'
import classNames from 'classnames'
import './style.scss'

export default class Button extends Component {
  render() {
    let { onClick } = this.props
    if (!onClick) {
      onClick = () => {}
    }
    return (
      <button style={this.props.style} onClick={onClick} type="button" className={classNames('btn', `btn-${this.props.type}`)}>
          {this.props.children}
      </button>
    )
  }
}
