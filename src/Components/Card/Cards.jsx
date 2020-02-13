import React, { Component } from 'react'
import CardUI from './CardUI'
import {data} from '../../Data/SampleData'
import {Row, Col} from 'react-bootstrap'
import styled from 'styled-components'

const ColWrapper = styled(Col)`
    padding: 0 !important;
    margin: 0 !important;
`

export default class Cards extends Component {
    render() {
        return (
            <div className = "container-fluid">
                <Row>
                    {data.Products.map((product) => 
                    
                    <ColWrapper md = "3" sm = "4" xs = "6" key = {product.productid}>                        
                        <CardUI 
                            imgsrc = {product.productImg} 
                            name = {product.productName}
                            price = {product.productPrice}/>
                    </ColWrapper>)}
                    
                </Row>  
                
            </div>
        )
    }
}
