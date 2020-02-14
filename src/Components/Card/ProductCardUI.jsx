import React from 'react';
import {ProductCard, ProductCardTitle, 
        ProductCardBody, ProductPrice,
        ProductCardImg, ProductCardPictureContainer} from '../../Kit'

export default class ProductCardUI extends React.Component {
    render() {
        return (    
        <ProductCard>
            <ProductCardPictureContainer>
                    <ProductCardImg src = {this.props.imgsrc}  className = "card-img-top" alt = "Loading"/>
            </ProductCardPictureContainer>

            <ProductCardBody>
                <ProductCardTitle>{this.props.name}</ProductCardTitle>
                
                <ProductPrice>{this.props.price}</ProductPrice>
            </ProductCardBody>
        </ProductCard>
        )
    }
}
