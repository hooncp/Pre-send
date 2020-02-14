import React, { Component } from 'react'
import ProductCardUI from './ProductCardUI'
import {data} from '../../Data/SampleData'
import {NoPaddingCol, KitRow} from '../../Kit'

export default class Cards extends Component {
    render() {
        return (
                <KitRow>
                    {data.Products.map((product) => 
                    <NoPaddingCol md = "3" sm = "4" xs = "6" key = {product.productid}>                        
                        <ProductCardUI 
                            imgsrc = {product.productImg} 
                            name = {product.productName}
                            price = {product.productPrice}/>
                    </NoPaddingCol>)}
                    
                </KitRow>  
        )
    }
}
