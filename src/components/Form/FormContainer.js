import React, { Component } from 'react'
import classNames from 'classnames'
import './style.scss'

class FormContainer extends Component {
    render () {
        return (
            <div className={classNames({'form': true, [this.props.className]: (this.props.className !== null)})}>
                {this.props.children}
            </div>
        )
    }
}

export default FormContainer