import React, { Component } from 'react'
import InfographicUI from './InfographicUI'
import {data} from '../../Data/Categories.jsx'


export default class Infographics extends Component {
    render() {
        return (
            <div className = "container-fluid responsive-scroll-x">
                <div>
                    {data.Categories.map((test)=> 
                        <InfographicUI key = {test.id} 
                        imgLink = {test.infographicImg} 
                        categoryName = {test.categoryName}/>)}
                </div>
            </div>
        )
    }
}
