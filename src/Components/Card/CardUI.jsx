import React from 'react';
import styled from 'styled-components';
import {Card} from 'react-bootstrap';

const CategoryPrice = styled.div`
    color: #fff;
    background: #2a2d36;
    line-height: 24px;
    font-size: 14px;
    display: inline-block;
    position: absolute;
    bottom: 3.5rem;
    left: 10px;
    border-radius: 12px;
    padding: 0 10px;
`;

const CategoryCardTitle = styled.div`
    font-size: medium;
`;

const CategoryCard = styled(Card)`
    width: auto;
    height: auto;   
    padding: 1rem;
    border-radius: 0px !important;
    border: 0px solid rgba(0,0,0,.125) !important;
    &:hover {
        box-shadow: 0 .5rem 2rem rgba(0,0,0,.15)
    }
`;

const CategoryCardBody = styled(Card.Body)`
    padding: 1rem 0rem 0rem 0rem !important;
`;

const CategoryCardPictureContainer = styled.div`
    display: block;
    width: 100%;
    border-radius: 4px;
    padding-top: 100%;
    position: relative;
    overflow: hidden;
`;

const CategoryImgWrapper = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: ease 0.5s;
`


export default class CardUI extends React.Component {
    render() {
        return (    
        <CategoryCard>
            <CategoryCardPictureContainer>
                    <CategoryImgWrapper src = {this.props.imgsrc}  className = "card-img-top" alt = "Loading"/>
            </CategoryCardPictureContainer>

            <CategoryCardBody>
                <CategoryCardTitle>{this.props.name}</CategoryCardTitle>
                
                <CategoryPrice>{this.props.price}</CategoryPrice>
            </CategoryCardBody>
        </CategoryCard>
        )
    }
}
