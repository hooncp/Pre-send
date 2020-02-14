import React, { Component } from 'react'

import Popular from '../Components/Popular';
import Explore from '../Components/Explore';
import {PageContainer} from '../Kit'

export default class MainPage extends Component {
    render() {
        return (
            <PageContainer>
                <Explore/>
                <Popular/>
            </PageContainer>
        )
    }
}
