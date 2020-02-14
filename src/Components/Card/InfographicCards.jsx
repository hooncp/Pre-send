import React, { Component } from 'react'
import InfographicCardUI from './InfographicCardUI'
import {data} from '../../Data/Categories.jsx'

export default class InfographicCards extends Component {
    render() {
        return (
                <div>
                    {data.Categories.map((test)=> 
                        <InfographicCardUI key = {test.id} 
                        imgLink = {test.infographicImg} 
                        categoryName = {test.categoryName}/>)}
                </div>
        )
    }
}
