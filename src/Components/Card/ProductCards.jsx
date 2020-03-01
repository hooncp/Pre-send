import React, { Component } from 'react'
import ProductCardUI from './ProductCardUI'
import {data} from '../../Data/SampleData'
import {NoPaddingCol, KitRow} from '../../Kit'

export default class Cards extends Component {
    render() {
        return (
                <KitRow>
                    {data.Products.slice(0,6).map((product) => 
                    <NoPaddingCol md = "4" sm = "4" xs = "6" key = {product.productid}>                        
                        <ProductCardUI 
                            item = {product}
                        />
                    </NoPaddingCol>)}
                    
                </KitRow>  
        )
    }
}
