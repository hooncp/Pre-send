import React from 'react';
import {Link} from 'react-router-dom';
import {InfographicCardTitle, InfographicCardImg, InfographicCard} from '../../Kit'

export default class InfographicCardUI extends React.Component {
    
    render() {
        return (
            <InfographicCard>
                <Link to = {`category/${this.props.categoryName}`}>
                    <InfographicCardImg src = {this.props.imgLink} alt = "infographic"/>
                    <InfographicCardTitle>{this.props.categoryName}</InfographicCardTitle>
                </Link>
            </InfographicCard>
        )
    }
}
