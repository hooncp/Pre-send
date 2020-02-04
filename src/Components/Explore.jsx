import React, { Component } from 'react'
import Label from './Utility/Label';
import Infographics from './Card/Infographics';

export default class Explore extends Component {
    render() {
        return (
            <div className = "container-category">
            <Label name= "Explore Presend"/>
            <Infographics/>
          </div>
        )
    }
}
