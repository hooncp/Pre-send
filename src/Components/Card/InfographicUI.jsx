import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const InfographicCardWrapper = styled.div`
    position: relative;
    display: inline-flex;
    align-items: center;
    margin: 8px 16px 16px;
`;

const InfographicCardImg = styled.img`
border-radius: 100%;
width: 80px;
height: 80px;
padding: 4px;
position: relative;
overflow: hidden;
object-fit: cover;
`;

const InfographicCardTitle = styled.p`
color: black;
text-align:center;
font-weight: bold;
margin-top: 12px;
font-size: 18px;
line-height: 22px;
`;

export default class InfographicUI extends React.Component {
    
    render() {
        return (
            <InfographicCardWrapper>
                <Link to = {`/${this.props.categoryName}`}>
                    <InfographicCardImg src = {this.props.imgLink} alt = "infographic"/>
                    <InfographicCardTitle>{this.props.categoryName}</InfographicCardTitle>
                </Link>
            </InfographicCardWrapper>
        )
    }
}
