import React, { Component } from 'react'
import './Utility.css'

export default class Label extends Component {
    render() {
        return (
            <h3 className = "label-style">
               {this.props.name} 
            </h3>
        )
    }
}
