import React from 'react'
import './card-style.css'

export default class Card extends React.Component {
    render() {
        return (
        <div className = "card">
            <div className = "picture-container">
                    <img src = {this.props.imgsrc}  className = "card-img-top" alt = "Loading"/>
            </div>

            <div className = "card-body">
                <h4 className="card-title">{this.props.title}</h4>
                <p className="text-price">S$10</p>
            </div>
        </div>
        )
    }
}
