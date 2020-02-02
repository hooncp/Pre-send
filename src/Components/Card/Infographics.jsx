import React, { Component } from 'react'
import InfographicUI from './InfographicUI'

export default class Infographics extends Component {
    render() {
        return (
            <div className = "container-fluid responsive-scroll-x">
                <div>
                    <InfographicUI/>
                    <InfographicUI/>
                    <InfographicUI/>
                    <InfographicUI/>
                    
                </div>
            </div>
        )
    }
}
