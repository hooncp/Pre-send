import React, { Component } from 'react'
import InfographicCards from './Card/InfographicCards';
import {SectionLabel, SectionContainer} from '../Kit'

export default class Explore extends Component {
    render() {
        return (
            <SectionContainer>
                <SectionLabel> 
                    Explore Presend
                </SectionLabel>
                <InfographicCards/>
            </SectionContainer>
        )
    }
}
