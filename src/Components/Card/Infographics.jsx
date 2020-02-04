import React, { Component } from 'react'
import InfographicUI from './InfographicUI'
import img1 from '../../Assets/Infographic/test-info-1.png'

export default class Infographics extends Component {

    render() {
        return (
            <div className = "container-fluid responsive-scroll-x">
                <div>
                    <InfographicUI img = {img1} categoryName = "Category 1"/>
                    <InfographicUI img = {img1} categoryName = "Category 2"/>
                    <InfographicUI img = {img1} categoryName = "Category 3"/>
                </div>
            </div>
        )
    }
}
