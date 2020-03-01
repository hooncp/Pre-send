import React from 'react';
import {Link} from 'react-router-dom';
import {ProductCard, ProductCardTitle, 
        ProductCardBody, ProductPrice,
        ProductCardImg, ProductCardPictureContainer} from '../../Kit'

export default class ProductCardUI extends React.Component {
    render() {
        return (    
        <ProductCard>
            <Link to = {`product/${this.props.item.productid}`}>
            <ProductCardPictureContainer>
                    <ProductCardImg src = {this.props.item.productImg}  className = "card-img-top" alt = "Loading"/>
            </ProductCardPictureContainer>

            <ProductCardBody>
                <ProductCardTitle>{this.props.item.productName}</ProductCardTitle>
                
                <ProductPrice>{this.props.item.productPrice}</ProductPrice>
            </ProductCardBody>
            </Link>
        </ProductCard>
        )
    }
}
