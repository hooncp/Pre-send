import React from 'react'
import './card.css'

export default class Card extends React.Component {
    render() {
        return (
        <div className = "card">
            <div className = "picture-container">
                    <img src = {this.props.imgsrc}  className = "card-img-top" alt = "Loading"/>
            </div>

            <div className = "card-body">
                <h4 className="card-title">{this.props.name}</h4>
                
                <p className="text-price">{this.props.price}</p>
            </div>
        </div>
        )
    }
}
