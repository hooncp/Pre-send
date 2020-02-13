import React, { Component } from 'react'
import Label from './Utility/Label';
import Cards from './Card/Cards'
import {ContainerWrapper} from './Utility/Label';

export default class Popular extends Component {
    render() {
        return (
            <ContainerWrapper>
                <Label name= "Popular gifts >"/>
                <Cards/>
          </ContainerWrapper>
        )
    }
}
