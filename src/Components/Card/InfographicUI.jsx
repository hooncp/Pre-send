import React, { Component } from 'react'
import {Link} from 'react-router-dom'


export default class InfographicUI extends Component {
    
    render() {
        return (
            <div className = "infographic-container">
                <Link to = {`/${this.props.categoryName}`}>
                    <img src = {this.props.imgLink} alt = "infographic" className = "infographic-img"/>
                    <p className = "infographic-text">{this.props.categoryName}</p>
                </Link>
            </div>
        )
    }
}
