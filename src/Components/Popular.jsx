import React, { Component } from 'react'
import Cards from './Card/ProductCards'
import {SectionLabel, SectionContainer} from '../Kit'

export default class Popular extends Component {
    render() {
        return (
            <SectionContainer>
                <SectionLabel>Popular gifts</SectionLabel>
                <Cards/>
          </SectionContainer>
        )
    }
}
