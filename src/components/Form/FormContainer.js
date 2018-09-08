import React, { Component } from 'react'
import './style.scss'

class FormContainer extends Component {
    render () {
        return (
            <div className="form">
                {this.props.children}
            </div>
        )
    }
}

export default FormContainer