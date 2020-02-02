import React, { Component } from 'react'
import icon1 from '../../Assets/icon1.png'

export default class InfographicUI extends Component {
    render() {
        return (
            <div className = "infographic-container">
                <a href = "/something">
                    <img src = {icon1} alt = "wait" className = "infographic-img"/>
                    <p className = "infographic-text">Category 1</p>
                </a>
            </div>
        )
    }
}
