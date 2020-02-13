import React, { Component } from 'react'
import Label from './Utility/Label';
import Infographics from './Card/Infographics';
import {ContainerWrapper} from './Utility/Label';

export default class Explore extends Component {
    render() {
        return (
            <ContainerWrapper>
                <Label name= "Explore Presend"/>
                <Infographics/>
            </ContainerWrapper>
        )
    }
}
