import React, { Component } from 'react'
import classNames from 'classnames'
import './style.scss'

export default class Button extends Component {
  render() {
    return (
      <button type="button" className={classNames('btn', `btn-${this.props.type}`)}>
          {this.props.children}
      </button>
    )
  }
}
