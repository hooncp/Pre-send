import React, { Component } from 'react'
import Card from './CardUI'
import {data} from '../../Data/SampleData'

export default class Cards extends Component {
    render() {
        return (
            <div className = "container-fluid">
                <div className = "row">
                    {data.Products.map((product) => 
                    
                    <div key = {product.productid} className="col-md-3 col-sm-4 col-6 nopadding">                        
                        <Card 
                                imgsrc = {product.productImg} 
                                name = {product.productName}
                                price = {product.productPrice}/>
                                {console.log(product.productid)}
                    </div>)}
                    
                </div>  
                
            </div>
        )
    }
}
