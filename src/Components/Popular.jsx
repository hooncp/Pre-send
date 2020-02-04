import React, { Component } from 'react'
import Label from './Utility/Label';
import Cards from './Card/Cards'

export default class Popular extends Component {
    render() {
        return (
            <div className = "container-category">
                <Label name= "Popular gifts >"/>
                <Cards/>
          </div>
        )
    }
}
