import React, { Component } from 'react'
import img1 from "../../Assets/Infographic/test-info-1.png"
import {Link} from 'react-router-dom'

export default class InfographicUI extends Component {
    render() {
        return (
            <div className = "infographic-container">
                <Link to = {`/${this.props.categoryName}`}>
                    <img src = {img1} alt = "infographic" className = "infographic-img"/>
                    <p className = "infographic-text">{this.props.categoryName}</p>
                </Link>
            </div>
        )
    }
}
